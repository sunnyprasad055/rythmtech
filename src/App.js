import React from 'react'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import './app.css'

function App() {
  return (
    <Router>
      <div className="App">
        <div className='nav-container'>
          <nav className='navigation'>
            <ul className='flex'>
              <Link to="/" className='link'><li>Home</li></Link>
              <Link to="/page2" className='link'><li>Page-Two</li></Link>
              <Link to='/page3' className='link'><li>Page - Three</li></Link>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
