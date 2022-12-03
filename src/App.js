import "./styles.css";
import React, { useState } from "react";

export default function Hello() {
  const [toggle, setToggle] = useState(false);

  function getComponent() {
    if (toggle) {
      return <ClickMeClass msg="click me!!" />;
    } else {
      return <ClickMe />;
    }
  }
  return (
    <div className="App">
      <h1>Conditional Rendering Using Logical Function:</h1>
      {getComponent()}
      <button onClick={() => setToggle(!toggle)}>Switch b/w Component</button>
    </div>
  );
}

const ClickMe = () => {
  const onClickHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <button id="dfghhj" onClick={onClickHandler}>
        ClickMe
      </button>
      <input id="input" onChange={onClickHandler} />
    </div>
  );
};

class ClickMeClass extends React.Component {
  onClickHandler = (e) => {
    console.log(this);
    console.log(this.props);
    console.log(this.props.msg);
  };
  render() {
    return (
      <div>
        <button id="dfghhj" onClick={this.onClickHandler}>
          ClickMeClass
        </button>
        <input id="input" onChange={this.onClickHandler} />
      </div>
    );
  }
}
