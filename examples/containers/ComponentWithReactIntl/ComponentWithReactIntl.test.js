import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import ComponentWithReactIntl from './ComponentWithReactIntl.component';

describe('[COMPONENT] <ComponentWithReactIntl />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  it('should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ComponentWithReactIntl {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
