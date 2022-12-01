import React from 'react';
import { useState, useEffect } from 'react';
import  FullCalendar  from '@fullcalendar/react';
import DayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';



function EventCalender () {
  const [meeting, setMeeting] = useState({});
  const [events, setEvents] = useState([]);
  const jwt_token = localStorage.getItem('jwt');
  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let start_time = selectInfo.startStr
    let end_time = selectInfo.endStr
    let start_date = selectInfo.start
    let end_date = selectInfo.end
    let allDay = true
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: false,
        className: 'event'
      })
    }

    if (start_time) {
      calendarApi.addEvent({
        title,
        start: start_time,
        end: end_time,
        allDay: false,
        className: 'event'
      })
    }
  
  console.log(start_time);
  console.log(end_time);
  console.log(start_date);
  console.log(end_date);
  console.log(allDay);
  // useEffect(() => {

  // }, [jwt_token]);

    
    if (start_date) {
      calendarApi.addEvent({
        title,
        start: start_date,
        end: end_date,
        allDay: false,
        className: 'event'
      })
    }

    if (end_time) {
      calendarApi.addEvent({
        title,
        start: start_time,
        end: end_time,
        allDay: false,
        className: 'event'
      });

      calendarApi.addEvent({
        title,
        start: start_time,
        end: end_time,
        allDay: false,
        className: 'event'
      });
    }

      console.log(end_time)
      if (events.start_time && events.end_time) {
        calendarApi.addEvent({
          title,
          start: events.start_time,
          end: events.end_time,
          allDay: false,
          className: 'event'
        })
        setEvents(events => [...events, {
          title,  
          start: events.start_time,
          end: events.end_time,
          allDay: false,
          className: 'event'
        }])
      }

      fetch('http://localhost:3000/meetings', {
        method: 'POST',
        headers: {
          Authorization: "Bearer " + jwt_token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }, body: JSON.stringify({
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data + "fetch")
        setMeeting(data)
        console.log(data.start_time + "fetch got start time" + data.end_time + "fetch got end time")
      })

        }
        console.log(meeting + "i am meeting")
  
  return (
    <div className='claender'>
      <FullCalendar
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      plugins={[
        DayGridPlugin,
        timeGridPlugin,
        interactionPlugin
      ]}
      eventDrop={handleDateSelect}
      editable={true}
      selectable={true}
      select={handleDateSelect}
      dateClick={(e) => console.log(e.dateStr + ' datawas clicked')}
      eventClick={(e) => console.log(e.event.id + 'event was clicked')}

      customButtons={{
        new: {
          text: 'new',
          click: () => console.log('new event'),
        },
      }}
      />
        

    </div>
  
  )
}

export default EventCalender;

