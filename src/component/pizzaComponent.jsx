import { useState } from "react"
import Pizza from "./pizza"

export default function PizzaComponent({data}){
    const [pizzaData, setPizzaData] = useState(data)

    return (
        <ul className="pizzas">
        {
            pizzaData.map((ele,i)=>{
                return <li key={i}><Pizza details={ele} /></li>
            })
        } 
        </ul>
    )
}