import "./Home.css";
import img from "../PizzeriaLogo.png";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Navbar = () => {
  const count = useSelector((store) => store.cart.totalQuantity)
  // useEffect(() => {
  //   count = useSelector((store) => store.cart.totalQuantity)
  // })
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light nav1 bg-dark alignNav">
        <div class="container-fluid">
          <a class="navbar-brand text-secondary" href="/">
            Pizzeria
          </a>
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <img class="nav-link " src={img} alt="..." />
              </li>

              <li class="nav-item item">
                <Link class="nav-link text-secondary" to='/orderPizza'>
                  Order Pizza
                </Link>
                
              </li>
              
              <li class="nav-item item">
                <Link className="nav-link text-secondary" to='/buildPizza'>
                  Build Ur Pizza
                  </Link>
              </li>
            </ul>
          </div>
          <button class="butn " >
            <Link className="nav-link" to='/shoppingCart'>
            Shopping Cart {count}
            </Link>
          </button>
        </div>
      </nav>
        </div>
    )
}
export default Navbar;