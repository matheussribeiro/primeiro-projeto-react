import React from 'react';
import logoImg from '../../assets/githubexplores.svg'
import {FiChevronRight} from 'react-icons/fi'


import {Title, Form, Repositories} from './styles'



const Dashboard: React.FC = () => {
    return (
    <>
        <img src={logoImg} alt="Github Explorer"/>
        <Title>Explore repositórios no Github</Title>

        <Form>
            <input placeholder="Digite o repositório"/>
            <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
            <a href="https://google.com.br">
                <img src="https://avatars.githubusercontent.com/u/7717842?v=4" alt="Vitor Nere"/>
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Descrição teste</p>
                </div>
                <FiChevronRight size={20}/> 
            </a>

            <a href="https://google.com.br">
                <img src="https://avatars.githubusercontent.com/u/7717842?v=4" alt="Vitor Nere"/>
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Descrição teste</p>
                </div>
                <FiChevronRight size={20}/> 
            </a>

            <a href="https://google.com.br">
                <img src="https://avatars.githubusercontent.com/u/7717842?v=4" alt="Vitor Nere"/>
                <div>
                    <strong>rocketseat/unform</strong>
                    <p>Descrição teste</p>
                </div>
                <FiChevronRight size={20}/> 
            </a>
        </Repositories>
    </>
    );
};

export default Dashboard;