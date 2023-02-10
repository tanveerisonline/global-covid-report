import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header';

describe('Countries', () => {
  it('renders correctly', () => {
    const tree = render(<Router><Header /></Router>);
    expect(tree).toMatchSnapshot();
  });
});
