import './Login.css'
import check from '../assets/checkmark.png'
import arrow from '../assets/arrow.png'

function AnConcluido() {
    return (
        <h1>
            <button type='button' className='arrowbutton' onClick={() => {location.href = "/menu"}}><img src={arrow} alt='arrow'></img></button>
            <p className='okmsg'>Anuncio Concluido com Sucesso!</p>
            <img src={check} alt='ok' className='oksign'></img>
        </h1>

    )
}

export default AnConcluido;