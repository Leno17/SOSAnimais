import './Login.css';
import arrow from '../assets/arrow.png'

function MenuAnuncio() {
    return (
        <h1>
            <button type='button' className='arrowbutton' onClick={() => {location.href = "http://localhost:5173/menu"}}><img src={arrow} alt='arrow'></img></button>
            <p className='anunAninmal'>Anunciar Animal</p>
            <form onSubmit={() => {location.href = "http://localhost:5173/menu"}}>
            <div>
                <ul className='checkbox'>
                    <li><input type="checkbox"></input> Gato</li>
                    <li><input type="checkbox"></input> Cachorro</li>
                </ul>
            </div>
                <div>
                    <p className='AnunTXT'>Telefone</p>
                    <input className='Usuario1' type="text" name="telefone" placeholder='(xx) x-xxxx-xxxx'></input>
                </div>
                <div>
                    <p className='AnunTXT'>CEP</p>
                    <input className='Usuario1' type="text" name="CEP" placeholder='xx.xxx-xxx'></input>
                </div>
                <div>
                    <p className='AnunTXT'>Nome do Animal</p>
                    <input className='Usuario1' type="text" name="Nome" placeholder=''></input>
                </div>
                <div>
                    <p className='AnunTXT'>Idade</p>
                    <input className='Usuario1' type="text" name="Idade" placeholder=''></input>
                </div>
                <div>
                    <p className='novo'>Foto do Animal</p>
                    <button type="button" className='Esq'><p>Upload</p></button>
                </div>
                    <button type='submit' className='LoginB' ><p>Anunciar</p></button>
            </form>         
                
        </h1>

    )
}

export default MenuAnuncio;