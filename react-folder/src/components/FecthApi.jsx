import React, { useEffect, useState } from 'react'


import './FecthApi.css';


function FecthApi() {
    let userdata =JSON.parse(localStorage.getItem('apidetails'));
    const [charinfo, setcharinfo] = useState("");
    const [name, setname] = useState("");
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then((info) => {
                info.json().then((char) => {
                    console.log(char);
                    if(userdata==null)
                        {
                            setcharinfo(char.results)
                    localStorage.setItem("apidetails", JSON.stringify(char.results))

                            
                        }
                        else{
                            setcharinfo(userdata);
                        }
                    
                })
            })


    },[]  );
    const search = () => {
        let searchdata = charinfo.filter((item) => item.name.first === name)
        setcharinfo(searchdata);
        console.log(searchdata);
        localStorage.setItem('apidetails', JSON.stringify(searchdata));
    }
    const deleteData = (object) => {
        let dataDeleted = charinfo.filter((item) => item.name.first !== object.name.first)
        setcharinfo(dataDeleted);
        localStorage.setItem('apidetails', JSON.stringify(dataDeleted));
    }
    const display = (object) => {
        let displaydata = charinfo.filter((item) => item.name.first === object.name.first)
        setcharinfo(displaydata);
       localStorage.setItem('apidetails', JSON.stringify(displaydata));
    }


    return (
        <div className='Content'>

            <div className="topitems">
                <input type="text" value={name} onChange={(e) => setname(e.target.value)} placeholder='charname' className='box' ></input>
                <button onClick={() => search()} className='btn'>SUBMIT</button>
               

            </div>
            {
                (charinfo.length > 0) && charinfo.map((object, index) => (
                    <div className='persondetails' key={index}>
                        <div className="displaydetails">
                            <div>
                                <img src={object.picture.large} />
                            </div>
                            <div className="container">
                                <h2>{object.name.first}</h2>
                                <h2>{object.name.last}</h2>
                                <p>{object.country}</p>
                                <p>{object.email}</p>
                                <button onClick={() => deleteData(object)} className='dte'>Delete</button>
                                <button onClick={() => display(object)} className='dsp'>Display</button>
                            </div>
                        </div>
                    </div>
                ))
            } 
        
        </div>
    )
}

export default FecthApi