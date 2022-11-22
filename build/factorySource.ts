const helloContractAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"getResult","inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"outputs":[{"name":"result","type":"uint256"}]}],"data":[{"key":1,"name":"_nonce","type":"uint16"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nonce","type":"uint16"}]} as const
const walletAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"sendTransaction","inputs":[{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"bounce","type":"bool"}],"outputs":[]}],"data":[{"key":1,"name":"_nonce","type":"uint16"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_nonce","type":"uint16"}]} as const

export const factorySource = {
    HelloContract: helloContractAbi,
    Wallet: walletAbi
} as const

export type FactorySource = typeof factorySource
export type HelloContractAbi = typeof helloContractAbi
export type WalletAbi = typeof walletAbi
