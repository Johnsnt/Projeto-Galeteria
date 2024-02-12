import { Link } from 'react-router-dom';
import './style.css';


export default function Header() {
    return (
        <header>
            <div className='limitar-secao'>
            <img src="assets/logo.png" alt="logo" />
                <nav>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/sabores">Sabores</Link>
                    <Link className='link' to="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    );

};