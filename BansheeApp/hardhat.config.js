require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
  	moonbase: {
  		url: 'https://fraa-flashbox-4441-rpc.a.stagenet.tanssi.network/',
  		chainId: 2099, // Moonbase alpha testnet,
  		accounts: ['']
  	}
  }
};
