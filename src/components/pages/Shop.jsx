import { useOutletContext } from "react-router-dom";
import { Card } from "../Card";

function Shop() {
  const props = useOutletContext();
  let data = props[0];
  let isReady = props[1];
  let style = props[2][0];
  let openOverlay = props[3];

  let toDisplay = [];
  for (let i = 0; i < data.length; i++) {
    toDisplay.push(data[i]);
    toDisplay.push({ id: -1 });
  }

  return (
    <>
      <main className={style && " sober "}>
        {toDisplay.map((d) => {
          return <>{Card(d, style, openOverlay)}</>;
        })}
      </main>
    </>
  );
}
export default Shop;
