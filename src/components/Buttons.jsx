import "./Buttons.css";

export default function Buttons({ onButtonClick }) {
  const clickHandler = (e) => {
    const value = e.target.innerHTML.trim();
    onButtonClick(value);
  };

  return (
    <div className="buttons">
      <button onClick={clickHandler} style={{ color: "#5d94cc" }}>
        AC
      </button>
      <button onClick={clickHandler} style={{ color: "#5d94cc" }}>
        DEL
      </button>
      <button onClick={clickHandler} style={{ color: "#5d94cc" }}>
        /
      </button>
      <button onClick={clickHandler} style={{ color: "#5d94cc" }}>
        %
      </button>
      <button onClick={clickHandler}>7</button>
      <button onClick={clickHandler}>8</button>
      <button onClick={clickHandler}>9</button>
      <button onClick={clickHandler} style={{ color: "#5d94cc" }}>
        *
      </button>
      <button onClick={clickHandler}>4</button>
      <button onClick={clickHandler}>5</button>
      <button onClick={clickHandler}>6</button>
      <button onClick={clickHandler} style={{ color: "#5d94cc" }}>
        -
      </button>
      <button onClick={clickHandler}>1</button>
      <button onClick={clickHandler}>2</button>
      <button onClick={clickHandler}>3</button>
      <button onClick={clickHandler} style={{ color: "#5d94cc" }}>
        +
      </button>
      <button onClick={clickHandler}>0</button>
      <button onClick={clickHandler}>00</button>
      <button onClick={clickHandler}>.</button>
      <button onClick={clickHandler} style={{ color: "#5d94cc" }}>
        =
      </button>
    </div>
  );
}
