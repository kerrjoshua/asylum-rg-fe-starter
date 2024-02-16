import { RenderLandingPage } from '../components/pages/Landing';

import React from 'react';
import { render } from '@testing-library/react';

describe('<RenderLangingPage /> test suite', () => {
  //
  test('[1] sanity', () => {
    expect(1 + 1).toBe(2);
  });

  {
    /*
    test('[2] Header contains correct text', () => {
        const { getByText } = render(
            <RenderLandingPage />
        );
        const h1 = getByText(/asylum office grant rate tracker/i);
        expect(h1.textContent).toBe('Asylum Office Grant Rate Tracker');
    })
    */
  }
});
