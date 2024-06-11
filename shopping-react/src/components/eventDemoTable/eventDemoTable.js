import { useState } from "react";

export function EventDemoTable(){
    const [products] = useState([{Id:1, Name:"TV"},{Id:2, Name:"Mobile"}])

    return(
        <div className="container-fluid">
            <h2>Products</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr key={product.Id}>
                                <td>{product.Id}</td>
                                <td>{product.Name}</td>
                                <td>
                                    <button className="btn btn-danger">
                                        <span className="bi bi-trash-fill"></span>
                                    </button>
                                    <button className="btn ms-2 btn-warning">
                                        <span className="bi bi-pen"></span>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}