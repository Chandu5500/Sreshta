import { useState } from "react";
import { Grid } from "../grid/grid";


export function Properties1(){
    const [products] = useState([{Name:"TV", Price:20000.55, Stock:"Available", Qty:5},{Name:"Shoe", Price:500, Stock:"Out of Stock", Qty:0}])

    return(
        <div className="container-fluid">
            <Grid theme="yellow" title="Employee Grid" fields={["Name","Designation","Salary"]} data={[{Name:"Chandu", Designation:"Manager",Salary:45000.44},{Name:"Ganesh",Designation:"Developer",Salary:50000.55}]} />
            <Grid theme="red" title="Products Grid" fields={["Name","Price","Stock","Qty"]} data={products} />
        </div>
    )
}