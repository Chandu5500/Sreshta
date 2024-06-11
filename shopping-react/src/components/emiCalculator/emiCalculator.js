import { useState } from "react"

export function EmiCalculator(){
    const [amount, setAmount] = useState(0);
    const [years, setYears] = useState(0);
    const [rate, setRate] = useState(0);
    const [emi, setEmi] = useState(0);

    function AmountChange(e){
        setAmount(e.target.value);
    }
    function YearChange(e){
        setYears(e.target.value);
    }
    function RateChange(e){
        setRate(e.target.value);
    }
    function CalculateClick(){
        var principal = amount;
        var r = rate/(12*100);
        var n = years*12;
        var emi = (principal * r * Math.pow(r+1, n))/(Math.pow(1+r,n)-1);
        setEmi(emi);
    }

    return(
        <div className="container-fluid">
            <h2>Personal EMI Calculator</h2>
            <div className="row mt-4 border border-dark border-2 p-4 m-3">
                <div className="col">
                    Amount you need &#8377; <input type="text" value={amount}/>
                </div>
                <div className="col">
                    for <input type="text" value={years} size='4'/> Years 
                </div>
                <div className="col">
                    Interst Rate <input type="text" value={rate} size='4'/> %
                </div>
            </div>
            <div className="row mt-4 border border-dark border-2 p-4 m-3">
                <div className="col">
                    &#8377; 50,000 <input type="range" onChange={AmountChange} min="50000" max="1000000"/> &#8377; 10,00,000
                </div>
                <div className="col">
                    1 <input type="range" onChange={YearChange} min="1" max="5" /> 5
                </div>
                <div className="col">
                    10.25% <input type="range" onChange={RateChange} min="10.25" max="18.25"  step="0.1"/> 18.25%
                </div>
            </div>
            <div className="mt-3">
                <div className="row">
                    <div className="col text-center">
                        <button onClick={CalculateClick} className="btn btn-primary">Calculate</button>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <h3 className="text-center">Your monthly installment is &#8377; {Math.round(emi)} for Amount &#8377;{amount} with Rate {rate}%</h3>
            </div>
        </div>
    )
}