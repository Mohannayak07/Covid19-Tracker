import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function StateData() {
    const [data,setData]=useState([]);
    const countryData=async ()=>{
        const res=await axios.get('https://data.covid19india.org/data.json')
        console.log(res.data.statewise);
        setData(res.data.statewise)

    }
    useEffect(()=>{
        countryData();
    },[])
  return (
    <div>
        <h3 style={{textAlign:'center'}}>STATE WISE COVID-19 CASES</h3><br></br>
        <table className="table">
                    
                    <thead className="table-dark">
                    <tr>
                        <th>STATE</th>
                        <th>CONFIRMED</th>
                        <th>RECOVERED</th>
                        <th>DEATHS</th>
                        <th>ACTIVE</th>
                        <th>UPDATED</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((ele,index)=>{
                        return <tr key={index}>
                            <td>{ele.state}</td>
                            <td>{ele.confirmed}</td>
                            <td>{ele.recovered}</td>
                            <td>{ele.deaths}</td>
                            <td>{ele.active}</td>
                            <td>{ele.lastupdatedtime}</td>
                            
                        </tr>
                    })}
                    </tbody>
                </table>
    </div>
  )
}
