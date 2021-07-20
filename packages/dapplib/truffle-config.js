require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain mixture grace casino swap taste'; 
let testAccounts = [
"0xa047bd8df97ffc326cc84e18929e6e9862e1872e79dc5d9f0b0501b3f4efda34",
"0xde78dc941da3c1502c48c015af0c601da369bb1ecaa50877b14a99c5c964789b",
"0x737913d1c9bbfbaad15a737467ec2d2c28bf9ab730544f0440d93411b8e47876",
"0xd4296091879b429eaac49ef110ad2659215c681a86dde3b429d867456c9b6564",
"0x423ab486fdfcf9b360df922be60c9c60ddd86b677d5889675a84c641e6af88bd",
"0x45b511db59272a6d46776ea6fe211785aeffbecf4cb15d38d528407f05b36fc6",
"0xf65a462a478eaba509935d921179f88aaf59a1dfbf33db3bbacd4bf188de28e1",
"0x76fcd32c1033c96fd44f28198b4569b2a3e4c9c17089b1fb7249ca5507c9587e",
"0xf8f33269c7546975f61368d067ee784ade6c194b73ec1650e8324cd12a4af294",
"0x8f1f65dfb537e115dca547965b46ab3e3aed65aabbd920bb0f52e0fdf6e789c1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


