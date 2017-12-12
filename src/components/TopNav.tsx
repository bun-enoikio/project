import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { typedInject } from '../stores/util';
import { MainStore } from '../stores/mainStore';
import { Menu, Image } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledMenu = styled.div`
  .right-menu-item {
    padding-right: 80px;
  }
`;

interface Props {
  mainStore: MainStore;
}
@observer
class TopNav extends Component<Props, {}> {
  render() {
    return (
      <Menu as={StyledMenu} inverted>
        <Menu.Item className="menu-item">
          <Image src="http://via.placeholder.com/100x100" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item className="right-menu-item">
            <div>
              <p>Mazda San Francisco</p>
              <p>1525 Howard St.</p>
              <p>San Francisco, CA 94103</p>
              <p>(415) 241-8100</p>
            </div>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
export default typedInject('mainStore')(TopNav);
