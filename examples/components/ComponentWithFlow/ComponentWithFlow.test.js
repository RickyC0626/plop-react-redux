import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import ComponentWithFlow from './ComponentWithFlow.component';

describe('[COMPONENT] <ComponentWithFlow />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  it('should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ComponentWithFlow {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
