import "./index.css"
export const FilterButtons = ({ShowAll, FilterEntries, FilterExits}) => {
    return(
        <div className="filterButtons">
            <button className="button-filter" onClick={ShowAll}>Todos</button>
            <button className="button-filter" onClick={FilterEntries}>Entrada</button>
            <button className="button-filter" onClick={FilterExits}>Saída</button>
        </div>
    )
}