import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header';
import Quote from '../components/Quote';
import Home from '../components/Home';
import Calculator from '../components/Calculator';

describe('Home and Quote components render correctly', () => {
  it('Home component should match the snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Quote component should match the snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Test links in Header component
const MockHeaderLinks = () => {
  <BrowserRouter>
    <Header />
  </BrowserRouter>;
};
describe('Test links in Header component', () => {
  it('Header links render correctly', () => {
    const tree = renderer.create(<MockHeaderLinks />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Test Calculator component
describe('Test Calculator component', () => {
  it('Test correct render of user interactions with calculator', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '-' }));
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(screen.getByText('22')).toBeTruthy();
  });
});
