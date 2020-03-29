import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xdc04977a2078c8ffdf086d618d1f961b6c546222"
);

export default instance;
