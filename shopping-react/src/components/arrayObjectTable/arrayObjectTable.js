
export function ArrayObjectTable(){
    var products = [
        {Name : "TV", Price: 25000, Stock: true},
        {Name : "Mobile", Price: 10000, Stock: false},
        {Name : "Shoe", Price: 5000, Stock: true}
    ]
    return(
        <div className="container-fluid">
            <h3>Products Table</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr key={product}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{(product.Stock==true)?"Available":"Out of stock"}</td>
                                <td>
                                    <button className="btn btn-info"><span className="bi bi-eye-fill"></span></button>
                                    <button className="btn btn-warning ms-2"><span className="bi bi-pen"></span></button>
                                    <button className="btn btn-danger ms-2"><span className="bi bi-trash"></span></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}