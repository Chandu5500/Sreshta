import { useEffect, useState } from "react"
import "./shopping.css"
import axios from "axios"

export function Shopping(){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("All");
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    function LoadCategories(){
        axios.get("https://fakestoreapi.com/products/categories")
        .then(response=>{
            response.data.unshift("All");
            setCategories(response.data);
        })
    }

    function LoadProducts(url){
        axios.get(url).then(response=>{
            setProducts(response.data);
        });
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
    },[])

    function handleCategoryChanged(e){
        if(e.target.value=="All"){
            LoadProducts("https://fakestoreapi.com/products");
        }else{
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
        }
        setCategory(e.target.value);
    }

    function AddToCartClick(e){
        axios.get(`http://fakestoreapi.com/products/${e.currentTarget.name}`)
        .then(response=>{
            alert(`${response.data.title}\nAdded to Cart`)
            cartItems.push(response.data); 
            setCartItemsCount(cartItems.length); 
        })
    }
    return(
        <div className="container-fluid">
            <header className="bg-dark d-flex justify-content-between text-white text-center p-2">
                <div>
                    <h2><span className="bi bi-cart"></span>Shopper.</h2>
                </div>
                <div>
                    <button className="btn btn-danger position-relative">
                        <span className="bi bi-cart4"></span>Your Cart Items
                        <span className="badge rounded-circle bg-primary position-absolute">{cartItemsCount}</span> 
                    </button>
                </div>
            </header>
            <section className="mt-3 row">
                <nav className="col-2">
                    <div>
                        <label className="form-label">Select Category</label>
                        <div>
                            <select onChange={handleCategoryChanged} className="form-select">
                                {
                                    categories.map(category=>
                                        <option key={category} value={category}>
                                            {category.toUpperCase()}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Choose Category</label>
                        <div>
                            <ul className="list-unstyled">
                                {
                                    categories.map(cat=>
                                        <li key={cat}>
                                            <input type="radio" onChange={handleCategoryChanged} name="category" value={category} checked/>{cat.toUpperCase()}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3>Your Cart Items</h3>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Preview</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(item=>
                                        <tr>
                                            <td>{item.title}</td>
                                            <td><img src={item.image} width="50" height="50"/></td>
                                        </tr>
                                        )
                                }
                            </tbody>
                        </table>
                    </div>
                </nav>
                <main className="col-8 d-flex flex-wrap">
                    {
                        products.map(product=>
                            <div key={product.id} className="card m-2 p-2"> 
                                <img src={product.image} className="card-img-top" height="150"/>
                                <div className="card-header">
                                    <p>
                                        {product.title}
                                    </p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>{product.rating.rate} [{product.rating.count}]
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button name={product.id} onClick={AddToCartClick} className="btn btn-danger">
                                        <span className="bi bi-cart4"></span>Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}