import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  let url = "https://fakestoreapi.com/products/";
  const [isReady, setIsReady] = useState(false);
  const [style, setStyle] = useState(false);
  useEffect(() => {
    setIsReady(false);
    const dataFetch = async () => {
      const fetchedData = await fetch(url).then((res) => res.json());
      setData(fetchedData);
    };
    dataFetch();
    setIsReady(true);
  }, [url]);

  let fullContext = [data, isReady, [style, setStyle]];
  return (
    <>
      <div className="body">
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
