import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should change state when pickCategory is called', () => {
    const mockCategory = 'technology';
    
    expect(wrapper.state('news')).toEqual(null);
    
    
    wrapper.instance().pickCategory(mockCategory);
    expect(wrapper.state('news')).toEqual('technology');
  })
})
