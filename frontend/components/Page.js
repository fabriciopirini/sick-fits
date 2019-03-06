import React, { PureComponent } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const Styledpage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Styledpage>
        <Meta />
        <Header />
        <Inner>{children}</Inner>
      </Styledpage>
    );
  }
}

Page.propTypes = {
  children: PropTypes.string.isRequired
};

export default Page;
