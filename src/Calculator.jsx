import React, {useState,useRef} from "react";
import './Calculator.css'


function Calculator() {

    const [display, setDisplay] = useState(0);
    
    function clearDisplay() {
        setDisplay(0);
    };

    function operatorHandler() {
            setDisplay(-display);
    };

    function addToDisplay(e) {
        const input = e.target.value;
        if(display==0 && input!="."  && input!="/"  && input!="*"  && input!="+"  && input!="-"){
            setDisplay(input);
        }else{
            setDisplay(display + input);
        }
    };

    function percentage(e) {
        setDisplay(display/100);
    };

    function calculate(){
        try {
            setDisplay(eval(display));
        } catch (error) {
            setDisplay("Error")
        }
    }
    
    return(
        <div id="calculator">
            <input id="display" value={display} readOnly></input>
            <div id="keys">
                <button onClick={clearDisplay} value={'C'} className="light-gray">C</button>
                <button onClick={operatorHandler} className="light-gray">+/-</button>
                <button onClick={percentage} className="light-gray">%</button>
                <button onClick={addToDisplay} value={'/'} className="orange">÷</button>
                <button onClick={addToDisplay} value={'7'}>7</button>
                <button onClick={addToDisplay} value={'8'}>8</button>
                <button onClick={addToDisplay} value={'9'}>9</button>
                <button onClick={addToDisplay} value={'*'} className="orange">×</button>
                <button onClick={addToDisplay} value={'4'}>4</button>
                <button onClick={addToDisplay} value={'5'}>5</button>
                <button onClick={addToDisplay} value={'6'}>6</button>
                <button onClick={addToDisplay} value={'-'} className="orange">-</button>
                <button onClick={addToDisplay} value={'1'}>1</button>
                <button onClick={addToDisplay} value={'2'}>2</button>
                <button onClick={addToDisplay} value={'3'}>3</button>
                <button onClick={addToDisplay} value={'+'} className="orange">+</button>
            </div>
            <div id="keys-after-zero">
                <button onClick={addToDisplay} value={'0'} id="zero-button">0</button>
                <button onClick={addToDisplay} value={'.'}>.</button>
                <button onClick={calculate} className="orange">=</button>
            </div>
        </div>
    );
}
export default Calculator