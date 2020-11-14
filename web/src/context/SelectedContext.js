import React, { useState } from 'react'

export const SelectedVideoContext = React.createContext()
export const SelectedUpdateContext = React.createContext()

export const SelectedProvider = ({ children }) => {
  const initialState = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  const [selected, setSelected] = useState(initialState)

  const handelUpdate = (e) => {
    console.log('update', e.target.name)
    setSelected(e.target.name)
  }
  return (
    <SelectedVideoContext.Provider value={selected}>
      <SelectedUpdateContext.Provider value={handelUpdate}>
        {children}
      </SelectedUpdateContext.Provider>
    </SelectedVideoContext.Provider>
  )
}
