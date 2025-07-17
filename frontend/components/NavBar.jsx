import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='main-nav'>
                
                <Link to="/recipes" className="a"> Recipes </Link>
            
        </div>
    );
}

export default NavBar;
