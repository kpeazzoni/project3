import React from 'react';
import './AppointmentsCards.css'

function AppointmentsCards({appointments}) {
  return appointments.map ((appintment, i)=>(
    <div className='card appointmentsCards' key={i}>
      <div className='card-body'>
      <h3>Date: {appintment.date}</h3>
      <h3>Start Time: {appintment.start_time}</h3>
      <h3>End Time: {appintment.end_time}</h3>
      <h3>Exercises: {appintment.exercise}</h3>
      </div>
    </div>
  ))
}

export default AppointmentsCards;


// function AppointmentsCards (props){
//   return props.appointements.map((appointment, i)=>(
//       <div className="card text-center">
//         <div className="card-header">
//           <h2>{appointment.appoint_time}</h2>
//         </div>
//         <div className="card-body">{appointment.details}</div>
//       </div>
//   ));
//   }
  
//   export default AppointmentsCards;


//   return clients.map((client, i) => (
//     <div className='allClients-per' key={i}>
//         <p><b>Name:</b> {client.name}</p>
//         <p><b>DOB:</b> {client.dob}</p>
//         <p><b>Notes:</b> {client.notes}</p>
//     </div>
// ));