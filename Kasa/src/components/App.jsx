import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import '../styles/App.css';
import Banner from './Banner';
import Footer from './Footer'
import LogementsList from './home/LogementsList';
import Error404 from './404/Error404'
import LogementPage from './logements/LogementPage';
import AboutPage from './about/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <>
        <Banner />
        <LogementsList/>
        <Footer/>
      </>   
  },

  {
    path: '/logement/:id',
    element: 
      <>
        <Banner />
        <LogementPage/>
        <Footer/>
      </>
     
        
  },

  { 
    path: '/404',
    element:
      <>
      <Banner />
      <Error404/>
      <Footer/>
      </>
  },

  {
    path: 'about',
    element:
      <>
        <Banner />
        <AboutPage/>
        <Footer/>
      </>
  }

])

function App() {

  return (
    <div className="app">
      <RouterProvider router={router}/>,
    </div>
  );
}

export default App
