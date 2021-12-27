import Navbar from './componentes/navbar';
import EvolucionHomero from './componentes/evolucionHomero';
import Cards from   './componentes/cards'
import Footer from './componentes/footer';

function App() {
  return (
    <div className="container-fluid">
      <Navbar/>
      <EvolucionHomero/>
      <Cards/>
      <Footer/>
    </div>
  );
}
export default App;
