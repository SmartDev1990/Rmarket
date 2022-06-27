import abi from "./abi";

export default {
    netId: 32520, //mainId
    updateTime: 35000,
    swapFee: 100000,
    Token: {
        RICE: {
            address: "0x5d0C865e353837e89505e5189E06873B3C88C0C4",
            abi: abi.RICE
        },
        USDT: {
            address: "0xDe14b85cf78F2ADd2E867FEE40575437D5f10c06",
            abi: abi.USDT
        },
        BRISE: {
            address: "0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710",
            abi: abi.BRISE
        }
    },
    NFT: {
        address: "0xB31BEA278EAF0425aD8d88f0D2524A3cBB638aE7",
        abi: abi.NFT
    },
    Market: {
        address: "0x956C9ced2E5dcd14Dc65bA85a7c5653DEA0A0e1A",
        abi: abi.MARKET
    },
    Lottery: {
        address: "0x9b6A2aede4364600dd0bbAB6c06ddd3fC305388B",
        abi: abi.LOTTERY
    },
    InfuraId: 'b596546b8ae94aa883f9830c1fw90767f',
    brisePrice: 100000000000000000000,
    usdtPrice: 1,
    ricePrice: 1,
    briseTicketPrice: 1050000000000000,
    usdtTicketPrice: 10000000000000000000,
    riceTicketPrice: 14500000000000000000,
    briseToUsd: 0,0000004,
    usdtToUsd: 1,
    riceToUsd: 10,
}
