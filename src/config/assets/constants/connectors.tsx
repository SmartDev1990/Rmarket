import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
    0: "https://serverrpc.com",
    3: "https://mainnet.infura.io/v3/b54cce4b8d564b0b9f9e84e0cdd8efa2",
    4: "https://rinkeby.infura.io/v3/b54cce4b8d564b0b9f9e84e0cdd8efa2"
};

const rpcUrl = RPC_URLS[0];//getNodeUrl();
const chainId = parseInt('0', 10);
export const injected = new InjectedConnector({
    supportedChainIds: [32520], //mainChainId
    // supportedChainIds: [32520], //testChainId
});

export const walletconnect = new WalletConnectConnector({
    rpc: { [chainId]: rpcUrl },
    qrcode: true,
    bridge: "https://bridge.walletconnect.org",
    // pollingInterval: POLLING_INTERVAL,
});
