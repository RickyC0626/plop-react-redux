import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import PurcomponentWithReactIntl from './PurcomponentWithReactIntl.component';

describe('[COMPONENT] <PurcomponentWithReactIntl />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  it('should render', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<PurcomponentWithReactIntl {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
