
export function DataBindingArray(){
    var categories = ["Fashion","Footwear","Toys","Accessories"]
    return(
        <div>
            <h2>Array</h2>
            <ol>{
                categories.map(category=>
                    <li key={category}>{category}</li>
                )
            }
            </ol>
            <select>
                {
                    categories.map(category=>
                        <option key={category}>{category}</option>
                        )
                }
            </select>
            <ul className="list-unstyled">
                {
                    categories.map(category=>
                        <li key={category}><input type="checkbox" />{category}</li>
                        )
                }
            </ul>
            <div>
                {
                    categories.map(category=>
                        <div>
                            <button className="w-25" key={category}>{category}</button>
                        </div>
                        )
                }
            </div>
        </div>
    )
}