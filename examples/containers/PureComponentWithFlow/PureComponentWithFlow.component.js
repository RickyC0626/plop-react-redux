// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { style, Container } from './PureComponentWithFlow.style';

type Props = {};

class PureComponentWithFlow extends PureComponent<Props> {
  render() {
    return (
      <Container>
      </Container>
    );
  }
}


export default PureComponentWithFlow;
