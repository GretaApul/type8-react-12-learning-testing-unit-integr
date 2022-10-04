import { render, screen } from '@testing-library/react';
import Header from './Header';

// it('renders Header', () => {
//   render(<Header />);
// });

it('renders title from props', () => {
  // Arrange
  render(<Header title="testing123" />);
  // const headerEl = screen.getByText(/testing123/i);
  // Act
  const headerEl = screen.getByText('testing123');
  // Assert
  expect(headerEl).toBeInTheDocument();
});

it('should rendder a heading', () => {
  // Arrange
  render(<Header title="Monday todos" />);

  // search
  const headingEl = screen.getByRole('heading', { name: /monday/i });
  // Assert
  expect(headingEl).toBeInTheDocument();
});

it('should render custom div whith id our-div', () => {
  render(<Header />);
  const divEl = screen.getByTestId('our-div');
  expect(divEl).toBeInTheDocument();
});

it('not render props differently', () => {
  // Arrange
  render(<Header title="monday" />);
  // Act
  const headerEl = screen.queryByText('tuesday');
  // Assert
  expect(headerEl).not.toBeInTheDocument();
});
