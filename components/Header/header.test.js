import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'
import DropDown from '../Dropdown'

const mockHistory = {
  push: jest.fn(),
  action: 'PUSH',
  block: jest.fn(),
  createHref: jest.fn(),
  go: jest.fn(),
  goBack: jest.fn(),
  goForward: jest.fn(),
  listen: jest.fn(),
  location: { hash: '', pathname: '', search: '' },
  replace: jest.fn(),
}

describe('Header component', () => {
  let header
  const props = {
    homeLink: '',
    title: '',
    logoText: '',
    history: mockHistory,
    switchCaseLoad: () => {},
    setMenuOpen: () => {},
    user: { caseLoadOptions: [] },
  }

  beforeEach(() => {
    header = shallow(<Header {...props} />)
  })

  it('should not render DropDown when the user has not active case load', () => {
    expect(header.find(DropDown).length).toBe(0)
  })

  it('should render DropDown when the user has been loaded', () => {
    header.setProps({
      ...props,
      user: { username: 'CA_USER', caseLoadOptions: [] },
    })
    expect(header.find(DropDown).length).toBe(1)
  })
})
