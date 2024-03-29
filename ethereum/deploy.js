const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "call glow acoustic vintage front ring trade assist shuffle mimic volume reject",
  "https://rinkeby.infura.io/v3/3dc8b2e3489c4260904f45a4e74a56dc"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ gas: "4000000", from: accounts[0] });
  console.log(result);
  console.log("Contract deployed to", result.options.address);
};
deploy();
