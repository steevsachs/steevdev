import { render } from 'react-testing-library'
import React from 'react'
import Links from '../Links'

describe('<Links />', () => {
  it('renders', () => {
    const { getByText } = render(<Links />)
    expect(getByText('Github')).toHaveAttribute('href', 'https://github.com/steevsachs')
    expect(getByText('Code for this site')).toHaveAttribute(
      'href',
      'https://github.com/steevsachs/steevdev'
    )
    expect(getByText('LinkedIn')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/stephen-sachs-a95819b/'
    )
  })
})
