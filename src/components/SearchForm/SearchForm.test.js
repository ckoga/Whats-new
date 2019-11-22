import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should be able to render SearchForm to the DOM', () => {
    const wrapper = shallow(<SearchForm 
      searchNews={jest.fn()}
    />)
    
    expect(wrapper).toMatchSnapshot();
  })
})