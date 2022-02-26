import { render, screen } from '@testing-library/react';
import DogList from '../components/DogList';

test('on initial render, loading cards are displayed', () => {
 render(<DogList/>);

 expect(screen.getAllByText('🐶'))
})