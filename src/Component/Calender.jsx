import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../calender.css";
import "react-big-calendar/lib/css/react-big-calendar.css";


function Calender() {

  const localizer = momentLocalizer(moment)
  const [holidays, setholidays] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    async function getData() {

      const res = await axios.get('https://calendarific.com/api/v2/holidays?&api_key=7e43e605327174a25f8e5f0bc14c61d2d4db49b4&country=PK&year=2022')

      console.warn("=========================")
     
      console.warn(res.data)
      console.warn(res.data.response.holidays)
      

      setholidays(res.data.results);
    

    }
    getData();
  }, []);

  return (
    <>
      <h1>Holidays calender</h1>


      <div>
        <Calendar
        events={holidays}
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>



    </>
  );
}

export default Calender;
