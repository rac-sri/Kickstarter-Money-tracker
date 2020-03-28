import React from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    state = {  }
    
    async componentDidMount(){
        const campaigns = await factory.methods.getDeployedCamplaigns().call();

        console.log(campaigns);
    }

    render(){
        return <div>Campaigns index</div>
    }
}
 
export default CampaignIndex;