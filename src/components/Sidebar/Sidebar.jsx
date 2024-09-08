import logo from './img/logo.svg'
import loc from './img/loc.svg'
import search from './img/search.svg'
import personal from './img/personal.svg'
import './Sidebar.css'

export const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className="logo"><img src={logo} alt="logo da página" />food<span>Place</span></div>
            
            <div className='localizacao'>
                <h3>Entregar para: <img src={loc} alt="icone de localização" /><span> Localização Atual:</span> Mohammadpur Bus Stand, Dhaka</h3>

            </div>

            <div className='box-search-and-login'>
                <img src={search} alt="Lupa de pesquisa" />
                Pesquisar Comida

                <button>
                    <img src={personal} alt="Icone de uma pessoa" />
                    Login
                </button>
            </div>


        </div>
    );
};