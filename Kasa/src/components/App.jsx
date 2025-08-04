import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import '../styles/App.css';
import Banner from './Banner';
import Footer from './Footer'
import Tagline from './home/Tagline';
import LogementsList from './home/LogementsList';
import Error404 from './404/Error404'

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

  {
    path: '/logement/:id',
    element: 
      <div className='app'>
        <Banner/>

        <Footer/>
      </div>,
  },

  { 
    path: '/404',
    element: <div>
      <Banner/>
      <Error404/>
      <Footer/>
    </div>,
  },

  {
    path: 'about',
    element: <div>
      <Banner/>
      <Footer/>
    </div>,
  }

])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
