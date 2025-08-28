import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import '../styles/App.css';
import Banner from './Banner';
import Footer from './Footer'
import LogementsList from './home/LogementsList';
import Error404 from './404/Error404'
import LogementPage from './logements/LogementPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <>
        <Banner />,
        <LogementsList/>,
        <Footer/>
      </>   
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
    
      <div>About</div>
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
