import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class CampaingNew extends Component {
  state = {
    minimumContribution: 0,
    err: "",
    loading: false
  };

  onSubmit = async event => {
    try {
      event.preventDefault();
      this.setState({ loading: true, err: "" });
      console.log("shkdf");
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });
    } catch (err) {
      this.setState({ err: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <Layout>
        <h3>New Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.err}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              value={this.state.minimumContribution}
              label="wei"
              labelPosition="right"
              onChange={event => {
                event.preventDefault();
                this.setState({ minimumContribution: event.target.value });
              }}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.err} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaingNew;
