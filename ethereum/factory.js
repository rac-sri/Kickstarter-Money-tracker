import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instace = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x5A76bf45785bBa3ADF023d71cff06dDeB0F0e4bc'
)

export default instance;