import dog from '../assets/dog.png';
import './Login.css';

function Menu() {
    return (
        <h1>
            <img className='dog' src={dog} alt='dog'></img>
            <div>
                <button type='button' className='LoginB' onClick={() => {location.href = "/adotar"}}><p>Quero Adotar!</p></button>
            </div>
            <div>
                <button type='button' className='LoginB' onClick={() => {location.href = "/anuncio"}}><p>Quero Doar!</p></button>
            </div>          
            <div>
                <button type='button' className='LoginB' onClick={() => {location.href = "/"}}><p>Desconectar</p></button>
            </div>
                
        </h1>

    )
}

export default Menu;