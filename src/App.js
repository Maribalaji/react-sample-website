import logo from './logo.svg';
import './App.css'
import {Link, Routes,Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Card from './Card';
import Login from './Login';
import Crud from './Crud';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">

	<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto px-2 text-end" style={{width:'100%'}}>
			
			<Link className="bar-cont " to="/"><li>Home</li></Link>
          <Link className="bar-cont"to="/about"><li>About</li></Link>
          <Link className="bar-cont"to="/team"><li>Team</li></Link>
          <Link className="bar-cont" to="/contact"><li>Contact</li></Link>
          <Link className="bar-cont" to="/Login"><li>Login</li></Link>
		  <Link className='bar-cont' to="/crud"><li>Crud</li></Link>
          
			
			
			
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	<Link to='/dashboard'></Link>
        
      
      
    <Routes>
      
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/team' element={<Card/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
		<Route path='/Login' element={<Login/>}></Route>
		<Route path='/dashboard' element={<Dashboard/>}></Route>
		<Route path='/crud' element={<Crud/>}></Route>


    </Routes>
    </div>
  )}

      
      
  

export default App;
