import { useState } from "react"

export function Usestate1(){
    const [categories] = useState(["Electronics","Footwear"])
    return(
        <div className="container-fluid">
            <ol>
                {
                    categories.map(category=>
                        <li>{category}</li>
                        )
                }
            </ol>
        </div>
    )
}