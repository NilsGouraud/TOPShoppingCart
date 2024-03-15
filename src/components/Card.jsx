import { Tilt } from "react-tilt";

export function Card(data, style, openOverlay) {
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

  if (data.id !== -1) {
    return (
      <>
        {style ? (
          <Tilt>
            <div className="gridTile full">
              <div className="hitbox" onClick={() => openOverlay(data)}></div>
              <div className="imageContainer">
                <div className="price">{data.price}£</div>
                <img src={data.image} alt="img" />
              </div>
              <div className="title">{data.title}</div>
              <div className="buffer"></div>
              <div className="description">{data.description}</div>
            </div>
          </Tilt>
        ) : (
          <div className="gridTile full">
            <div className="content">
              <div className="hitbox" onClick={() => openOverlay(data)}></div>
              <div className="price">{data.price}£</div>
              <div className="imageContainer">
                <img src={data.image} alt="img" />
              </div>
              <div className="title">{data.title}</div>
              <div className="buffer"></div>
              <div className="description">{data.description}</div>
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
