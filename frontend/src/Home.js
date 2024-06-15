import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Home = () => {
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    const fetchdata=async()=>{
      try {
        const response = await axios.get('http://localhost:8080/api/invoice');
        setInvoice(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
    
  }, []);
  console.log(invoice)
 
  return (
    <div>
    <h2>Invoice Information Table</h2>
    <table>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Due Date</th>
          <th>Recipient Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Send Reminder</th>
        </tr>
      </thead>
      <tbody>
        {invoice.map((invoice, index) => (
          <tr key={index}>
            <td>{invoice.amount}</td>
            <td>{invoice.dueDate}</td>
            <td>{invoice.recipientName}</td>
            <td>{invoice.address}</td>
            <td>{invoice.email}</td>
            <td><button>send reminder</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    
   
  )
}
