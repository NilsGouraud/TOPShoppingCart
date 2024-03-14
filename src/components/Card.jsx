import { useOutletContext } from "react-router";
import { Tilt } from "react-tilt";

export function Card(d, style) {
  console.log(style);
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  function addToCart() {
    alert("the overlay and the cart are yet to be implemented");
  }
  console.log(d);
  if (d.id !== -1) {
    return (
      <>
        {style ? (
          <Tilt>
            <div className="gridTile full">
              <div className="content">
                <div className="imageContainer">
                  <div className="price">{d.price}£</div>
                  <img src={d.image} alt="img" />
                </div>
                <div class="title">{d.title}</div>
                <div className="buffer"></div>
                <div class="description">{d.description}</div>
              </div>
            </div>
          </Tilt>
        ) : (
          <div className="gridTile full">
            <div className="content" onClick={() => addToCart()}>
              <div className="price">{d.price}£</div>
              <div className="imageContainer">
                <img src={d.image} alt="img" />
              </div>
              <div class="title">{d.title}</div>
              <div className="buffer"></div>
              <div class="description">{d.description}</div>
            </div>
          </div>
        )}
      </>
    );
  } else if (style) {
    return <div className="gridTile empty sober"></div>;
  } else {
    return <div className="gridTile empty"></div>;
  }
}
export default Card;
