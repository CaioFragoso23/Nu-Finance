export const HomePage = ({isLoggedIn, user, login, logout}) => {
    if(isLoggedIn === true){
        return(
            <div>
                <button onClick={logout}>Voltar</button>
            </div>
        )
    }
    else if(isLoggedIn === false){
        return(
            <div>
                <button className="button-primary" onClick={login}>Iniciar.</button>
            </div>
        )
    }
}