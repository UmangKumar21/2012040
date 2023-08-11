import React, { useState } from 'react';

const TrainSched = () => {
  const [trains, setTrains] = useState([
    { id: 1, TrainNo: '2344', name: 'Chennai Exp', departure: '21:35 PM', arrival: '10:00 AM' },
    { id: 2, TrainNo: '2341', name: 'Hyderabad Exp', departure: '23:55 PM', arrival: '9:30 AM' },
    { id: 3, TrainNo: '2343', name: 'Delhi Door Hai Exp', departure: '09:45 AM', arrival: '11:30 AM' },
    { id: 4, TrainNo: '2344', name: 'Patna Exp', departure: '10:45 AM', arrival: '12:30 AM' },
    { id: 5, TrainNo: '2345', name: 'Satabthi Exp', departure: '11:45 AM', arival: '02:30 AM' },
    { id: 6, TrainNo: '2346', name: 'Vande Bharat Exp', departure: '08:00 AM', arrival: '10:00 AM' },
    { id: 7, TrainNo: '2347', name: 'Rapti Sagar Exp', departure: '07:45 AM', arrival: '23:30 PM' },
    { id: 8, TrainNo: '2348', name: 'Delhi Exp', departure: '09:00 AM', arrival: '11:35 AM' },
    { id: 9, TrainNo: '2349', name: 'Pune Exp', departure: '05:45 AM', arrival: '08:10 AM' },
    { id: 10, TrainNo: '2350', name: 'Mumbai Exp', departure: '02:22 AM', arrival: '08:04 AM' },

  ]);

  return (
    <div className='table'>
      <h2><b><u>Train Time Schedule</u></b></h2>
      <table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Departure</th>
            <th>Arrival</th>
          </tr>
        </thead>
        <tbody>
          {trains.map(train => (
            <tr key={train.id}>
              <td>{train.id}</td>
              <td>{train.name}</td>
              <td>{train.departure}</td>
              <td>{train.arrival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainSched;
