import { render } from '@redwoodjs/testing'

import VideoList from './VideoList'

describe('VideoList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoList />)
    }).not.toThrow()
  })
})
