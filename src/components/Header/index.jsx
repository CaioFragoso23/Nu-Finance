import "./index.css"

export const Header = ({logout}) => {
    return(
        <header className="header">
            <nav className="nav container">
                <h1><span className="nuLogo">Nu</span> Kenzie</h1>
                <button className="button-secondary" onClick={logout} >Início</button>
            </nav>
        </header>
    )
}