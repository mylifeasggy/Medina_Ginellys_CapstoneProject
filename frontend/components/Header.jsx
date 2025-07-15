import avatar from "../public/images/avatar.png"


const Header = () => {
    return (
        <header>
            <img className= "avatar" src= {avatar}/>
                        <h1> I'M THE CHEF </h1>
        </header>
    );
}

export default Header;
