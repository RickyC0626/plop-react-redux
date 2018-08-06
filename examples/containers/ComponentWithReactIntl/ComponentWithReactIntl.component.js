import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { style, Container } from './ComponentWithReactIntl.style';


class ComponentWithReactIntl extends Component {
  render() {
    return (
      <Container>
        <FormattedMessage id="" />
      </Container>
    );
  }
}

ComponentWithReactIntl.propTypes = {};

export default ComponentWithReactIntl;
