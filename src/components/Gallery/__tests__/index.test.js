import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'


afterEach(cleanup);

describe('Gallery is rendering', () => {

    it('renders', () => {
      render(<Gallery />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Gallery  />)
        expect(asFragment()).toMatchSnapshot()
      });
  })