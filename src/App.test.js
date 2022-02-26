import { fireEvent, render, screen } from '@testing-library/react';
import DogCard from './components/DogCard';
import DogList from './components/DogList';

test('on initial render, loading cards are displayed', () => {
 render(<DogList/>);

 expect(screen.getAllByText('🐶'))
})

const url = 'https://i.guim.co.uk/img/media/364089a4778d97eac2be1a48913931b6f562e169/920_1562_2138_1282/master/2138.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c6b604fb567ffa5e9f8172a4c82a7ec5'

const anonymousDogData = {
 url: url,
 id: 'test123',
 breeds: []
}

const populatedDogData = {
 url: url,
 id: 'test123',
 breeds: [{
  name: "louis",
  bred_for: "snoozing",
  breed_group: "spitz",
  life_span: "16 years",
  height: "33",
  weight: "10",
  temperament: "cuddly"
 }]
}

test('renders card with doggy data', () => {
 render(<DogCard dogData={populatedDogData}/>);

 expect(screen.getByRole('heading', {name: 'louis'}))
})

test('when a card is clicked, more doggy data is revealed', () => {
 render(<DogCard dogData={populatedDogData}/>);

 const card = screen.getByRole('listitem')

 fireEvent.click(card)

 expect(screen.getByText('cuddly')).toBeInTheDocument();
})

test('displays alternate message when theres no doggy data', () => {
 render(<DogCard dogData={anonymousDogData}/>);

 expect(screen.getByText('Anonymous Doggo')).toBeInTheDocument();

 const card = screen.getByRole('listitem')

 fireEvent.click(card)

 expect(screen.getByText('No doggy data')).toBeInTheDocument();
})