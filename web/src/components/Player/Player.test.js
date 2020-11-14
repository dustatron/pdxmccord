import { render } from '@redwoodjs/testing'

import Player from './Player'

describe('Player', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Player />)
    }).not.toThrow()
  })
})
