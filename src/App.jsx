
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
       <ContenedorPpl contenedorIMG1={"/Recursos/imagenes/soga-2.jpeg"} contenedorIMG2={"/Recursos/imagenes/soga-1.jpeg"} contenedorIMG3={"/Recursos/imagenes/soga-3.jpeg"} >  </ContenedorPpl>
       <Footer></Footer>
       </Layout>
     
      
  

     
    </div>
  );
}

export default App;
