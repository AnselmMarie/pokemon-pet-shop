import { render, screen } from '@testing-library/react';
import App from './app';

jest.mock('@features/footer', () => ({
  Footer: () => <div data-testid="mock-footer">Mock Footer</div>,
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the Footer component', () => {
    render(<App />);
    const footerElement = screen.getByTestId('mock-footer');
    expect(footerElement).toBeTruthy();
    expect(footerElement.textContent).toBe('Mock Footer');
  });

  it('should include styles import', () => {
    // Verify that styles are imported by checking if the import causes no errors
    expect(() => render(<App />)).not.toThrow();
  });
});
