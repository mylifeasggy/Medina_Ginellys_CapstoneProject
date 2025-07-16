import avatar from "/images/avatar.png"
import NavBar from "./NavBar";



const Header = () => {
    return (
        <div className="header-container">
            <header className="main-header">
                <img className="avatar" src={avatar} />
                <h1> I'M THE CHEF </h1>
            </header>
            <NavBar />
        </div>




    );
}

export default Header;
