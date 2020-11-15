import React, { useState, useContext } from 'react'

export const SelectedVideoContext = React.createContext()
export const SelectedUpdateContext = React.createContext()
export const MenuContext = React.createContext()
export const MenuUpdateContext = React.createContext()

export const LoadingContext = React.createContext()
export const LoadingUpdateContext = React.createContext()

/// Hooks
export const useLoadingState = () => {
  return useContext(LoadingContext)
}
export const useLoadingUpdateState = () => {
  return useContext(LoadingUpdateContext)
}

export const SelectedProvider = ({ children }) => {
  const initialState =
    'https://www.youtube.com/watch?v=7Y3MMGYzNIM&ab_channel=DustyMcCord'
  const [selected, setSelected] = useState(initialState)

  const [activeMenu, setActiveMenu] = useState('home')

  const [loading, setLoading] = useState(true)

  const handleUpdateMenu = (name) => {
    setActiveMenu(name)
  }

  const handelUpdate = (e) => {
    setSelected(e.target.name)
  }

  const handleUpdateLoading = (toggle = false) => {
    setLoading(toggle)
  }

  return (
    <SelectedVideoContext.Provider value={selected}>
      <SelectedUpdateContext.Provider value={handelUpdate}>
        <MenuContext.Provider value={activeMenu}>
          <MenuUpdateContext.Provider value={handleUpdateMenu}>
            <LoadingContext.Provider value={loading}>
              <LoadingUpdateContext.Provider value={handleUpdateLoading}>
                {children}
              </LoadingUpdateContext.Provider>
            </LoadingContext.Provider>
          </MenuUpdateContext.Provider>
        </MenuContext.Provider>
      </SelectedUpdateContext.Provider>
    </SelectedVideoContext.Provider>
  )
}
