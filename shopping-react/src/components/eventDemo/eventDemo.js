
export function EventDemo(){
    function InsertClick(SyntheticEvent){
        document.write(`
            Button Id : ${SyntheticEvent.target.id} <br>
            Class Name: ${SyntheticEvent.target.className} <br>
            X Position: ${SyntheticEvent.clientX} <br>
            Ctrl Key: ${SyntheticEvent.ctrlKey}
            
        `)
    }
    return(
        <div className="container-fluid">
            <h2>Events</h2>
            <button id="btnInsert" onClick={InsertClick} className="btn btn-primary">Insert</button>
        </div>
    )
}