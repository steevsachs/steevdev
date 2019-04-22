import { render } from 'react-testing-library'
import React from 'react'
import Bio from '../Bio'

describe('<Bio />', () => {
  it('renders', () => {
    const { getByText } = render(<Bio />)
    expect(getByText('Full stack engineer', { exact: false })).toBeInTheDocument()
  })
})
