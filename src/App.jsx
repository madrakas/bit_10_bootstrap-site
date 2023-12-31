import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ServicesPage } from './pages/ServicesPage';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { NoPage } from './pages/NoPage';
import { TosPage } from './pages/TosPage';
import { ListingPage } from './pages/ListingPage';
import { PublicLayout } from './layout/PublicLayout';
import { AuthLayout } from './layout/AuthLayout';
import { ContextWrapper } from './context/GlobalContext';

function App() {
  return (
    <ContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route Component={PublicLayout}>
            <Route index path='/bit_10_bootstrap-site/' element={<HomePage />}/>
            <Route path='/bit_10_bootstrap-site/services' element={<ServicesPage />}/>
            <Route path='/bit_10_bootstrap-site/listing' element={<ListingPage />}/>
            <Route path='/bit_10_bootstrap-site/tos' element={<TosPage />}/>
            <Route path='*' element={<NoPage />} />
          </Route>
          <Route Component={AuthLayout}>
            <Route path='/bit_10_bootstrap-site/register' element={<RegisterPage />}/>
          </Route>
        </Routes>
      </BrowserRouter> 
    </ContextWrapper>
  );
}

export default App;
// https://seolounge.radiantthemes.com/home-version-11/