// // Folder Name-Ben.jsx
import React from "react";
// import Navigation from "../Components/Navigation";
import axios  from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Axis() {
    let [api, setApi] = useState([]);
    useEffect(() => {
        let api = axios.get("http://localhost:2090/Data")
        api.then(items => setApi(items.data)
        )

    }, [])

    return (
        <>
            {/* <Navigation /> */}

            <div id="headr">
                <h3 id="headr2">Explore all advertures</h3>
                <p id="parar">Here's a list of places that you can explore in city</p><br />
                <hr /><br />
                <p id="fil1">Filters: | <button id="btnfil">Filter by duration (Hours)</button>
                    <button id="btnclr">clear</button><span>  |</span> <input type="text" placeholder="Search" id="inp2" /> <button id="btnclr2">clear</button> |</p>
            </div><br /><br /><br /><br />

            <Link to="/" className="Linkr">
                <div id="SubBengCards">
                    <div id="SubBengCards-2">
                        {
                            api.map(x => {
                                return (
                                    <>


                                        <div>
                                        <div><button id="Sub-btns">{x.category}</button></div>
                                            <div id="cards-border">
                                               
                                                <img src={x.image} alt="" id="image-axious" />
                                                <div> <br />
                                                   <div id="Names-beng"> {x.name}</div>
                                                    <div id="pricetag"> {x.costPerHead}</div>
                                                </div> <div id="Names-beng">Duration {x.duration}</div> </div>


                                        </div>




                                    </>

                                )
                            })
                        }
                    </div>
                </div>
            </Link>


        </>
    )
}