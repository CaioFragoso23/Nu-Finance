import { Header } from "../Header"
import "./index.css"

export const HomePage = ({isLoggedIn, login, logout, children}) => {

    if(isLoggedIn === false){
        return(
            <div className="homeContainer">
                <div>
                    <h1>Nu Kenzie</h1>
                    <h2>Centralize o controle das suas finanças</h2>
                    <p>de forma rápida e segura</p>
                    <button className="button-primary" onClick={login}>Iniciar.</button>
                </div>
                <img src="/src/assets/Group 262.svg" alt="" />
            </div>
        )
    }
    else if(isLoggedIn === true){
        return(
            <>
            <Header logout={logout} />
            <div className="mainContainer" >
               {children}
            </div>
            </>
            
        )
    }
}