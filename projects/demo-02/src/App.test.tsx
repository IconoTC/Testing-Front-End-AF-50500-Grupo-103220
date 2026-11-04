import { render, screen } from '@testing-library/react';

import App from "./App";

describe('App', () => {
  it('should render correctly', () => {
    // Test implementation
    render(<App />);
    // screen.debug()
    const heading = screen.getByRole('heading', { name: /started/i });
    expect(heading).toBeInTheDocument();   
  });
});
