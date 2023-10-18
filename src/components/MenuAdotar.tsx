import './Login.css'
import arrow from '../assets/arrow.png'
import ClockIcon from '../assets/clock-icon.png'
import MapIcon from '../assets/map-icon.png'
import HeartIcon from '../assets/heart.png'
import XIcon from '../assets/x-icon.png'
import React, {useState} from 'react'


function MenuAdotar() {
    const [joke, setJoke] = useState('');

const apiGet = () => {
    fetch('https://dog.ceo/api/breeds/image/random ')
    .then(response => response.json())
    .then((response) => {
        setJoke(response.message)
    });
    };
    
    let NomeDog = ['Helena', 'Alice', 'Laura', 'Maria', 'Cecilia', 'Marcelo', 'Joao', 'Rex'
    , 'Bolinha', 'Mel', 'Gordao', 'Tunico', 'Nuni', 'Leno', 'Matias', 'Mariana'];
    let ArrayNumeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

    const IdadeDog = ArrayNumeros[Math.floor(Math.random() * ArrayNumeros.length)];
    const DistDog = ArrayNumeros[Math.floor(Math.random() * ArrayNumeros.length)];
    const UmNome = NomeDog[Math.floor(Math.random() * NomeDog.length)];
    
    return (
        <h1>
            <button onClick={apiGet} className='inicio'>Iniciar Busca</button>
            <button type='button' className='arrowbutton' onClick={() => {location.href = "http://localhost:5173/menu"}}><img src={arrow} alt='arrow'></img></button>
            <img src={joke} alt='um doginho' className='AdotarDog'></img>
            <p className='dogname'>{UmNome}</p>
            <h2>
                <p className='dogdata'>{IdadeDog} Anos de Idade<br/>{DistDog}KM de distância</p>
                <div className='dogicon'>
                    
                    <img src={ClockIcon} alt='age' ></img><br/>
                    <img src={MapIcon} alt='map' ></img>
                </div>
                <div >
                    <button type='button' onClick={apiGet}><img className='likeicon' src={HeartIcon} alt='Heart' ></img></button>
                    <button type='button' onClick={apiGet}><img className='Xicon' src={XIcon} alt='X' ></img></button>
                </div>
            </h2>
        </h1>

    )
}

export default MenuAdotar;