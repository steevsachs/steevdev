import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from 'react-testing-library'
import React from 'react'

const renderWithRouter = (
  ui: any,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}

export default renderWithRouter
