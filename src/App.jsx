
import './App.css';
import { Navbar } from './Components/Navbar';
import Layout from "./Components/Layout";
import { ContenedorPpl } from './Components/ContenedorPpl';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      
       <Layout backgroundImg={"/Recursos/IMG-INI2.jpg"}>
       <Navbar/>
       <ContenedorPpl >  </ContenedorPpl>
       
       
       </Layout>
        <Footer></Footer>
      
  

     
    </div>
  );
}

export default App;
