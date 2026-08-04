import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio identity and featured work', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Matthew R. Conrad' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Deva' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Zenblis' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Yammoing' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /deva security dashboard/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /zenblis homepage/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /yammoing product page/i })).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /visit yammoing/i })
  ).toHaveAttribute('href', 'https://yammoing.com');
  expect(
    screen.getAllByRole('link', { name: /app store/i }).map(link => link.getAttribute('href'))
  ).toEqual(expect.arrayContaining([
    'https://apps.apple.com/eg/app/breathemindful/id6757343368',
    'https://apps.apple.com/us/app/motive/id6761436873',
    'https://apps.apple.com/us/app/lovocado/id6757644902',
    'https://apps.apple.com/us/app/yammoing/id6757343455',
  ]));
  expect(screen.getByRole('heading', { name: 'More iOS work' })).toBeInTheDocument();
  expect(screen.getByText(/georgia tech, mscs · university of michigan, bscs/i)).toBeInTheDocument();
  expect(screen.getByText(/software development engineer ii at amazon web services/i)).toBeInTheDocument();
  expect(screen.getByText(/architected and built the shared scanning engine/i)).toBeInTheDocument();
  expect(screen.getByText(/built and launched the marketplace and operator platform/i)).toBeInTheDocument();
  expect(screen.getByText(/architected and shipped the ios application/i)).toBeInTheDocument();
  expect(screen.queryByText(/no form service/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/continued in chi 2026/i)).not.toBeInTheDocument();
});
