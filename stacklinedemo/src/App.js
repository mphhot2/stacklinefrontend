import stacklineLogo from './stackline_logo.svg';
import './App.css';
import { CNavbar, CContainer, CNavbarBrand } from '@coreui/react';
import StackLineTable from './StackLineTable';
import SharkNinjaForm from './SharkNinjaForm';

function App() {
  return (
    <>
      <CNavbar colorScheme="dark" className="bg-light">
          <CContainer fluid>
            <CNavbarBrand>
              <div className='stackline-logo'>
                <img src={stacklineLogo} alt="" width="100" height="100" />
              </div>
            </CNavbarBrand>
          </CContainer>
        </CNavbar>
        <div className='content-item'>
          <div className='card shark-ninja-form'>

            <SharkNinjaForm/>
          </div>
          <div className='card'>
           <StackLineTable/>
          </div>
        </div>
    </>
  );
}

export default App;
