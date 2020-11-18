import React, { useState, useContext } from 'react'

export const SelectedVideoContext = React.createContext()
export const SelectedUpdateContext = React.createContext()
export const MenuContext = React.createContext()
export const MenuUpdateContext = React.createContext()

export const LoadingContext = React.createContext()
export const LoadingUpdateContext = React.createContext()

export const ListContext = React.createContext()
export const ListUpdateContext = React.createContext()

/// Hooks
export const useLoadingState = () => {
  return useContext(LoadingContext)
}
export const useLoadingUpdateState = () => {
  return useContext(LoadingUpdateContext)
}
export const useListContext = () => {
  return useContext(ListContext)
}

export const SelectedProvider = ({ children }) => {
  const initialState = 'https://vimeo.com/472409971'

  const [selected, setSelected] = useState(initialState)
  const [activeMenu, setActiveMenu] = useState('home')
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])

  const handleUpdateMenu = (name) => {
    setActiveMenu(name)
  }

  const handelUpdate = (link) => {
    setSelected(link)
  }

  const handleUpdateLoading = (toggle = false) => {
    setLoading(toggle)
  }

  const handleListUpdate = (list) => {
    setList(list)
  }

  return (
    <ListContext.Provider value={list}>
      <ListUpdateContext.Provider value={handleListUpdate}>
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
      </ListUpdateContext.Provider>
    </ListContext.Provider>
  )
}
