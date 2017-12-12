import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';
import { Grid, Header, Form, Button, Modal, Input, List } from 'semantic-ui-react';
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
  .row-content {
    padding: 25px;
    .content {
      p {
        font-size: 17px;
        font-weight: bold;
        line-height: 1;
      }
      p.not-preferred {
        font-size: 20px;
      }
      .search-authorized-dealer {
        cursor: pointer;
        color: blue;
        font-size: 15px;
      }
    }
  }
`;

const AuthorizedDealerModalHeader = styled.div`
  background: black;
  color: white;
`;
const AuthorizedDealerModalContent = styled.div`
.recall-content-txt {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: black;
}
`
const AuthorizedDealerModalAction = styled.div`
.authorized-dealer-md-button {
  padding: 15px 65px !important;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  color: white !important;
}
`;

interface Props {
  mainStore: MainStore;
}
@observer
class AuthorizedDelaerContainer extends Component<Props, {}> {
  render() {
    return (
      <Grid container columns={1}>
        <Grid.Column as={MainGrid}>
          <div className="main-header">
            <Header as="h3">YOUR AUTHORIZED MAZDA DEALER</Header>
          </div>
          <Grid columns="equal" className="row-content" reversed="mobile vertically">
            <Grid.Row>
              <Grid.Column mobile={16} tablet={5} computer={5}>
                <div className="content">
                  <p>Capital Mazda</p>
                  <p>980 Capitol Expressway Automall</p>
                  <p>San Jose, CA 95136</p>
                </div>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={5} computer={5}>
                <div className="content">
                  <p>Schedule an Appointment</p>
                  <p>Service: (408) 448-2277</p>
                  <p>
                    <a href="https://www.capitolmazdasj.com">www.capitolmazdasj.com</a>
                  </p>
                  <Button color="red">Schedule Service</Button>
                </div>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={6} computer={6}>
                <div className="content">
                  <p>Convenient Service Hours</p>
                  <p>Mon: - Fri: 7:30 AM - 7: 00 PM</p>
                  <p>Sat: 8:00 AM - 5: 00 PM</p>
                  <br />
                  <p className="not-preferred">Not your preferred</p>
                  <p className="not-preferred">
                    dealer?
                    <Modal trigger={<a className="search-authorized-dealer">click here.</a>} closeIcon>
                      <Modal.Header as={AuthorizedDealerModalHeader}>Search for an authorized Mazda dealer</Modal.Header>
                      <Modal.Content as={AuthorizedDealerModalContent}>
                        <Modal.Description>
                          <Grid centered>
                            <Grid.Column>
                              <Form>
                                <Form.Field>
                                  <label>Please enter your zip to find a dealer:</label>
                                  <Input placeholder="Enter 5 digit zip code"/>
                                </Form.Field>
                              </Form>
                            </Grid.Column>
                          </Grid>
                        </Modal.Description>
                      </Modal.Content>
                      <Modal.Actions as={AuthorizedDealerModalAction}>
                        <Button basic>Close</Button>
                        <Button color="red">Search now</Button>
                      </Modal.Actions>
                    </Modal>
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}
export default typedInject('mainStore')(AuthorizedDelaerContainer);
