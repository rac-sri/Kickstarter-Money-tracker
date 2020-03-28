import React ,{Component} from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    state = {  }
    
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns}
    }

    render(){
        return <div>Campaigns index {this.props.campaigns[0]}</div>
    }
}
 
export default CampaignIndex;