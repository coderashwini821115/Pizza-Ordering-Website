import "./Home.css";
import img from "../PizzeriaLogo.png";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div >
      
      <header class="text-center">Our story</header>
      <p class="para">
        We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on
        our Facebook fan page. Fans were given situations where they had to come
        up with wacky and fun excuses. The person with the best excuse won the
        Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic
        response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan
        Pizza. Everl Ever since we launched the Tastiest Pan Pizza, ever, people
        have not been able to resist the softest, cheesiest, crunchiest,
        butteriest Domino's Fresh Pan Pizza: They have been leaving the stage in
        the middle of a performance and even finding excuses to be disqualified
        in a football match. We launched Fresh Pan Pizza Best Excuse Awards on
        our Facebook fan page. Fans were given situations where they had to come
        up with wacky and fun excuses. The person with the best excuse won the
        Best Excuse Badge and won Domino's vouchers. Their enthusiastic response
        proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Everl
      </p>
      <div class="d-flex flex-row box1">
        <img
          class="img1"
          src="https://image.shutterstock.com/shutterstock/photos/526830277/display_1500/stock-photo-raw-dough-for-pizza-with-ingredients-and-spices-on-table-526830277.jpg"
          alt="..."
        />
        <div class="cont2">
          <h2>Ingredients</h2>
          <p class="para2">
            We're ruthless about goodness. We have no qualms about tearing up a
            day-old lettuce leaf (straight from the farm), or steaming a baby
            (carrot). Cut. Cut. Chop. Chop. Steam. Steam. Stir Stir. While
            they're still young and fresh - that's our motto. It makes the
            kitchen a better place.
          </p>
        </div>
      </div>
      <div class="box2 d-flex flex-row">
        <div class="cont3">
          <h2>Our Chefs</h2>
          <p class="para3">
            They make sauces sing and salads dance. They create magic with
            skill, knowledge, passion, and stirring spoons (among other things).
            They make goodness so good, it doesn't know what to do with itself.
            We do though. We send it to you.
          </p>
        </div>
        <img
          class="img2"
          src="https://thumb1.shutterstock.com/image-photo/stock-photo-happy-chef-450w-437116033.jpg"
          alt="..."
        />
      </div>
      <div class="d-flex flex-row box1 mb-1">
        <img
          class="img3"
          src="https://thumb9.shutterstock.com/image-photo/stock-photo-vintage-analog-kitchen-countdown-timer-with-classical-clock-face-and-red-remaining-time-display-450w-669255388.jpg"
          alt="..." style={{marginLeft: "50px"}}
        />
        <div class="cont4" style={{marginLeft: "100px"}}>
          <h2>45 min delivery</h2>
        </div>
      </div>
      
    </div>
  );
};
export default Home;
