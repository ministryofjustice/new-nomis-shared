/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import FooterContainer from '../../components/FooterContainer'

storiesOf('Footer container', module).add('Component default', () => (
  <FooterContainer
    supportUrl="https://support-dev.hmpps.service.justice.gov.uk/"
    prisonStaffHubUrl="https://prisonstaffhub-dev.hmpps.dsd.io/"
  />
))
