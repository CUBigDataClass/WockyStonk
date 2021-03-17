import React from 'react';
import '../styles/dashboardStyles/buttonsStyle.css'

function Buttons (){
    return(
        <div className="selectors">
            <section className="buttons">
                <label class="timeFrame">
                    Daily
                    <input type="radio"  name="radio" id="daily"/>
                    <span className="checkmark"></span>
                </label>
                <label className="timeFrame">
                    Weekly
                    <input type="radio" name="radio" id="weekly"/>
                    <span className="checkmark"></span>
                </label>
                <label className="timeFrame">
                    Monthly
                    <input type="radio" name="radio" id="weekly"/>
                    <span className="checkmark"></span>
                </label>
                <label className="timeFrame">
                    Quarterly
                    <input type="radio" name="radio" id ="quarterly"/>
                    <span className="checkmark"></span>
                </label>
                <label className="timeFrame">
                    Yearly
                    <input type="radio" name="radio" id="yearly"/>
                    <span className="checkmark"></span>
                </label>
            </section>
        </div>
    )
}

export default Buttons;