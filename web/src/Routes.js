// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'
import { SelectedProvider } from 'src/context/SelectedContext'

const Routes = () => {
  return (
    <SelectedProvider>
      <Router>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
        <Private unauthenticated="home">
          <Route path="/videos" page={VideosPage} name="videos" />
          <Route path="/videos/new" page={NewVideoPage} name="newVideo" />
          <Route path="/videos/{id:Int}/edit" page={EditVideoPage} name="editVideo" />
          <Route path="/videos/{id:Int}" page={VideoPage} name="video" />
        </Private>
      </Router>
    </SelectedProvider>
  )
}

export default Routes
