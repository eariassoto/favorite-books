//import styles
import 'grommet/scss/grommet-core/index';

import React from 'react';
import { Link } from 'react-router';

// Grommet components
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

import Actions from 'grommet/components/icons/base/Actions';

export default class Layout extends React.Component {
  render() {
    return (
      <App centered={false}>
      <Header>
        <Title>
          My Favorite Books
        </Title>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Search inline={true}
            fill={true}
            size='medium'
            placeHolder='Search'
            dropAlign={{"right": "right"}} />
          <Menu icon={<Actions />}
            dropAlign={{"right": "right"}}>
            <Anchor href='#'
              className='active'>
              First
            </Anchor>
            <Anchor href='#'>
              Second
            </Anchor>
            <Anchor href='#'>
              Third
            </Anchor>
          </Menu>
        </Box>
        </Header>
        <div className="app-content">{this.props.children}</div>
        <Footer primary={true} appCentered={true} direction="column"
          align="center" pad="small" colorIndex="grey-1">
          <p>
            This is a basic example using <a href="http://grommet.io" target="_blank">Grommet</a> and <a href="http://expressjs.com/" target="_blank">Express</a>.
          </p>
        </Footer>
      </App>
    );
  }
}
