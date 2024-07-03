import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import About from './about.js'
import Contact from './contact.js'
import Home from './home.js'
import img from './Allpics/Digital-banking.jpg'
import AtmBanking from './atmBanking.js'
import InternetBanking from './internetBanking.js'
import BillPay from './billPay.js'
import VariousCards from './variousCards.js'
import './App.css'
import Loan from './loan.js'
import Deposit from './deposit.js'
import DownloadForms from './downloadForms.js'
function App(){
    return(
        <>
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg sticky-top bg-light" >
          <div className="container-fluid">
          <Link className="navbar-brand" to="#">MENU</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>

          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Digital Banking
          </Link>
          <ul className="dropdown-menu">
            <div className='container-fluid'><img src={img} alt='...'/></div>
            <hr/>
            <li><Link className="dropdown-item" to ="/atmBanking">ATM Banking</Link></li>
            <li><Link className="dropdown-item" to="/internetBanking">Internet Banking</Link></li>
            <li><Link className="dropdown-item" to="/billPay">Bill Pay</Link></li>
            <li><Link className="dropdown-item" to="/variousCards">Cards</Link></li>
          </ul>
        </li>
          </ul>
          
          </div>
          </div>
          </nav>
          

          
<Routes>
    <Route path='/'>
      <Route index element={<Home/>}/>
      <Route path='loan' element={<Loan/>}/>
      <Route path='deposit' element={<Deposit/>}/>
      <Route path='downloadForms' element={<DownloadForms/>}/>
    </Route>
   
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/atmbanking' element={<AtmBanking/>}></Route>
    <Route path='/internetbanking' element={<InternetBanking/>}></Route>
    <Route path='/billpay' element={<BillPay/>}></Route>
    <Route path='/variouscards' element={<VariousCards/>}></Route>
    
    </Routes>
   </BrowserRouter>  

         
        </>
    )
}
export default App