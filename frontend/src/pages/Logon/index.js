import React, { useState }from 'react';

import imageHeroes from '../../assets/heroes.png';
import imageLogo from '../../assets/logo.svg';

import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch(error){
            console.log('Não existe ONG com esse identificador!');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={imageLogo} alt="Be the hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link to="/register" className="back-link"><FiLogIn size={16} color="#E02041"/>Não tenho cadastro</Link>
                </form>
            </section>
            <img src={imageHeroes} alt="Heroes"></img>
        </div>
    );
};

export default Logon;