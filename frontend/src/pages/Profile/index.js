import React, {useEffect, useState} from 'react';

import './styles.css';
import imageLogo from '../../assets/logo.svg';

import { Link, useHistory } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

function Profile(){
    const history = useHistory();
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    useEffect(()=>{
        api.get('profile', {
            headers:{
                Authorization: ongId,
            }
        })
        .then(response =>{
            setIncidents(response.data);
        })
    }, [ongId]);
    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId
                }
            });
            setIncidents(incidents.filter(incident=> incident.id !== id))
        }catch (err){
            alert('Erro ao deletar incidente, tente novamente');
        }
    }
    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return(
        <div className="profile-container">
            <header>
                <img src={imageLogo} alt="Be The Hero"/>
                <span>Bem Vinda, {ongName}</span>
                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button onClick={handleLogout}><FiPower size={18} color="#E02141"/></button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                        <button type="button" onClick={()=> handleDeleteIncident(incident.id)}><FiTrash2 size={20} color="#a8a8b3"/></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;