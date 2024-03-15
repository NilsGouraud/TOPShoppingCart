import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router";

function Cart() {
  let props = useOutletContext();
  let style = props[2][0];
  let cartContent = props[4][0];
  let setCartContent = props[4][1];
  let total = props[5][0];
  console.log(cartContent);
  console.log(total);

  function emptyCart() {
    let newCart = cartContent.slice();
    newCart.forEach((d) => {
      d.quantity = 0;
    });
    setCartContent(newCart);
  }

  return (
    <main
      className={"nilePhoto " + (style && " sober")}
      onClick={() => console.log(cartContent)}
    >
      <div className={"shopContent " + (style && " sober")}>
        {cartContent.map((e) => {
          if (e.quantity > 0) {
            return (
              <div className="flexAround">
                <div>
                  {e.quantity} x {e.title}
                </div>
                <div>{e.price * e.quantity}£</div>
              </div>
            );
          }
        })}
        <br />
        <div className="flexAround">
          {total === 0 ? (
            "your cart is empty"
          ) : (
            <div className="flexAround">
              <div>total:</div>
              <div>{total}£</div>
            </div>
          )}
        </div>
        <br />
        {total === 0 ? (
          ""
        ) : (
          <>
            <div className="flexAround">
              <button
                className={style && " sober"}
                onClick={() => alert("no such feature on this site")}
              >
                Proceed to payment
              </button>
              <button
                className={style && " sober"}
                onClick={() => {
                  emptyCart();
                }}
              >
                empty cart
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
export default Cart;
