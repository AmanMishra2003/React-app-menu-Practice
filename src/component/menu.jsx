import PizzaComponent from "./pizzaComponent";
import pizzaData from "../data";
export default function Menu({ isOpen }) {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            {
                isOpen && <PizzaComponent data={pizzaData} />
            }
        </div>
    )


}