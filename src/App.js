import './App.css';
import Boton from './components/Boton';


function App() {
  return (
    <div className="App">
      <div className="Header">
        <img alt="Logo Facebook"
              src={require('./imagenes/Nuevo-logo-Facebook-577855668.jpg')} 
              className='estilos-logo'/>
        <h1>"LIKES EN FACEBOOK"</h1>      
      </div>
      <div className="main">
        <img className='estilos-imagen'
        src={require('./imagenes/imagen-famili3.jpg')} 
        alt='Foto Bebes'/>
        <Boton />
      </div>
    </div>
  );
}

export default App;
