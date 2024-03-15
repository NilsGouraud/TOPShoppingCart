import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  let url = "https://fakestoreapi.com/products/";
  const [isReady, setIsReady] = useState(false);
  const [style, setStyle] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsReady(false);
    const dataFetch = async () => {
      const fetchedData = await fetch(url).then((res) => res.json());
      setData(fetchedData);
    };
    dataFetch();
    setIsReady(true);
  }, [url]);

  let [selectedArticle, setSelectedArticle] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  function openOverlay(data) {
    setSelectedArticle(data);
    setIsOpen(true);
  }
  let fullContext = [data, isReady, [style, setStyle], openOverlay];

  function closeOverlay() {
    setIsOpen(false);
  }
  function Overlay(data) {
    return (
      <div className="overlay">
        <div className="overlayCard">
          <div className="overlayTitle">{data.title}</div>
          <div className="overlayImage">
            <img src={data.image} alt="img" />
          </div>
          <div className="overlayDescription">{data.description}</div>

          <div className="overlayPrice">Available at {data.price}£</div>
          <div className="overlayButtons">
            <button>add to cart</button>
            <button onClick={() => closeOverlay()}>go back</button>
          </div>
        </div>
        <div className="overlayCloser" onClick={() => closeOverlay()}></div>
      </div>
    );
  }

  return (
    <>
      <div className="body">
        {isOpen ? Overlay(selectedArticle) : <></>}
        {NavBar(fullContext)}
        <Outlet context={fullContext} />
        {style ? (
          <footer className="sober">
            <div className="nileLogo negative"></div>
          </footer>
        ) : (
          <footer>
            <div className="nileLogo negative"></div>
          </footer>
        )}
      </div>
    </>
  );
}

export default App;
