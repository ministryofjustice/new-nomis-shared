/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import IEPSlip from '../../components/IEPSlip'

const props = {
  raisedBy: 'An Officer',
  raisedDate: '2018-11-01T14:17:30',
  issuedBy: 'Another Officer',
  offenderName: 'An Offender',
  offenderNo: 'ABC123',
  caseNote: 'Refused: Did not want to work',
  cellLocation: 'LEI-123',
}

storiesOf('IEP slip', module)
  .add('Component default', () => <IEPSlip {...props} />)
  .add('With amendments', () => (
    <IEPSlip
      {...props}
      amendments={[
        { authorName: 'Author, Amendment', creationDateTime: '2019-01-01T14:17:30', additionalNoteText: 'Rescinded' },
        { authorName: 'Author, Amendment', creationDateTime: '2019-01-01T15:17:30', additionalNoteText: 'Updated' },
      ]}
    />
  ))
