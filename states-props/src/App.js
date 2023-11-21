import { useState } from "react";
import { DIFFERENT_PLACES } from "./components/data/Data";
import DifferentPlaces from "./components/differentPlaces/DifferentPlaces";
import Header from "./components/header/Header";
import TabButton from "./components/tabButton/TabButton";
import './App.css';
import TabContent from "./components/tabContent/TabContent";


const App = () => {
  const [selectedPlace, setSelectedPlace] = useState('');

  let tabContent = <p>Please select a place</p>;

  if (typeof selectedPlace === "number") {
    tabContent = <TabContent {...DIFFERENT_PLACES[selectedPlace]} />;
  }
  const clickHandler = (selectedButton) => {
    setSelectedPlace(selectedButton);
  };

  return (
    <>
      <Header/>
      <main>
        <section id='different-places'>
          <h2>Several beautiful places</h2>
          <ul>
            {DIFFERENT_PLACES.map(place => <DifferentPlaces key={place.id} {...place}/>)}
          </ul>
        </section>
        <section id="selected-place">
          <menu>
            <ul>
              {DIFFERENT_PLACES.map((place, index) => <TabButton
                key={place.id}
                isSelected={index === selectedPlace}
                onSelect={() => clickHandler(index)}
              >{place.title}</TabButton>)}
            </ul>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
};

export default App;
