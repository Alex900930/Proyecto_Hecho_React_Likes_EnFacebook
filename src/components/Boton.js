import './Boton.css';
import Contador from './Contador';
import { useState } from 'react';
import imagenLogo from '../imagenes/Like.png';

export default function Boton(){

    const [contadorClick, setContadorClick] = useState(0);
    
    function manejadorClick() {
        setContadorClick(contadorClick + 1);
    }        
    return (
        <div className='estilo-boton-principal'>
            <button className="estiloS-boton" 
                    onClick={manejadorClick} 
                    style= {{backgroundImage: `url(${imagenLogo})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100px',
                    height: '55px',
                    }}>
        
            </button>
            <Contador contadorClick={contadorClick}/> 
         </div>
    )
}