import "./App.css";
import React, { useState } from "react";
import data from "./data";
import List from "./List";
import produce from "immer";
function App() {
  const [people, setPeople] = useState(data);

  const clearBirthdays = () => {
    setPeople([]);
  };

  const addBirthday = () => {
    var name1 = prompt("Name");
    var age1 = prompt("Age");
    var image1 = prompt("Image");
    var data1 = {
      id: data.length + 1,
      name: name1,
      age: age1,
      image: image1,
    };
    if (data1.id != null) {
      const nextState = produce(data, (draftState) => {
        console.log(data1);
        draftState.push(data1);
      });
      setPeople(nextState);
      console.log(nextState + data);
    }
  };
  return (
    <div>
      <main>
        <section className="container">
          <button onClick={() => addBirthday()} className="button">
            Add Birthday!!
          </button>
          <br />
          <h3>{people.length} Birthdays today</h3>
          <List people={people} />
          <button onClick={clearBirthdays} className="button">
            Clear All
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
