import React from "react";

export class Register2 extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'Product Details',
            product: {
                Name: "TV",
                Price: 45000.44,
                Stock: true
            },
            categories: ["All", "Electronics", "Footwear"],
            effect: "text-success"
        }
    }
    handleCategoryChange(e){
        alert(e.target.value);
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>{this.state.title}</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.product.Price}</dd>
                    <dt>Stock</dt>
                    <dd>
                        {(this.state.product.Stock==true)?"Available":"Out of Stock"}
                    </dd>
                </dl>
                <h3>Select Category</h3>
                <select onChange={this.handleCategoryChange}>
                    {
                        this.state.categories.map(category=>
                            <option key={category}>{category}</option>
                        )
                    }
                </select>
            </div>
        )
    }
}