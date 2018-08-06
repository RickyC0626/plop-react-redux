import { connect } from 'react-redux';

import ComponentWithReactIntl from './ComponentWithReactIntl.component';

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
  return {
    editThisFunction() {},
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentWithReactIntl);
