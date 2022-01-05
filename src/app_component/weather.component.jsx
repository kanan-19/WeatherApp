import React from "react";
import "./weather.style.css"

const Weather = props => {
    return (

        <div className="container">
            <div className="cards">

                {/**city & country name */}
                <h1>
                    {props.city}
                </h1>

                {/** weather icon*/}
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>

                {/**temperature */}
                {props.temp_celsius ? (<h1 className="py-2"> {props.temp_celsius} &deg;</h1>)
                    : null
                }

                {/** show max and min temp */}
                {minmaxTemp(props.temp_min, props.temp_max)}

                <h4 className="py-3"> {props.description}</h4>
            </div>
        </div>
    );
}

/**function for min & max temp */
function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }
}



export default Weather;    