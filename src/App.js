import "./styles.css";
import { useSelector, useDispatch, useState } from "react-redux";
import { incNumber, decNumber, setZero } from "./action/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Incrementer/Decrementer</h1>
      <div className="quantity">
        <a
          className="quantity__minus"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          <span>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          class="quantity__input"
          value={myState}
          //onChange={getNum}
        />
        <a
          class="quantity__plus"
          title="Increment"
          onClick={() => dispatch(incNumber())}
        >
          <span>+</span>
        </a>
        <div>
          <button
            //title =
            onClick={() => dispatch(setZero())}
            style={{
              margin: "10px",
              background: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
