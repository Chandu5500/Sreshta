export function FormEvents(){
    function SubmitClick(e){
        e.preventDefault();
        alert("Form Submitted")
    }
    return(
        <div className="container-fluid">
            <form onSubmit={SubmitClick}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name='Username'/></dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}