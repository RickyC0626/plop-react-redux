import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import PureComponentWithFlow from './PureComponentWithFlow.component';

describe('[COMPONENT] <PureComponentWithFlow />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  it('should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<PureComponentWithFlow {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
