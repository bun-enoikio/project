import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Grid, Header, Form, Button, Modal, Input, Image, List } from 'semantic-ui-react';
import styled from 'styled-components';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';

const StyledSearchInfo = styled.div`
  form {
    padding-bottom: 20px;
  }
  .search-button {
    padding: 12px 50px;
  }
  .search-link {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const RecallSearchDiv = styled.div`
  .recall-search-link {
    color: red;
    padding: 0 5px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const RecallModalHeader = styled.div`
  text-align: center;
`;
const RecallModalContent = styled.div`
  .recall-content-txt {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.8px;
    color: black;
  }
  .vin-info {
    padding-top: 20px;
    .vin-info-list {
      padding-left: 30px;
    }
  }
`;
const RecallModalAction = styled.div`
  text-align: center !important;
  .recall-md-button {
    padding: 15px 65px !important;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    color: white !important;
    background-color: #696666 !important;
  }
`;
interface Props {
  mainStore: MainStore;
}
@observer
class SearchRecallsContainer extends Component<Props, {}> {
  render() {
    return (
      <Grid container columns={2}>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <StyledSearchInfo className="search-info">
            <Header as="h3">Search Recalls and Special Service Program (SSP) Info</Header>
            <p className="vehicle-info">Enter your Vehicle Identification Number to get VIN-specific campaign info:</p>
            <Form>
              <Form.Field>
                <input placeholder="17 characters, letters & numbers." maxLength={17} />
              </Form.Field>
              <Button className="search-button" type="submit">
                SEARCH
              </Button>
            </Form>
            <Modal trigger={<a className="search-link">WHERE DO I FIND MY VIN?</a>} closeIcon>
              <Modal.Header as={RecallModalHeader}>WHERE DO I FIND MY VIN?</Modal.Header>
              <Modal.Content as={RecallModalContent}>
                <Modal.Description>
                  <Grid centered>
                    <Grid.Column mobile={14} tablet={8} computer={8}>
                      <Image src="http://via.placeholder.com/450x350" />
                      <Grid.Row className="vin-info">
                        <p>
                          Every vehicle has a unique 17-character Vehicle Identification Number (VIN) that contains
                          information about that vehicle. You can find your VIN:
                        </p>
                        <List bulleted className="vin-info-list">
                          <List.Item>On a sticker in the driver's side door jamb</List.Item>
                          <List.Item>At the base of the windshield on the driver's side</List.Item>
                          <List.Item>On your vehicle's registration</List.Item>
                          <List.Item>On your insurance statement or proof-of-insurance card</List.Item>
                          <List.Item>On your financial services statement</List.Item>
                        </List>
                      </Grid.Row>
                    </Grid.Column>
                  </Grid>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions as={RecallModalAction} />
            </Modal>
          </StyledSearchInfo>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <RecallSearchDiv>
            <Header as="h3">
              To receive important recall notifications about your vehicle via email,
              <Modal trigger={<a className="recall-search-link">click here.</a>} closeIcon>
                <Modal.Header as={RecallModalHeader}>RECALL OPT-IN FORM</Modal.Header>
                <Modal.Content as={RecallModalContent}>
                  <Modal.Description>
                    <p className="recall-content-txt">
                      Enter your information below to receive recall updates about your vehicle via email. If at any
                      point you decide you no longer wish to receive recall updates, you will be able unsubscribe from
                      further notifications in the footer of the emails sent.
                    </p>
                    <Grid centered>
                      <Grid.Column mobile={14} tablet={8} computer={8}>
                        <Form>
                          <Form.Field>
                            <label>VIN</label>
                            <Input />
                          </Form.Field>
                          <Form.Field>
                            <label>First Name</label>
                            <Input />
                          </Form.Field>
                          <Form.Field>
                            <label>Last Name</label>
                            <Input />
                          </Form.Field>
                          <Form.Field>
                            <label>Email</label>
                            <Input />
                          </Form.Field>
                          <Form.Field>
                            <label>Confirm Email</label>
                            <Input />
                          </Form.Field>
                        </Form>
                      </Grid.Column>
                    </Grid>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions as={RecallModalAction}>
                  <Button className="recall-md-button">Submit</Button>
                </Modal.Actions>
              </Modal>
            </Header>
          </RecallSearchDiv>
        </Grid.Column>
      </Grid>
    );
  }
}
export default typedInject('mainStore')(SearchRecallsContainer);
