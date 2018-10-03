import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dropdown from '../Dropdown';

Enzyme.configure({ adapter: new Adapter() });

const user = {
  activeCaseLoadId: 'LEI',
  caseLoadOptions: [
    { caseLoadId: 'LEI', description: 'LEEDS (HMP)', type: 'INST', caseloadFunction: 'GENERAL' },
    {
      caseLoadId: 'SYI',
      description: 'Shrewsbury (HMP)',
      type: 'INST',
      caseloadFunction: 'GENERAL'
    }
  ]
};

const userWithoutCaseLoadOptions = {
  activeCaseLoadId: 'LEI',
  caseLoadOptions: []
};

const props = {
  switchCaseLoad: jest.fn(),
  user,
  setMenuOpen: jest.fn(),
  history: { push: jest.fn() }
};

const component = shallow(<Dropdown {...props} />);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Dropdown component', () => {
  describe('When the Dropdown menu is inactive', () => {
    it('should not render menu items', () => {
      expect(component.find('a.dropdown-menu-option').length).toBe(0);
    });

    it('should open the menu on click', () => {
      component.find('#info-wrapper').at(0).prop('onClick')();

      expect(props.setMenuOpen).toHaveBeenCalledWith(true);
    });
  });

  describe('When the Dropdown menu is active', () => {
    beforeEach(() => {
      component.setProps({ menuOpen: true });
    });

    it('should render correctly', () => {
      const dropdown = component.find('a.dropdown-menu-option');
      // Current id 'LEI' should be omitted
      expect(dropdown.length).toEqual(1);
      expect(dropdown.get(0).props.children).toEqual('Shrewsbury (HMP)');
    });

    it('should handle the display of empty caseLoadOptions elegantly', () => {
      component.setProps({ user: userWithoutCaseLoadOptions });

      expect(component.find('a.dropdown-menu-option')).toHaveLength(0);
      expect(component.find('a.dropdown-menu-link').get(0).props.children).toEqual('Log out');
    });

    it('should close the menu when clicked', () => {
      component.setProps({ user });
      component.find('#info-wrapper').at(0).prop('onClick')();

      expect(props.setMenuOpen).toHaveBeenCalledWith(false);
    });

    it('should close the menu when clicked', () => {
      component.find('a.dropdown-menu-option').at(0).prop('onClick')();
      expect(props.setMenuOpen).toHaveBeenCalledWith(false);
    });
  });

  describe('Dropdown menu items', () => {
    it('should switch the case load when clicked', () => {
      component.find('a.dropdown-menu-option').at(0).prop('onClick')();
      expect(props.switchCaseLoad).toHaveBeenCalledWith('SYI');
    });

    it('should redirect back to the root of the application by default when clicked', () => {
      component.find('a.dropdown-menu-option').at(0).prop('onClick')();
      expect(props.history.push).toHaveBeenCalledWith('/');
    });

    it('should NOT redirect back to the root of the application if specified when clicked', () => {
      component.setProps({ caseChangeRedirect: false });
      component.find('a.dropdown-menu-option').at(0).prop('onClick')();
      expect(props.history.push).not.toHaveBeenCalled();
    });
  });
});
