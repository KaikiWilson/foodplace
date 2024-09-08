import React from 'react';
import prato from './img/prato.svg'
import bike from './img/bike.svg'
import localizacao from './img/localizacao.svg'
import cesta from './img/cesta.svg'
import lupa from './img/lupa.svg'
import './Background.css';

const BackgroundImageComponent = () => {
  return (
    <div className="background-container">
      <div className="overlay-content">
        <h1>Está sentindo aquela fome?</h1>
        <p>Com apenas alguns cliques, encontre refeições acessíveis perto de você</p>

        <div className='box-content'>

          <div className='first-content'>
            <button className='entrega'>
              <img src={bike} alt="motocicleta delivery" />
              Entrega
            </button>

            <button className='retirada'>
                <img src={cesta} alt="Cesta de retirada" />
                Retirada
            </button>
          </div>


          <div className='second-content'>
            <div>
              <img src={localizacao} alt="Icone de localização" />
              <input placeholder='Coloque o seu endereço'/>
            </div>

            <button>
              <img src={lupa} alt="lupa de pesquisa" />
              Pesquisar
            </button>
          </div>

        </div>
      </div>

      <div className='box-prato'>
        <img className='prato' src={prato} alt="Prato de comida" />
      </div>
    </div>
  );
};

export default BackgroundImageComponent;
