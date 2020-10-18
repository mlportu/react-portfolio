import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Projects from '../'

afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<Projects />);
  });

  it('renders', () => {
    const { asFragment } = render(<Projects />)
    expect(asFragment()).toMatchSnapshot()
  });
});