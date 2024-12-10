import { useEffect, useState } from "react";
import axios from "axios";
import "./Order.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

const OrderPizza = () => {
  const [Orders, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState([]);
  const { Pizza } = useSelector((store) => store.cart);

  useEffect(() => {
    axios
      .get("http://localhost:8080/order")
      .then((res) => {
        console.log(res);
        setOrder(res.data);
        setLoading(false);
        setText(res.data.map(() => "Add to Cart"));
        // setText(Pizza.map((p) => {
        //   if()
        // }))
      })
      .catch((e) => {
        console.log(e.message);
        setLoading(false);
      });
  }, []);
  useEffect(() => {});
  const dispatcher = useDispatch();
  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div className="d-flex flex-row flex-wrap container mt-4">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        Orders.map((order, index) => (
          <div class="card w-50 d-flex flex-row" key={order.id}>
            <div style={{ width: "30%" }}>
              <h2 style={{ textAlign: "center" }}>{order.name}</h2>
              <div
                style={{ margin: "0 auto" }}
                class={order.type == "veg" ? "veg" : "nonveg"}
              ></div>
              <p style={{ textAlign: "center", marginTop: "35px" }}>
                ₹ {order.price}
              </p>
            </div>
            <div style={{ width: "40%" }}>
              <p>{order.description}</p>
              <p>
                <span style={{ fontWeight: "bold" }}>Ingredients</span> :{" "}
                {order.ingredients.map((ing) => (
                  <span>{ing}, </span>
                ))}{" "}
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Toppings</span> :{" "}
                {order.topping.map((top) => (
                  <span>{top}, </span>
                ))}{" "}
              </p>
            </div>
            <div
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src={order.image}
                alt="..."
              />
              <button
                className={
                  Pizza.includes(order)
                    ? "btn btn-danger btn-round"
                    : "btn  btn-warning btn-round"
                }
                onClick={() => {
                  if (Pizza.includes(order)) {
                    dispatcher(removeFromCart(order));

                    // setText((prevButtonTexts) => {
                    //   prevButtonTexts[index] = "Remove";
                    //   return [...prevButtonTexts];
                    // })
                  } else {
                    dispatcher(addToCart(order));
                  }
                }}
              >
                {Pizza.includes(order) ? "Remove" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderPizza;
