import { useState } from 'react';

import dollar from  "../assets/images/icon-dollar.svg"
import person from "../assets/images/icon-person.svg"


const Form = ({bill, setBill,tip , setTip, people, setPeople}) => {

    const handleSelectedTip = (e) => {
        setTip(+e.target.value);
    }

    return (
        <div className="form">
            <div className="label-gruop">
                <div className="label-wra">
                    <label  className="label" htmlFor="bill">Bill</label>
                </div>
                <div className="number-wrapper">
                       <input type="number" class="number-input" id="bill" onInput={(e) => setBill(+e. target. value)} value={bill}/>
                       <img src={dollar} aria-hidden="true" className="icon" />
                </div>
            </div>

            <div className="tip-section">
                <p className="label">Selected Tip %</p>
                <div className="tip-amount wrapper">
                    <div className="tip-amount">
                        <input type="radio" onInput={handleSelectedTip} id="input1" className="tip-input"  name="tip" value="5" />
                        <label className="tip-btn" htmlFor="inpunt1">5%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" onInput={handleSelectedTip}  id="input2" className="tip-input"  name="tip" value="10" />
                        <label className="tip-btn" htmlFor="input2">10%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" onInput={handleSelectedTip} id="input3" className="tip-input"  name="tip" value="15" />
                        <label className="tip-btn"  htmlFor="input3">15%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" onInput={handleSelectedTip} id="input4"  className="tip-input" name="tip" value="25" />
                        <label className="tip-btn"  htmlFor="input4">25%</label>
                    </div>
                    <div className="tip-amount">
                        <input type="radio" onInput={handleSelectedTip} id="input5"  className="tip-input"  name="tip" value="50" />
                        <label className="tip-btn"  htmlFor="input5">50%</label>
                    </div>
                    <div className="custom-wrapper">
                        <input type="number" onInput={handleSelectedTip} name="tip" className="number-input tip-custom " placeholder="custom" />
                        <label htmlFor="custom" className="tip-custom-label" >Custom</label>
                    </div>
                </div>    
            </div>
                
            <div className="label-gruop">
                <div className="label-wraper">
                    <label className="label" htmlFor="people">number of people</label>
                    <p className="error" > {
                        people == 0 ? "No puede ser cero" :  ""
                    } </p>
                </div>
                <div className="number-wrapper">
                    <input type="number" className={`number-input  ${people == 0 ? 'number-error' : ''}`} id="people" onInput={(e) => setPeople(+e.target.value)} value={people}/>
                    <img src={person} aria-hidden="true" className="icon" />
                </div>
            </div>
        </div>
    )
}

export default Form