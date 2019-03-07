/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Footer from '../../components/Footer'

const meta = {
  items: [{ href: '#1', text: 'Item 1' }, { href: '#2', text: 'Item 2' }, { href: '#3', text: 'Item 3' }],
}

const navigation = [
  {
    title: 'Services and information',
    columns: 2,
    items: [
      { href: '/benefits', text: 'Benefits' },
      { href: '/births-deaths', text: 'Births, deaths, marriages and care' },
      { href: '/business-self-employed', text: 'Business and self-employed' },
      { href: '/childcare-parenting', text: 'Childcare and parenting' },
      { href: '/citizenship', text: 'Citizenship and living in the UK' },
      { href: '/crime-justice', text: 'Crime, justice and the law' },
      { href: '/disabled-people', text: 'Disabled people' },
      { href: '/driving-transport', text: 'Driving and transport' },
      { href: '/education-learning', text: 'Education and learning' },
      { href: '/employing-people', text: 'Employing people' },
      { href: '/environment-countryside', text: 'Environment and countryside' },
      { href: '/housing-local', text: 'Housing and local services' },
      { href: '/money-tax', text: 'Money and tax' },
      { href: '/passports-abroad', text: 'Passports, travel and living abroad' },
      { href: '/visas-immigration', text: 'Visas and immigration' },
      { href: '/working-pensions', text: 'Working, jobs and pensions' },
    ],
  },
  {
    title: 'Departments and policy',
    items: [
      { href: '/how-gov-works', text: 'How government works' },
      { href: '/departments', text: 'Departments' },
      { href: '/worldwide', text: 'Worldwide' },
      { href: '/policies', text: 'Policies' },
      { href: '/publications', text: 'Publications' },
      { href: '/announcements', text: 'Announcements' },
    ],
  },
]

storiesOf('Footer', module)
  .add('Default footer', () => <Footer />)
  .add('With meta links', () => <Footer meta={meta} />)
  .add('With navigation links', () => <Footer navigation={navigation} />)
  .add('With meta and navigation links', () => <Footer navigation={navigation} />)
  .add('With children', () => (
    <Footer>
      Built by the <Footer.Link href="/gds">Government Digital Service</Footer.Link>
    </Footer>
  ))
