import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';
import { Grid, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const MainGrid = styled.div`
  border: 2px solid #464646;
  border-radius: 5px;
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 0 !important;
  .main-header {
    background-color: #464646;
    text-align: center;
    padding: 10px 0;
    h3 {
      color: white;
    }
  }
  .message-text {
    padding: 20px 30px;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 20px;
    .text-1,
    .text-2,
    .text-3,
    .text-4,
    .text-5,
    .text-6 {
      padding: 10px 0;
    }
    .text-4 {
      a {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .hidden {
      display: none;
    }
    .visible {
      display: block;
    }
  }
`;

interface Props {
  mainStore: MainStore;
}
@observer
class RecallResultsContainer extends Component<Props, {}> {
  render() {
    const { showRecallInfo } = this.props.mainStore;
    return (
      <Grid container columns={1}>
        <Grid.Column as={MainGrid}>
          <div className="main-header">
            <Header as="h3">HOW TO UNDERSTAND RECALL SEARCH RESULTS</Header>
          </div>
          <Grid.Row className="message-text">
            <div className="text-1">
              Incomplete means your vehicle has not yet completed the repair. Please schedule an appointment with a
              Mazda dealer to have the repair completed free of charge.
            </div>
            <div className="text-2">
              Incomplete-Remedy Not Yet Available means parts are not yet available for the repair. Please wait until
              you receive a notification from Mazda to bring your vehicle to a dealer for the repair free of charge.
            </div>
            <div className="text-3">Closed means your vehicle has completed the repair.</div>
            <div className="text-4">
              <a onClick={() => this.props.mainStore.toggleShowRecallInfo()}>
                What is the difference between a Recall and Special Service Program (SSP)?
              </a>
            </div>
            <div className={showRecallInfo ? 'visible' : 'hidden'}>
              <div className="text-5">
                There are two forms of motor vehicle recalls: (1) emissions recalls, and (2) safety recalls. Automobile
                manufacturers and/or the U.S. Environmental Protection Agency (EPA) can initiate an emissions recall
                when a substantial number of a category of vehicles fails to meet the federal emissions standard. A
                safety recall involving a motor vehicle or an item of motor vehicle equipment can either be
                independently conducted by a manufacturer or ordered by the National Highway Traffic Safety
                Administration (NHTSA) in order to repair a safety-related defect or noncompliance with a federal motor
                vehicle safety standard. Mazda works continuously with both government agencies on recalls for Mazda
                vehicles. Mazda will not issue a recall as an SSP. Sometimes Mazda will implement a non-safety or a
                regulatory repair as an SSP.
              </div>
              <div className="text-6">
                Warranty Extension Special Service Programs (SSPs) are voluntary campaigns to improve customer
                satisfaction. Customers are contacted by mail, and customer participation is voluntary. Special Service
                Programs that have a Warranty Extension attached are not mandated recalls.
              </div>
            </div>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}
export default typedInject('mainStore')(RecallResultsContainer);
