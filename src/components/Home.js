import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Home() {
    const [data, setData] = useState([]);
    const countryData = async () => {
        const res = await axios.get('https://data.covid19india.org/data.json')
        console.log(res.data.statewise[0]);
        setData(res.data.statewise[0])

    }
    useEffect(() => {
        countryData();
    }, [])
    return (
        <div>
            {/* <div>
                <img src='../images/coronavirus.jpg' width='100%' height='450px'></img>
            </div> */}
            <div className="banner">
                <video className="vidb" width="700" height="660" loop autoPlay>
                <source src="../images/coronavirus.mp4" type="video/mp4" />
                    <source src="../images/coronavirus.ogg" type="video/ogg" />
                </video>
                {/* <img className="imgw" src='../images/woman.png' width='500' height='500'></img> */}
                <div>
                    <h2 id="h2b">Let's Stay Safe & Fight Together <br></br>Against <span style={{color:'#ff3700'}}>Corona Virus</span><img src="../images/covid.png" alt="covid" width="70px"></img></h2>
                </div>
            </div><br></br>

            <h2 className="cov" style={{ color: '#ff3700' }}><i className="fa-solid fa-virus-covid"></i>Covid-19 Tracker</h2>
            <div className="cardcls">
                <div id="card1" className="card text-bg-primary mb-3">
                    <div className="card-header">COUNTRY</div>
                    <div className="card-body">
                        <h5 className="card-title"><img src='../images/india.png' alt="india" style={{ width: '25px' }}></img>&nbsp;INDIA</h5>
                        {/* <h5 className="card-text">INDIA</h5> */}
                    </div>
                </div>
                <div id="card1" className="card text-bg-warning mb-3">
                    <div className="card-header"><i className="fa-solid fa-head-side-mask"></i>CONFIRMED</div>
                    <div className="card-body">
                        <h5 className="card-text">{data.confirmed}</h5>
                    </div>
                </div>
                <div id="card1" className="card text-bg-success mb-3">
                    <div className="card-header"><i className="fa-solid fa-heart-circle-check"></i>RECOVERED</div>
                    <div className="card-body">
                        <h5 className="card-text">{data.recovered}</h5>
                    </div>
                </div>
                <div id="card1" className="card text-bg-info mb-3">
                    <div className="card-header">ACTIVE</div>
                    <div className="card-body">
                        <h5 className="card-text">{data.active}</h5>
                    </div>
                </div>
                <div id="card1" className="card text-bg-danger mb-3">
                    <div className="card-header">DEATHS</div>
                    <div className="card-body">
                        <h5 className="card-text">{data.deaths}</h5>
                    </div>
                </div>
                <div id="card1" className="card text-bg-secondary mb-3">
                    <div className="card-header">LAST UPDATED</div>
                    <div className="card-body">
                        <h5 className="card-text">{data.lastupdatedtime}</h5>
                    </div>
                </div>

            </div><br></br>
            <h2 id="symp"><img src="../images/covid.png" alt="covid" width="60px"></img>COVID-19 SYMPTOMS</h2>
            <div className='symptoms'>
                   
                    <div>
                        <img src='../images/fever.png' width='200px' alt="fever"></img>
                        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FEVER</h5>
                    </div>
                    <div>
                        <img src='../images/cough.png' width='200px' alt="cough"></img>
                        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COUGH</h5>
                    </div>
                    <div>
                        <img src='../images/cold.png' width='200px' alt="cold"></img>
                        <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COLD</h5>
                    </div>
                    <div>
                        <img src='../images/running-nose.png' width='200px' alt="running-nose"></img>
                        <h5>&nbsp;&nbsp;&nbsp;&nbsp;RUNNING NOSE</h5>
                    </div>
                    <div>
                        <img src='../images/tiredness.png' width='200px' alt="tiredness"></img>
                        <h5>&nbsp;&nbsp;&nbsp;&nbsp;TIREDNESS</h5>
                    </div>
            </div><br>
            </br>
            <h2 className='h2p'>Prevention Against Corona Virus</h2>
            <div className='preventions'>
                <div>
                    <img src='../images/enter-with-mask.png' alt="mask" width='200px'></img>
                </div>
                <div>
                    <img src='../images/use-sanitizer.png' alt="sanitize" width='200px'></img>
                </div>
                <div>
                    <img src='../images/cover-your-face.png' alt="sanitize" width='200px'></img>
                </div>
                <div>
                    <img src='../images/wash-hands.png' alt="sanitize" width='200px'></img>
                </div>

               
            </div><br></br>
            <div>
            <video width="700" height="600" loop autoPlay>
                <source src="../images/docter.mp4" type="video/mp4" />
                    <source src="../images/docter.ogg" type="video/ogg" />
                </video>
            </div>
        </div>
    )
}

