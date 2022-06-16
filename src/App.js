import {Routes,Route} from 'react-router-dom';
import {Contact, Home, Pricing, Training } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/training' element={<Training/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
