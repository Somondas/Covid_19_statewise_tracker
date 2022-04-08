import react from "react";
import "./statewise.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useState } from "react";
const Statewise = () => {
  const [data, setData] = useState();
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    
    setData(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluid my-5">
        <div className="main-heading ">
          <center>
            <h1 className="mb-5 text-center">India COVID-19 Dashboard</h1>
          </center>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered </th>
              <th>Death</th>
              <th>Active</th>
              <th>Updated</th>
            </thead>
            <tbody>
              {data.map((currentData, idx) => {
                return (
                  <tr key={idx}>
                    <td>{currentData.state}</td>
                    <td>{currentData.confirmed}</td>
                    <td>{currentData.recovered}</td>
                    <td>{currentData.deaths}</td>
                    <td>{currentData.active}</td>
                    <td>{currentData.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Statewise;
