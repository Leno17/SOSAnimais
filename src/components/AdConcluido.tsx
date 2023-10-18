import './Login.css'
import check from '../assets/checkmark.png'
import arrow from '../assets/arrow.png'

function AdConcluido() {
    return (
        <h1>
            <button type='button' className='arrowbutton' onClick={() => {location.href = "/menu"}}><img src={arrow} alt='arrow'></img></button>
            <p className='okmsg'>Todos os perfis visualizados!</p>
            <img src={check} alt='ok' className='oksign'></img>
        </h1>

    )
}

export default AdConcluido;