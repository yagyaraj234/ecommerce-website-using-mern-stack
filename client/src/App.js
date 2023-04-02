import './App.scss';
import {Routes,Route} from 'react-router-dom'
import { Home,Shop,NewCollection,About,Account,Contact,Register,PageNotFound,Login } from './pages/Pages';
function App() {
  return (
    <div className='App'>
     <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/new-collection' element={<NewCollection />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/account' element={<Account />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>

        </Routes>
     </div>
  );
}

export default App;
