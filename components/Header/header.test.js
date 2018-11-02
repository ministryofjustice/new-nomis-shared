import React from 'react'
import { shallow } from 'enzyme'
import Header from '.'
import DropDown from '../Dropdown'

describe('Header component', () => {
  let header
  const props = {
    homeLink: '',
    title: '',
    logoText: '',
    history: {},
    switchCaseLoad: () => {},
    setMenuOpen: () => {},
  }

  beforeEach(() => {
    header = shallow(<Header {...props} />)
  })

  it('should not render DropDown when the user has not active case load', () => {
    expect(header.find(DropDown).length).toBe(0)
  })

  it('should render DropDown when the user has an active case load', () => {
    header.setProps({
      ...props,
      user: { activeCaseLoadId: 'LEI' },
    })
    expect(header.find(DropDown).length).toBe(1)
  })
})
