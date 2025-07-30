import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import '../styles/App.css';
import Banner from './Banner';
import Footer from './Footer'
import Tagline from './home/Tagline';
import LogementsList from './home/LogementsList';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <div className="app">
        <Banner/>
        <Tagline/>
        <LogementsList/>
        <Footer/>
      </div>,
  },
  { path: '/404',
    element: <div>Page Not Found</div>,
  },

])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
