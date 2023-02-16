import './App.scss';
import { Route, Routes } from 'react-router-dom';


import Layout from './content/layout/layout';
import Forside from './content/pages/forside';
import Faq from './content/pages/faq'
import Kontaktos from './content/pages/kontaktos'
import Nyheder from './content/pages/nyheder'
import Omos from './content/pages/omos'
import Services from './content/pages/services'
import Login from './content/pages/login';


import AdminForside from './content/pages/admin/AdminForside'
import AdminNyheder from './content/pages/admin/AdminNyheder'
import Adminlayout from './content/layout/admin/adminlayout';
import AdminCreateNyheder from './content/pages/admin/AdminCreateNyheder';
import AdminFaq from './content/pages/admin/AdminFaq';
import AdminNyhederRet from './content/pages/admin/AdminNyhederRet';


function App () {
  return (
    <div className="App">

      <Routes>

        {/* ------------- Public ------------- */ }
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Forside /> } />
          <Route path="faq" element={ <Faq /> } />
          <Route path="kontaktos" element={ <Kontaktos /> } />
          <Route path="nyheder" element={ <Nyheder /> } />
          <Route path="omos" element={ <Omos /> } />
          <Route path="services" element={ <Services /> } />
          <Route path="login" element={ <Login /> } />

        </Route>



        <Route path="/admin" element={<Adminlayout />}>
        <Route index element={<AdminForside />} />
        <Route path="/adminnyheder" element={ <AdminNyheder /> }/>
        <Route path="/adminnyhederopret" element={ <AdminCreateNyheder /> }/>
        <Route path="/adminnyhederret/:ID" element={ <AdminNyhederRet /> }/>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
