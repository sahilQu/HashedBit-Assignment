
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [datas, setDatas] = useState([]);

  async function getDatas() {

    await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data").then(res => res.json()).then(res=> setDatas(res));

  }

  useEffect(() => {
    getDatas();
  }, []);
  
  console.log("datas:", datas);
  


  return (
    <>
       <div className="container">
       <h1>IPL Season 2022 Points</h1>
        <table className="points-table" cellPadding={6} cellSpacing={1}>
          <thead></thead>
          <tbody>

            <tr>
              <th>No</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>NRR</th>
              <th>Points</th>
            </tr>
      
            {
              datas.map(data=>(
                    <tr>
                      <td>{data.No}</td>
                      <td>{data.Team}</td>
                      <td>{data.Matches}</td>
                      <td>{data.Won}</td>
                      <td>{data.Lost}</td>
                      <td>{data.Tied}</td>
                      <td>{data.NRR}</td>
                      <td>{data.Points}</td>
                    </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
