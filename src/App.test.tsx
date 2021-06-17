import { mount } from '@cypress/react';
import App from './App';

it('renders learn react link', () => {
  mount(<App />);


  cy.findByText("Learn Reac").should("exist");
});
