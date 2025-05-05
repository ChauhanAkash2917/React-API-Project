import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hedar from './components/Hedar';
import Product from './components/Product';

function App() {

  return (
    <>
     <Hedar/>
     <h1 className='text-center mt-5 mb-5 text-info'>Products</h1>
     <Product/>
    </>
  )
}

export default App
