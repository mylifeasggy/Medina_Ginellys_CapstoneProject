import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='main-nav'>
                <Link to="/" className="a"> HOME </Link>
                <Link to="/recipes" className="a"> RECIPES </Link>
                <Link to="/form" className='a'> SUBMIT A RECIPE</Link>            
        </div>
    );
}

export default NavBar;
