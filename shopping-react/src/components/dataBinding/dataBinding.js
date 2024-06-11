
export function DataBinding(){
    var product={
        name: "Realme",
        price: 2000,
        stock: true
    }
    return(
        <div>
            <h2>Product Details</h2>
            <dt>Name</dt>
            <dd>{product.name}</dd>
            <dt>Price</dt>
            <dd>{product.price}</dd>
            <dt>Stock</dt>
            <dd>{(product.stock==true)?"Available":"Out of stock"}</dd>
        </div>
    )
}