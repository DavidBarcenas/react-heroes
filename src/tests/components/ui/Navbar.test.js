import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';

describe('<Navbar /> testing', () => {

  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn(),
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
      name: 'Davee'
    }
  }
  
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
       </MemoryRouter>
    </AuthContext.Provider>
  )

  afterEach(() => {
    jest.clearAllMocks();
  })

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.activeUser').text().trim()).toBe(contextValue.user.name)
  })
  

  test('should call the logout and use the history', () => {
    wrapper.find('button').prop('onClick')();
    expect(contextValue.dispatch).toHaveBeenCalledWith({type: types.logout})
    expect(historyMock.replace).toHaveBeenCalledWith('/login')
  })
  

})
