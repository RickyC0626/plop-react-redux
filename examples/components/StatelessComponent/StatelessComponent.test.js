import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import StatelessComponent from './StatelessComponent.component';

describe('[COMPONENT] <StatelessComponent />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  it('should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<StatelessComponent {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
