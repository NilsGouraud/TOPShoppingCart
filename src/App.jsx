import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
function App() {
  const [data, setData] = useState([]);
  let url = "https://fakestoreapi.com/products/";
  const [isReady, setIsReady] = useState(false);
  const [style, setStyle] = useState(false);
  const [cartContent, setCartContent] = useState([]);
  const [total, setTotal] = useState(0);
  let [overlayIsOpen, setOverlayIsOpen] = useState(false);
  let [addFormIsOpen, setAddFormIsOpen] = useState(false);
  let [formValue, setFormValue] = useState(0);

  useEffect(() => {
    setIsReady(false);
    const dataFetch = async () => {
      const fetchedData = await fetch(url).then((res) => res.json());
      setData(fetchedData);
    };
    dataFetch();

    setIsReady(true);
  }, [url]);

  useEffect(() => {
    let newCart = [];
    let count = 0;
    data.forEach((d) => {
      d.quantity = 0;
      d.id = count++;
      newCart.push(d);
    });
    setCartContent(newCart);
  }, [data]);

  useEffect(() => {
    const getTotal = () => {
      let temp = 0;
      cartContent.map((e) => {
        if (e.quantity > 0) {
          temp = temp + e.price * e.quantity;
        }
      });
      setTotal(temp);
    };
    getTotal();
  }, [cartContent]);

  let [selectedArticle, setSelectedArticle] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  function openOverlay(data) {
    setSelectedArticle(data);
    setOverlayIsOpen(true);
  }
  function closeOverlay() {
    setOverlayIsOpen(false);
  }
  function openAddForm() {
    setFormValue(0);
    setAddFormIsOpen(true);
  }
  function closeAddForm() {
    setFormValue(0);
    setAddFormIsOpen(false);
  }
  function addToCart(id, quantity) {
    let newCart = cartContent.slice();
    newCart.map((e) => {
      if (e.id === id) {
        e.quantity += quantity;
      }
    });
    setCartContent(newCart);
  }
  function addForm(data) {
    let actualValue = formValue;

    return (
      <div className="addForm">
        <div className="addFormCard">
          <div>How many?</div>
          <div className="addAndRemoveButtons">
            <button onClick={() => setFormValue(--actualValue)}>-</button>
            <input type="number" min="0" value={actualValue} />
            <button onClick={() => setFormValue(++actualValue)}>+</button>
          </div>
          <div>{data.price * actualValue}£</div>
          <div className="addToCartButtons">
            <button
              onClick={() => {
                addToCart(data.id, formValue);
                closeAddForm();
                closeOverlay();
              }}
            >
              confirm
            </button>
            <button onClick={() => closeAddForm()}>cancel</button>
          </div>
        </div>
      </div>
    );
  }

  function Overlay(data) {
    return (
      <div className="overlay">
        <div className="overlayCard">
          {addFormIsOpen ? addForm(data) : <></>}
          <div className="overlayTitle">{data.title}</div>
          <div className="overlayImage">
            <img src={data.image} alt="img" />
          </div>
          <div className="overlayDescription">{data.description}</div>

          <div className="overlayPrice">Available at {data.price}£</div>
          <div className="overlayButtons">
            <button onClick={() => openAddForm()}>add to cart</button>
            <button onClick={() => closeOverlay()}>go back</button>
          </div>
        </div>
        <div
          className="overlayCloser"
          onClick={() => {
            closeOverlay();
            closeAddForm();
          }}
        ></div>
      </div>
    );
  }

  let fullContext = [
    data,
    isReady,
    [style, setStyle],
    openOverlay,
    [cartContent, setCartContent],
    [total, setTotal],
  ];
  return (
    <>
      <div className="body">
        {overlayIsOpen ? Overlay(selectedArticle) : <></>}
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
