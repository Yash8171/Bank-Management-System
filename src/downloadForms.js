import {Link} from 'react-router-dom'
import pdf from './IBApplication.pdf'
import pdf1 from './aofmaccounts.pdf'
import pdf2 from './DeclReso_PartnershipFirms.pdf'
import pdf3 from './DSC_Linkage_Application_Form.pdf'
function downloadForms(){
    return(
        <>
        <div className='container'>
        <div className="row bg-primary text-light text-center">
        <h1 className='dF'>Download Forms</h1>
        </div>
        <div className="row bg-warning text-light">
        <ul type='disc' className='dY'>
        <li className='dX'><Link to={pdf} target='_parent'><button type="button" class="btn btn-outline-primary">Internet Banking Application</button></Link></li>
        <li className='dX'><Link to={pdf1} target='_parent'><button type="button" class="btn btn-outline-primary">Addition of more Accounts</button></Link></li>
        <li className='dX'><Link to={pdf2} target='_parent'><button type="button" class="btn btn-outline-primary">Partenership Firm Declaration</button></Link></li>
        <li className='dX'><Link to={pdf3} target='_parent'><button type="button" class="btn btn-outline-primary">Digital Signature linking Form</button></Link></li>
        </ul>
        </div>
        </div>
        
        </>
    )
}
export default downloadForms