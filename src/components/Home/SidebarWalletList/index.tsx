import * as React from 'react';
import { useRouter } from 'next/router';
import { styled } from "@mui/material/styles"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Avatar, Alert, Tooltip, Link, CircularProgress } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ReplayIcon from '@mui/icons-material/Replay';
import CheckIcon from '@mui/icons-material/Check';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import LogoutIcon from '@mui/icons-material/Logout';

import AppConfig from "@/utils/AppConfig";
import toast from "@/components/Toast";
import "react-toastify/dist/ReactToastify.css";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { SidebarWalletLSection, DropdownMenu, StyledBadge, Input } from './styles';
import AffiliateSetModal from '@/components/Home/AffiliateSetModal';

import Config from '@/config/app';
import { Wallets, ConnectedWallet } from '@/config/assets/constants/wallets';
import { walletconnect } from "@/config/assets/constants/connectors";
import { useEagerConnect, useInactiveListener } from "@/hooks/index";
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";
import { URI_AVAILABLE, UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";

import { NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from "@web3-react/injected-connector";
import Web3 from "web3";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

declare const window: Window &
    typeof globalThis & {
        ethereum: any
    }

const Overlay = styled('div')(({ theme, openwalletlist }: { theme?: any, openwalletlist: any }) => {
    return ({
        position: 'fixed',
        inset: 0,
        zIndex: 70,
        opacity: 0,
        display: 'none',
        transition: 'opacity 0.3s ease-in-out 0s',
        ...(openwalletlist && {
            opacity: 1,
            display: 'block',
        }),
        backgroundColor: 'rgba(0, 0, 0, 0.15)'
    })
})

export default function SidebarWalletList(props: any) {// the function is being called multiple times
    const router = useRouter();
    const { ref } = router.query;
    const { openwalletlist, setToggleWalletList } = props;
    const [BRISEValue, setBRISEValue] = React.useState('0');
    const [USDTValue, setUSDTValue] = React.useState('0');
    const [RICEValue, setRICEValue] = React.useState('0');
    const [rewardBRISEValue, setRewardBRISEValue] = React.useState('0');
    const [rewardUSDTValue, setRewardUSDTValue] = React.useState('0');
    const [rewardRICEValue, setRewardRICEValue] = React.useState('0');
    const triedEager = useEagerConnect();
    const { activate, active, account, deactivate, connector, error, setError, library }: any = useWeb3React();
    const [activatingConnector, setActivatingConnector] = React.useState(undefined);
    const [isSelectingWallet, setIsSelectingWallet] = React.useState(true);
    const cWallet = ConnectedWallet();
    const [affiliateLink, setAffiliateLink] = React.useState('');
    const [affiliateLinkCopied, setAffiliateLinkCopied] = React.useState(false);
    const [referalModal, setReferalModal] = React.useState(false);

    const notify = React.useCallback((type, message) => {
        toast({ type, message });
    }, []);

    const handleChangeAffiliateLink = (event: any) => {
        setAffiliateLink(event.target.value);
    }
    const handleAffiliateCopy = () => {
        setAffiliateLinkCopied(true);
        notify('success', 'Affiliate link is copied!');
    }
    useInactiveListener(!triedEager);

    const onConnectWallet = (item: any) => async () => {
        setActivatingConnector(item.connector);
        setIsSelectingWallet(false);
        sessionStorage.close = false;
        await activate(item.connector);
    };

    const onDeactiveWallet = () => {
        setIsSelectingWallet(true);
        sessionStorage.close = "true";
        deactivate();
    };

    const retryConnect = async () => {
        setError(null);
        const activating = Wallets.find(item => (item.connector === activatingConnector || item.connector === connector));

        if (window.ethereum) {
            await window.ethereum
                .request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: `32520`,
                            chainName: "Brise Mainnet",
                            rpcUrls: ["https://serverrpc.com"],
                            nativeCurrency: {
                                name: "BRISE",
                                symbol: "BRISE",
                                decimals: 18,
                            },
                            blockExplorerUrls: ["https://brisescan.com/"],
                        },
                    ],
                })
                .then(() => {
                    notify("success", "You have successfully changed to Binance Main Network.");
                })
                .catch((error: any) => {
                    notify("error", error.toString());
                });
        } else {
            notify('error', '')
        }
        onConnectWallet(activating);
    };

    const changeWallet = (error: any) => {
        if (!error) {
            return true;
        } else {
            setError(null);
            setIsSelectingWallet(true);
        }
    }

    const getErrorMessage = (error: any) => {
        if (error instanceof NoEthereumProviderError) {
            return "Install MetaMask on desktop or visit from a dApp browser on mobile.";
        } else if (error instanceof UnsupportedChainIdError) {
            return "You're connected to an unsupported network.";
        } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect ||
            error instanceof UserRejectedRequestErrorFrame
        ) {
            return "Please authorize this website to access your Binance account.";
        } else {
            console.error(error);
            return "An unknown error occurred. Check the console for more details.";
        }
    };

    const fromWei = React.useCallback((web3, val) => {
        if (val) {
            val = val.toString();
            return web3.utils.fromWei(val);
        } else {
            return "0"
        }
    }, []);


    const convertValuetoString = (value: string) => {
        let _value = value.toString();
        if (_value.length > 10) {
            return _value.substring(0, 10) + '...'
        } else {
            return _value
        }
    }

    const handleClaim = async () => {
        if ((rewardBRISEValue == '0' && rewardUSDTValue == '0' && rewardRICEValue == '0')) return notify('error', 'No reward for you')

        const web3 = new Web3(library.provider);
        const Market = new web3.eth.Contract(
            Config.Market.abi,
            Config.Market.address
        )

        try {
            await Market.methods.claimRewards()
                .send({ from: account })
                .on('receipt', function (receipt: any) {
                    // const newIds = receipt.events.mintedNFT.returnValues.newIds;
                })
                .then((_tx: any) => {
                    notify('success', 'You have claimed the reward');
                    getReward();
                })
        } catch (err: any) {
            if (err.code == 4001) notify('error', err.message);
            else notify('error', 'Error claim reward');
            console.log('Error claim reward : ', err);
        }
        getReward();
    }

    const valueload = async () => {
        const web3 = new Web3(library.provider);
        const ContractRICE = new web3.eth.Contract(
            Config.Token.RICE.abi,
            Config.Token.RICE.address
        );

        const ContractUSDT = new web3.eth.Contract(
            Config.Token.USDT.abi,
            Config.Token.USDT.address
        );

        const briseValue = await web3.eth.getBalance(account);
        const riceValue = await ContractRICE.methods.balanceOf(account).call();
        const usdtValue = await ContractUSDT.methods.balanceOf(account).call();

        setBRISEValue(convertValuetoString(fromWei(web3, briseValue)));
        setRICEValue(convertValuetoString(fromWei(web3, riceValue)));
        setUSDTValue(convertValuetoString(fromWei(web3, usdtValue)));

    }

    const getReward = async () => {
        const web3 = new Web3(library.provider);

        const Market = new web3.eth.Contract(
            Config.Market.abi,
            Config.Market.address
        );

        try {
            const reward = await Market.methods.rewards(account).call();
            setRewardBRISEValue(convertValuetoString(fromWei(web3, reward.brise)).toString());
            setRewardRICEValue(convertValuetoString(fromWei(web3, reward.usdt)).toString());
            setRewardUSDTValue(convertValuetoString(fromWei(web3, reward.rice)).toString());
        } catch (err: any) {
            if (err.code == 4001) notify('error', err.message);
            else notify('error', 'Error get reward');
            console.log('Error get reward : ', err);
        }
    }
    // ** Effects
    React.useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);
    // log the walletconnect URI
    React.useEffect(() => {
        const logURI = (uri: any) => {
            console.log("WalletConnect URI", uri);
        };
        walletconnect.on(URI_AVAILABLE, logURI);

        return () => {
            walletconnect.off(URI_AVAILABLE, logURI);
        };
    }, []);

    React.useEffect(() => {
        if (ref) setReferalModal(true);
    }, [ref]);

    React.useEffect(() => {
        if (active) {
            valueload();
            getReward();
        } else {
            setIsSelectingWallet(true);
        }
        setAffiliateLink(`https://ricenft.store/?ref=${account}`);
    }, [account, active, error])

    return (
        <>
            <SidebarWalletLSection openwalletlist={openwalletlist ? 1 : 0} connectloading={isSelectingWallet ? 0 : 1}>
                {active ? (
                    <div>
                        <div>
                            <div className='sidebar-wallet-header'>
                                <span className='header-title'>
                                    <div className='header-title-left'>
                                        <StyledBadge
                                            overlap="circular"
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            variant="dot"
                                        >
                                            {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
                                            <AccountCircleIcon fontSize='large' />
                                        </StyledBadge>
                                        <WalletDropDownMenu onDeactiveWallet={onDeactiveWallet} account={account} cWallet={cWallet} />
                                    </div>
                                    <div className='header-title-right'>
                                        <CopyToClipboard text={account} >
                                            <Tooltip arrow title="Copy address">
                                                <div>
                                                    {account.substring(0, 8)} ... ${account.substring(account.length - 4)}
                                                </div>
                                            </Tooltip>
                                        </CopyToClipboard>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div>
                            {
                                error ?
                                    <Alert
                                        severity="error"
                                        action={
                                            <ReplayIcon onClick={() => retryConnect()} />
                                        }
                                    >
                                        {getErrorMessage(error)}
                                    </Alert> : ""
                            }
                        </div>
                        <div className='sidebar-wallet-body'>
                            <div className='body-header'>
                                <p>
                                    Wallet Amount
                                </p>
                            </div>
                            <div className='body-content'>
                                <div className='token-info'>
                                    <ul className='token-list'>
                                        <li className='token-item'>
                                            <div className="token">
                                                <img src="/images/token/bnb.png" className="tokenimg" ></img>
                                                <span>{BRISEValue} &nbsp;BRISE</span>
                                            </div>
                                        </li>
                                        <li className='token-item'>
                                            <div className="token">
                                                <img src="/images/token/usdt.png" className="tokenimg" ></img>
                                                <span>{USDTValue} &nbsp;USDT</span>
                                            </div>
                                        </li>
                                        <li className='token-item'>
                                            <div className="token">
                                                <img src="/images/token/rice.png" className="tokenimg" ></img>
                                                <span>{RICEValue} &nbsp;RICE</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {
                                    (rewardBRISEValue !== '0' || rewardUSDTValue !== '0' || rewardRICEValue !== '0') && (
                                        <>
                                            <div className='reward-header'>
                                                <p>
                                                    Reward Amount
                                                </p>
                                            </div>
                                            <div className='reward-info'>
                                                <ul className='reward-token-list'>
                                                    <li className='token-item'>
                                                        <div className="token">
                                                            <img src="/images/token/bnb.png" className="tokenimg" ></img>
                                                            <span>{rewardBRISEValue} &nbsp;BRISE</span>
                                                        </div>
                                                    </li>
                                                    <li className='token-item'>
                                                        <div className="token">
                                                            <img src="/images/token/usdt.png" className="tokenimg" ></img>
                                                            <span>{rewardUSDTValue} &nbsp;USDT</span>
                                                        </div>
                                                    </li>
                                                    <li className='token-item'>
                                                        <div className="token">
                                                            <img src="/images/token/rice.png" className="tokenimg" ></img>
                                                            <span>{rewardRICEValue} &nbsp;RICE</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <Button className='button button-regular' onClick={handleClaim}>Claim Reward</Button>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                            <div className='body-footer'>
                                <div className='affiliate-link'>
                                    <div className='link-header'>
                                        <p>Refferal Link</p>
                                        <div style={{ ...(!affiliateLinkCopied && { display: 'none' }) }}>copied</div>
                                    </div>
                                    <div className='link-detail'>
                                        <div className='link-input'>
                                            <Input className="input-text">
                                                <div className='input-prefix'></div>
                                                <input value={affiliateLink} onChange={handleChangeAffiliateLink} autoCapitalize="off" autoComplete="off" autoCorrect="off" data-testid="Input" id="affiliateLink" name="affiliateLink" placeholder="" spellCheck="false" type="text"></input>
                                            </Input>
                                        </div>
                                        <div className='link-copy'>
                                            <CopyToClipboard text={affiliateLink}
                                                onCopy={handleAffiliateCopy}>
                                                <span>Copy</span>
                                            </CopyToClipboard>
                                        </div>
                                    </div>
                                    <div className='affiliate-detail'>
                                        <div>
                                        REWARD FOR PERSON YOU INVITE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='sidebar-wallet-header'>
                            <span className='header-title'>
                                <div className='header-title-left'>
                                    <AccountCircleIcon fontSize='large' />
                                    <span className='header-text'>My Wallet</span>
                                </div>
                            </span>
                        </div>
                        <div>
                            {
                                error ?
                                    <Alert
                                        severity="error"
                                        action={
                                            <ReplayIcon onClick={() => retryConnect()} />
                                        }
                                    >
                                        {getErrorMessage(error)}
                                    </Alert> : ""
                            }
                        </div>
                        <div className='sidebar-wallet-body'>
                            <div className='body-header'>
                                <p>
                                    Connect with one of available
                                    <a className="" href="" target="_blank" aria-expanded="false">
                                        <span className="wallet-info">wallet</span>
                                    </a>
                                    providers or create a new one.
                                </p>
                            </div>
                            <div className='body-content'>
                                <ul className='wallet-list'>
                                    <li className='wallet-item'>
                                        <button onClick={() => notify('warning', 'UsdtMask is comming soon')}>
                                            <div className='wallet-img'>
                                                <img src='/images/wallet/9.png' />
                                            </div>
                                            <div className='wallet-name'>
                                                <span>UsdtMask</span>
                                            </div>
                                            <div className='wallet-info'></div>
                                        </button>
                                    </li>
                                    <li className='wallet-item'>
                                        <button type='button' onClick={onConnectWallet(Wallets[0])} disabled={isSelectingWallet ? false : true}>
                                            <div className='wallet-img'>
                                                <img src='/images/wallet/1.png' />
                                            </div>
                                            <div className='wallet-name'>
                                                <span>MetaMask</span>
                                            </div>
                                            <div className='wallet-info'>
                                                <div className='type'>Popular</div>
                                                <div className='loading'>
                                                    {
                                                        !isSelectingWallet && activatingConnector == Wallets[0].connector && (
                                                            <CircularProgress className='loading-progress' style={{ width: 20, height: 20 }} />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                    <li className='wallet-item'>
                                        <button onClick={onConnectWallet(Wallets[1])}>
                                            <div className='wallet-img'>
                                                <img src='/images/wallet/4.png' />
                                            </div>
                                            <div className='wallet-name'>
                                                <span>Wallet Connect</span>
                                            </div>
                                            <div className='wallet-info'>
                                                <div className='loading'>
                                                    {
                                                        !isSelectingWallet && activatingConnector == Wallets[1].connector && (
                                                            <CircularProgress className='loading-progress' style={{ width: 20, height: 20 }} />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </button>
                                    </li>
                                    <li className='wallet-item'>
                                        <button>
                                            <div className='wallet-img'>
                                                <img src='/images/wallet/5.png' />
                                            </div>
                                            <div className='wallet-name'>
                                                <span>CoinBase Wallet</span>
                                            </div>
                                            <div className='wallet-info'></div>
                                        </button>
                                    </li>
                                    <li className='wallet-item'>
                                        <button>
                                            <div className='wallet-img'>
                                                <img src='/images/wallet/8.png' />
                                            </div>
                                            <div className='wallet-name'>
                                                <span>Trust</span>
                                            </div>
                                            <div className='wallet-info'></div>
                                        </button>
                                    </li>
                                    <li className='wallet-item'>
                                        <button className='more-options'>Show more options</button>
                                    </li>
                                </ul>
                            </div>
                            <div className='body-footer'>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </SidebarWalletLSection>
            <Overlay openwalletlist={openwalletlist ? 1 : 0} onClick={setToggleWalletList}></Overlay>
            <AffiliateSetModal modal={referalModal} setModal={setReferalModal} refLink={ref} />
        </>
    )
}

const WalletDropDownMenu = ({ onDeactiveWallet, account, cWallet }: { onDeactiveWallet: any, account: any, cWallet?: any }) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    if (!cWallet) {
        return (<div>No Wallet</div>)
    }
    return (
        <DropdownMenu open={open} width={150} onClick={handleClick} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div className='dropdownBtn'>
                <div>My Wallet</div>
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </div>
            <div className='subMenuContent'>
                <div className='submenu' style={{ width: 200 }}>
                    <ul>
                        <li>
                            <a href=''>
                                <img src={cWallet.logo.src} className='icon' alt={cWallet?.name} />
                                <div style={{ flex: 1 }}>{cWallet.name}</div>
                                <CheckIcon style={{ color: 'green' }} width={20} height={20} />
                            </a>
                        </li>
                        <li>
                            <Link
                                href={`https://brisescan.com/address/${account}`}
                                target="_blank"
                                underline="none"
                            >
                                <Tooltip arrow title="View on explorer">
                                    <LaunchRoundedIcon />
                                </Tooltip>
                                <div>View on Explorer</div>
                            </Link>
                        </li>
                        <li onClick={onDeactiveWallet}>
                            <a>
                                <LogoutIcon />
                                Log out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </DropdownMenu>
    )
}

function convertValuetoString(arg0: any): number {
    throw new Error('Function not implemented.');
}
