import { fireEvent } from 'react-testing-library'
import React from 'react'
import App from '../App'
import renderWithRouter from '../../../test-utils/renderWithRouter'

describe('<App />', () => {
  it('renders', () => {
    const assignSpy = jest.spyOn(window.location, 'assign')
    const { getByTestId, getByText, queryByTestId, queryByText } = renderWithRouter(<App />, {
      route: '/bio',
    })
    expect(getByText('STEEV SACHS')).toBeInTheDocument()
    expect(getByText('Bio')).toBeInTheDocument()
    expect(getByTestId('pointer-bio-true')).toBeInTheDocument()
    expect(getByText('Full stack engineer', { exact: false })).toBeInTheDocument()
    expect(queryByTestId('pointer-skills-true')).toBeNull() // Skills is not selected
    // expect(queryByText('Javascript')).toBeNull() // Skills content not visible

    fireEvent.click(getByText('Skills'))
    expect(getByTestId('pointer-bio-false')).toBeInTheDocument() // Bio is no longer selected
    expect(queryByText('Full stack engineer', { exact: false })).toBeNull() // Bio content not visible
    expect(getByTestId('pointer-skills-true')).toBeInTheDocument() // Skills is selected
    expect(getByText('Javascript')).toBeInTheDocument()

    // TODO
    fireEvent.click(getByText('Hire'))
    expect(assignSpy).toHaveBeenCalledWith(
      "mailto:steevsach.s@gmail.com?subject=Come work for me!&body=I'm prepared to make you an offer you can't refuse"
    )
  })
})
