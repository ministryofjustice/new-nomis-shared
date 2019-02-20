import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from '.'

const user = {
  activeCaseLoadId: 'LEI',
  caseLoadOptions: [
    { caseLoadId: 'LEI', description: 'LEEDS (HMP)', type: 'INST', caseloadFunction: 'GENERAL' },
    {
      caseLoadId: 'SYI',
      description: 'Shrewsbury (HMP)',
      type: 'INST',
      caseloadFunction: 'GENERAL',
    },
  ],
}

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

const userWithEmptyCaseLoadOptions = {
  activeCaseLoadId: 'LEI',
  caseLoadOptions: [],
}

const props = {
  switchCaseLoad: jest.fn(),
  user,
  setMenuOpen: jest.fn(),
  history: mockHistory,
}

const component = shallow(<Dropdown {...props} />)

afterEach(() => {
  jest.clearAllMocks()
})

describe('Dropdown component', () => {
  describe('When the Dropdown menu is inactive', () => {
    it('should not render menu items', () => {
      expect(component.find('button.dropdown-menu-option').length).toBe(0)
    })

    it('should open the menu on click', () => {
      component
        .find('#info-wrapper')
        .at(0)
        .prop('onClick')()

      expect(props.setMenuOpen).toHaveBeenCalledWith(true)
    })
  })

  describe('When the Dropdown menu is active', () => {
    beforeEach(() => {
      component.setProps({ menuOpen: true })
    })

    it('should render correctly', () => {
      const dropdown = component.find('.dropdown-menu-option')
      // Current id 'LEI' should be omitted
      expect(dropdown.length).toEqual(1)
      expect(dropdown.get(0).props.children).toEqual('Shrewsbury (HMP)')
    })

    it('should handle the display of empty caseLoadOptions elegantly', () => {
      component.setProps({ user: userWithEmptyCaseLoadOptions })

      expect(component.find('.dropdown-menu-option')).toHaveLength(0)
      expect(component.find('.dropdown-menu-link').get(0).props.children).toEqual('Sign out')
    })

    it('should not display the active caseload when user does not have one', () => {
      component.setProps({ user: { caseLoadOptions: [] } })

      expect(component.find('.case-load')).toHaveLength(0)
    })

    it('should display the active caseload if no caseloadOptions', () => {
      component.setProps({ user: userWithEmptyCaseLoadOptions })

      expect(component.find('.case-load')).toHaveLength(1)
      expect(component.find('.case-load').get(0).props.children).toEqual('LEI')
    })

    it('should display the name of the user', () => {
      component.setProps({ user: { name: 'Joe Bloggs', caseLoadOptions: [] } })

      expect(component.find('.user-name')).toHaveLength(1)
      expect(component.find('.user-name').get(0).props.children).toEqual('Joe Bloggs')
    })

    it('should fallback to using firstname lastname if name missing', () => {
      component.setProps({ user: { firstName: 'JOE', lastName: 'BLOGGS', caseLoadOptions: [] } })

      expect(component.find('.user-name')).toHaveLength(1)
      expect(component.find('.user-name').get(0).props.children).toEqual('Joe Bloggs')
    })

    it('should close the menu when clicked', () => {
      component.setProps({ user })
      component
        .find('#info-wrapper')
        .at(0)
        .prop('onClick')()

      expect(props.setMenuOpen).toHaveBeenCalledWith(false)
    })

    it('should close the menu when clicked', () => {
      component
        .find('.dropdown-menu-option')
        .at(0)
        .prop('onClick')()

      expect(props.setMenuOpen).toHaveBeenCalledWith(false)
    })
  })

  describe('Dropdown menu items', () => {
    it('should switch the case load when clicked', () => {
      component
        .find('.dropdown-menu-option')
        .at(0)
        .prop('onClick')()
      expect(props.switchCaseLoad).toHaveBeenCalledWith('SYI')
    })

    it('should redirect back to the root of the application by default when clicked', () => {
      component
        .find('.dropdown-menu-option')
        .at(0)
        .prop('onClick')()
      expect(props.history.push).toHaveBeenCalledWith('/')
    })

    it('should NOT redirect back to the root of the application if specified when clicked', () => {
      component.setProps({ caseChangeRedirect: false })
      component
        .find('.dropdown-menu-option')
        .at(0)
        .prop('onClick')()
      expect(props.history.push).not.toHaveBeenCalled()
    })

    it('should setup extra links correctly', () => {
      const callBack = jest.fn()
      const extraLinks = [{ text: 'stuff' }, { url: '/route1', text: 'route1', onClick: callBack }]

      component.setProps({ extraLinks, menuOpen: true })
      expect(
        component
          .find('#menu-option-stuff')
          .dive()
          .text()
      ).toBe('stuff')
      component
        .find('#menu-option-route1')
        .at(0)
        .prop('onClick')()

      expect(callBack).toHaveBeenCalled()
    })
  })
})
