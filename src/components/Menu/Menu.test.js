import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  let wrapper, mockPickCategory;
  beforeEach(() =>{
    mockPickCategory = jest.fn();
    wrapper = shallow(<Menu 
      pickCategory={mockPickCategory}
    />)
  })
  it('should render the nav to the DOM', () => {
    const wrapper = shallow(<Menu />)

    expect(wrapper).toMatchSnapshot();
  });

  it('should call pickCategory when selectCatergory is called', () => {
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.instance().selectCategory(mockEvent);
    
    expect(mockPickCategory).toHaveBeenCalled()
  })

})