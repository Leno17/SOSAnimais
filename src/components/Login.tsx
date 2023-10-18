
import dog from '../assets/dog.png';
import './Login.css';


function Login() {
    return (
        <h1>
            <img className='dog' src={dog} alt='dog'></img>
            <form> 
                <input className='Usuario1' type="text" name="user" placeholder='Usuario'></input><br/>
                <input className='Usuario1' type="text" name="password" placeholder='Senha'></input>
            </form>
            <div>       
                <button type="button" className='LoginB' onClick={() => {location.href = "/menu"}}><p>Login</p></button>
            </div>
            <div>
                <button className='Esq' ><p>Esqueci minha senha</p></button>
            </div>
            <div>
                <p className='novo'>Novo Usuario?</p>
            </div>
            <div>
                <button className='criarconta' ><p>Criar Conta!</p></button>
            </div>
                
        </h1>

    )
}

export default Login;