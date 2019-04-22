import { render } from 'react-testing-library'
import React from 'react'
import Skills from '../Skills'

describe('<Skills />', () => {
  it('renders', () => {
    const { getByText } = render(<Skills />)
    expect(getByText('Javascript')).toBeInTheDocument()
  })
})
