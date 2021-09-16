import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const App = function () {
  const [meaning, setMeaning] = useState("");
  const foodDictionary = {
    "🥓": "Bacoon",
    "🍔": "Hamburger",
    "🍟": "french-fries",
    "🍕": "Pizza",
    "🌭": "Hot Dog",
    "🥪": "sandwich",
    "🌮": "Taco",
    "🌯": "Burrito",
    "🌰" : "chestnut",
    "🍗" : "Poultry Leg",
    "🍤" : "Fried Shrimp",
    "🍪" :"Cookie",
    "🍩" : "Doughnut",
    "🥯" :  "Bage",
    "🥞": "Pancakes"
  };

  var foodWeHave = Object.keys(foodDictionary);

  //function for handling user input emojis

  function foodInputHandler(e) {
    console.log(e.target.value);
    var userInput = e.target.value;

    var meaning = foodDictionary[userInput];
    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "we dont have this in a database";
    }
    setMeaning(meaning);
  }

  //function for handling already used emojis

  function foodClickhandler(food) {
    // console.log(emoji);
    var meaning = foodDictionary[food];
    setMeaning(meaning);
  }

  return (
    <div className="container container-center">
      <h1> Junkyys !</h1>

      <input onChange={foodInputHandler}></input>
      <h2 className="meaningBox">What's This?:{meaning}</h2>

      <h3>FastFood we have</h3>

      {foodWeHave.map(function (food) {
        return (
          <div class="display">
            <span onClick={() => foodClickhandler(food)}>{food}</span>
          </div>
        );
      })}
     <div>
     <footer>
      <ul class="social">
        <li>
          <a href="https://twitter.com/code_prash"
            >Twitter <i class="icons fab fa-twitter-square"></i
          ></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/prashant-tanwar-302571179/"
            >Linkedin <i class="fab fa-linkedin-in"></i
          ></a>
        </li>
        <li>
          <a href="https://github.com/Prashantrajput11"
            >Github<i class="icons fab fa-github"></i
          ></a>
        </li>
      </ul>
      </footer>
     </div>
    </div>
    
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
