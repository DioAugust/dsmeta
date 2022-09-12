import './styles.css'
import logo from '../../assets/img/logo1.svg'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Dashboard de vendas</p>
            </div>
        </header>
    )
}

export default Header;