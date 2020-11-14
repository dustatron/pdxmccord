import React, { useState } from 'react'

export const SelectedVideoContext = React.createContext()
export const SelectedUpdateContext = React.createContext()
export const MenuContext = React.createContext()
export const MenuUpdateContext = React.createContext()

export const SelectedProvider = ({ children }) => {
  const initialState = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  const [selected, setSelected] = useState(initialState)

  const [activeMenu, setActiveMenu] = useState('home')

  const handleUpdateMenu = (name) => {
    setActiveMenu(name)
  }

  const handelUpdate = (e) => {
    setSelected(e.target.name)
  }

  return (
    <SelectedVideoContext.Provider value={selected}>
      <SelectedUpdateContext.Provider value={handelUpdate}>
        <MenuContext.Provider value={activeMenu}>
          <MenuUpdateContext.Provider value={handleUpdateMenu}>
            {children}
          </MenuUpdateContext.Provider>
        </MenuContext.Provider>
      </SelectedUpdateContext.Provider>
    </SelectedVideoContext.Provider>
  )
}
