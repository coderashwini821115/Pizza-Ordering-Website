import axios from "axios";
import { useEffect, useState } from "react";
import {addIng, removeIng} from '../features/cart/cartSlice'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const BuildUrPizza = () => {
  const [Builds, setBuild] = useState([]);
  const [loading, setLoading] = useState(true)
//   const [selectedItems, setSelected] = useState([])
  const [price, setPrice] = useState(0)
  const dispatcher = useDispatch()
  const handleSelect = (ingr) => {
    // setSelected([...selectedItems, ingr]);
    dispatcher(addIng(ingr))
    setPrice(price+parseInt(ingr.price))
  }
  const handleDeselect = (ingr) => {
    // setSelected(selectedItems.filter((val) => val !== ingr))
    dispatcher(removeIng(ingr))
    setPrice(price-parseInt(ingr.price))
  }

  useEffect(() => {
    axios
      .get("https://pizza-ordering-website-backend-7rst.onrender.com/build")
      .then((res) => {
        console.log(res);
        setBuild(res.data);
        setLoading(false)
      })
      .catch((e) => {
        throw e;
      });
  }, []);

  return (
    <div className="container">
      <p>
        Pizzeria now gives you options to build your own pizza. Customize your
        Pizza by choosing ingredients from the list given below.
      </p>
      {
        loading? <p>Loading...</p>: (
          <table className="table table-striped table-bordered">
            <tbody>
              {Builds.map((build) => (
                <tr key={build.id}>
                  <td>
                    <img src={build.image} alt="..." />
                  </td>
                  <th>
                    <span>{build.tname} ₹{build.price}</span>
                  </th>
                  <td>
                    <label style={{color: "orange"}}>
                      <input style={{marginRight: "10px"}} type="checkbox" id={build.id} value={build} onChange={(e) => e.target.checked? handleSelect(build): handleDeselect(build)}  />
                      Add
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
      <div>
      <span style={{fontWeight:"bold"}}>Total Price: ₹{price}</span>
      <button class="butn " style={{marginLeft: "500px"}} >
            <Link className="nav-link" to='/shoppingCart'>
            Build Ur Pizza
            </Link>
          </button>
      </div>
      
    </div>
  );
};
export default BuildUrPizza;