import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import '../src/styles/App.sass';
import Banner from './components/common/Banner';
import Footer from './components/common/Footer'
import LogementsList from './pages/LogementsList';
import Error404 from './pages/Error404'
import LogementPage from './pages/LogementPage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
        <LogementsList/>
  },

  {
    path: '/logement/:id',
    element: 

        <LogementPage/>
     
        
  },

  { 
    path: '/404',
    element:
      <Error404/>
      
      
  },

  {
    path: 'about',
    element:
        <AboutPage/>
        
  }

])

function App() {

  return (
    <div className="app">
      <Banner />
      <main><RouterProvider router={router}/></main>
      <Footer/>
    </div>
  );
}

export default App
