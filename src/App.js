import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Home } from './components/pages/Home/Home';
import { helpOptions } from './components/pages/sections/helpOptions';

function App() {
  const [selection, setSelection] = useState(helpOptions[0].option.slug);
  const handleSelection = event => setSelection(event.target.value);
  const [events, setEvents] = useState();

  useEffect(() => {
    axios
      .get(
        'http://localhost:8080/https://nightsky.jpl.nasa.gov/js/data/events_json_api.cfm?&Club_ID=877&IncludeRN=0'
      )
      .then(response => setEvents(response.data.events));
  }, []);

  return (
    <Home selection={selection} isSelected={handleSelection} events={events} />
  );
}

export default App;
