import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { style, Container } from './PurcomponentWithReactIntl.style';


class PurcomponentWithReactIntl extends PureComponent {
  render() {
    return (
      <Container>
        <FormattedMessage id="" />
      </Container>
    );
  }
}

PurcomponentWithReactIntl.propTypes = {};

export default PurcomponentWithReactIntl;
