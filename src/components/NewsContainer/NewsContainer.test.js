import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('should be able to render NewsContainer to the DOM', () => {
    const wrapper = shallow(<NewsContainer 
      articles={[
      {id: 1, headline: 'Small News', img: 'pic1', description: 'A little bit of news', url: 'www.example.com'},
      {id: 2, headline: 'Medium News', img: 'pic2', description: 'Some news', url: 'www.example2.com'},
      {id: 3, headline: 'Big news', img: 'pic3', description: 'A lot of news', url: 'www.example3.com'}
      ]}
    />)

    expect(wrapper).toMatchSnapshot();
  })
})