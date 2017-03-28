//import styles
import 'grommet/scss/vanilla/index';

import React from 'react';
import { Link } from 'react-router';

// Grommet components
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';

export default class Layout extends React.Component {
  render() {
    return (
      <App centered={false}>
        <Header direction="row" justify="between" large={true}
          pad={{horizontal: 'medium'}}>
          <Title>My favorite books</Title>
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
