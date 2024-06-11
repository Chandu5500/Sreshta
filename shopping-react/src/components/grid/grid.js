export function Grid(props){
    return(
        <div className="container-fluid">
            <table style={{backgroundColor:props.theme}} className="table table-hover caption-top">
                <caption>{props.title}</caption>
                <thead>
                    <tr>
                        {
                            props.fields.map(field=>
                                <th key={field}>{field}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(item=>
                            <tr key="item.Name">
                                {
                                    Object.keys(item).map(key=>
                                        <td key={item[key]}>{item[key]}</td>
                                        )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}