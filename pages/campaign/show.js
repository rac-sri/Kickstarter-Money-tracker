import React, { Component, createFactory } from "react";
import Layout from "../../components/layout";
import Campaign from "../../ethereum/campaign";

class CampaignShow extends Component {
  state = {};

  static async getInitialProps(props) {
    console.log("sdlkfjsd");
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary();
    console.log(summary);
    return { summary };
  }
  render() {
    return (
      <Layout>
        <h1>Campains</h1>
      </Layout>
    );
  }
}

export default CampaignShow;
