import { useState } from "react";

export function EventDemo1(){
    const [products] = useState([{Id:1, Name:"TV"},{Id:2, Name:"Mobile"}])

    function AddClick(e){
        var result = products.find(product=> product.Id==e.target.id);
        document.write(result.Name + "<br>" + result.Id); 
    }

    return(
        <div className="container-fluid">
            <h2>Products</h2>
            <div>
                {
                    products.map(product=>
                        <div>
                            <p>{product.Name}</p>
                            <button id={product.Id} onClick={AddClick}><span className="bi bi-cart4"></span>Add to Cart</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}