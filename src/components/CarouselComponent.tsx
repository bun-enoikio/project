import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';
import { Grid, Image, Segment } from 'semantic-ui-react';
const Slider = require('react-slick').default;
import styled from 'styled-components';

const StyledSegment = styled.div`
  height: 483px;
  margin: 0 auto;
  padding: 20px 20px 20px 20px;
  background-color: lightgray !important;
  .message-box {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 22px;
    .text-1 {
      text-align: center;
    }
    .text-2 {
      padding-top: 20px;
    }
    .img-1 {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }
`;

interface Props {
  mainStore: MainStore;
}
@observer
class CarouselComponent extends Component<Props, {}> {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Grid container columns={2}>
        <Grid.Column mobile={16} tablet={10} computer={10}>
          <div className="carousel">
            <Slider {...settings}>
              <div>
                <Image src="http://via.placeholder.com/350x293" size="big" />
              </div>
              <div>
                <Image src="http://via.placeholder.com/350x293" size="big" />
              </div>
            </Slider>
          </div>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={6} computer={6} only="tablet computer">
          <div className="main-text">
            <Segment basic as={StyledSegment}>
              <div className="message-box">
                <div className="text-1">
                  Because Driving Matters, Safety Matters. Your Safety Is Important To Mazda.
                </div>
                <div className="text-2">
                  Mazda is committed to your safety. This site was created to make it easy for you to get accurate and
                  timely information in the event that your vehicle has a recall. If your vehicle is affected by a
                  recall, please schedule an appointment to have your vehicle repaired by an authorized Mazda dealer as
                  soon as possible.
                </div>
                <div className="img-1">
                  <Image src="http://via.placeholder.com/100x100" />
                </div>
              </div>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default typedInject('mainStore')(CarouselComponent);
