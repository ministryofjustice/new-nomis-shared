import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from '../../components/Header';

storiesOf('Header', module)
  .add('Drop down closed', () => (<Header {...props} />))
  .add('Drop down open', () => (<Header {...props} menuOpen />))
  .add('With extra link', () => (
    <Header
      {...props}
      menuOpen
      extraLinks={[
        { text: 'My key worker allocations', url: '/myKeyWorkerAllocations' }
      ]}
    />));

const props = {
  logoText: 'HMPPS',
  title: 'Activity Lists',
  switchCaseLoad: () => action('clicked'),
  history: {
    push: () => action('clicked')
  },
  menuOpen: false,
  setMenuOpen: () => action('clicked'),
  homeLink: '/',
  user: {
    activeCaseLoadId: 'LEI',
    caseLoadOptions: [
      {
        caseLoadId: 'LEI',
        description: 'LEEDS'
      },
      {
        caseLoadId: 'MID',
        description: 'Moorland'
      }
    ]
  }
};
