import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should change state when pickCategory is called', () => {
    wrapper.setState({ news: { local: local, entertainment: entertainment, health: health, science: science, technology: technology } })
    expect(wrapper.state('displayedNews')).toEqual(local)

    wrapper.instance().pickCategory('technology');

    expect(wrapper.state('displayedNews')).toEqual(technology);
  })
})
