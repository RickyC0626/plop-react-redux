import { connect } from 'react-redux';

import PureComponentWithFlow from './PureComponentWithFlow.component';

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
  return {
    editThisFunction() {},
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PureComponentWithFlow);
