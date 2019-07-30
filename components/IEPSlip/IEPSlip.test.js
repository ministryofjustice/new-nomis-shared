import React from 'react'
import renderer from 'react-test-renderer'

import IEPSlip from '.'

const props = {
  raisedBy: 'An Officer',
  offenderName: 'An Offender',
  offenderNo: 'ABC123',
  caseNote: 'Refused: Did not want to work',
  cellLocation: 'LEI-123',
}

describe('<IEPSlip />', () => {
  Date.now = jest.fn(() => new Date(Date.UTC(2019, 0, 1)).valueOf())
  it('renders correctly', () => {
    const tree = renderer.create(<IEPSlip {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with an activity or area', () => {
    const tree = renderer.create(<IEPSlip {...props} activityName="Gym" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with an issued by name', () => {
    const tree = renderer.create(<IEPSlip {...props} activityName="Gym" issuedBy="Another Officer" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with amendments', () => {
    const tree = renderer
      .create(
        <IEPSlip
          {...props}
          amendments={[
            {
              authorName: 'Amendment Author',
              creationDateTime: '2019-01-01T14:17:30',
              additionalNoteText: 'Rescinded',
            },
            { authorName: 'Amendment Author', creationDateTime: '2019-01-01T15:17:30', additionalNoteText: 'Updated' },
          ]}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
