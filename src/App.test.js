import React from 'react';

import App from './App';
import Card from './components/Card';
import Tasks from './components/tasks/Tasks';
import Contenedor from './components/jira/Contenedor';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect }  from 'chai'
import chaiEnzyme from 'chai-enzyme'

Enzyme.configure({ adapter: new Adapter() });

/*
  Zona de tests
*/
test('Se verifica que haya dos cards', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Card)).to.have.lengthOf(2);
});

test('Se verifica que haya UN componente "Tasks" ', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Tasks)).to.have.lengthOf(1);
});
test('Se verifica que haya UN componente "Contenedor" ', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Contenedor)).to.have.lengthOf(1);
});

chai.use(chaiEnzyme())