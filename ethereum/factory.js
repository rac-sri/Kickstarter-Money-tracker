import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x876F684273E6614Eae5f2BCae5eEd29D44501248"
);

export default instance;
