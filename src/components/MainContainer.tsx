import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';
import { Grid, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import RecallResultsContainer from './RecallResultsContainer';
import CarouselComponent from './CarouselComponent';
import SearchRecallsContainer from './SearchRecallsContainer';
import AuthorizedDealerContainer from './AuthorizedDealerContainer';
import TakataAirBagContainer from './TakataAirBagContainer';

const MainContainerGrid = styled.div``;

interface Props {
  mainStore: MainStore;
}
@observer
class MainContainer extends Component<Props, {}> {
  render() {
    return (
      <Grid container as={MainContainerGrid}>
        <Grid.Row centered className="header-row" verticalAlign="middle">
          <Header as="h1">Mazda Recall Information Center</Header>
        </Grid.Row>
        <Grid.Row>
          <CarouselComponent />
        </Grid.Row>
        <Grid.Row>
          <SearchRecallsContainer />
        </Grid.Row>
        <Grid.Row>
          <RecallResultsContainer />
        </Grid.Row>
        <Grid.Row>
          <TakataAirBagContainer />
        </Grid.Row>
        <Grid.Row>
          <AuthorizedDealerContainer />
        </Grid.Row>
      </Grid>
    );
  }
}
export default typedInject('mainStore')(MainContainer);
