require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remember smile good prize swift suggest'; 
let testAccounts = [
"0x344c54c81ce7af2296bc3329198323fc7f6203ba1d7c906ed57dd8da93ab2e5f",
"0x71a0f3c9662dfaa30745d6db10fcb08a8d459e86385731129b6d06fd5b3471ad",
"0xc77472e2c8e7a58400e3c978b129c39226cea3cd9b9f5f0122a307e6a9391843",
"0x5eeaf3f879515001836cd2fa982ae3e29207a1b96a98f9e52e700a2d0d558a78",
"0x452ef909a989fccc334af917b80e19f219d6325b8aaf9fe733631e4eae6dfd30",
"0x62591bf4827b2b1855b44ef1eef2a45667782287c1eb7ca0fdf1a6995277ad74",
"0xddc7b183879b99866ffac99a4a5bf46857b5cc9e667c407185a896d64b47f665",
"0xbeac3aba88bda26934884f98ebc7d16c1093453ba6813755f04ab2a8399ffd07",
"0x0d573bd8fcc97bbd8264223a5b337b1f3e8da8f122a1021b4c170f45353914a5",
"0xf276b27fef656b7fc94571f1debfecf4fd2169cc464416f28a3f0ca161e1b8d8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

