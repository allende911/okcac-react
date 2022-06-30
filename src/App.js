import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Home } from './components/pages/home/Home';
import { AlertMessage } from './components/pages/sections/AlertMessage';

const baseUrl = process.env.REACT_APP_STRAPI;
const sections = [
  'api/about-us?populate=*',
  'api/alert',
  'api/home?populate=*',
  'api/club-meeting',
];

function App() {
  const [about, setAbout] = useState();
  const [alert, setAlerts] = useState();
  const [clubMeeting, setClubMeeting] = useState();
  const [home, setHome] = useState();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    Promise.all(sections.map(section => axios.get(baseUrl + section))).then(
      ([
        { data: aboutUs },
        { data: alerts },
        { data: home },
        { data: clubMeeting },
      ]) => {
        setAbout(aboutUs.data.attributes);
        setAlerts(alerts.data.attributes);
        setHome(home.data.attributes);
        setClubMeeting(clubMeeting.data.attributes);
      }
    );
    if (!home) {
      return;
    }
  }, []);

  return (
    <>
      {alert && open && alert.active && (
        <AlertMessage {...alert} setOpen={setOpen} />
      )}

      {home && (
        <Home
          about={about}
          alert={alert}
          clubMeeting={clubMeeting}
          home={home}
          baseUrl={baseUrl}
        />
      )}
    </>
  );
}

export default App;
