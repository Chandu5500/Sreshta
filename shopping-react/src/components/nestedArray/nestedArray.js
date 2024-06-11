
export function NestedArray(){
    var menu=[
        {Category: "Electronics", Products: ["TV", "Mobile"]},
        {Category: "Footwear", Products: ["Nike", "Puma"]}
    ]
    return(
        <div className="container-fluid">
            <h2>Select Category Dropdown</h2>
            {
                menu.map(item=>
                    <details key={item.Category}>
                        <summary>{item.Category}</summary>
                        <ul>
                            {
                                item.Products.map(product=>
                                    <li key={product}>{product}</li>    
                                )
                            }
                        </ul>
                    </details>    
                )
            }
            <h2>Shoping menu</h2>
            <ol>
                {
                    menu.map(item=>
                        <li key={item.Category}>
                            {item.Category}
                            <ul>
                                {
                                    item.Products.map(product=>
                                        <li key={product}>{product}</li>    
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <h2>Select Category</h2>
            <select>
                {
                    menu.map(item=>
                        <optgroup label={item.Category} key={item.Category}>
                            {
                                item.Products.map(product=>
                                    <option key={product}>{product}</option>    
                                )
                            }
                        </optgroup>    
                    )
                }
            </select>
        </div>
    )
}