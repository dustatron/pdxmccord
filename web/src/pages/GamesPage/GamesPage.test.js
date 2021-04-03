import { render } from '@redwoodjs/testing'

import GamesPage from './GamesPage'

describe('GamesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GamesPage />)
    }).not.toThrow()
  })
})
