import React,{useState}  from "react";
import style from './Calculator.module.css'

const Calculator=()=>{
   
    const[input,setInput]=useState("");
    const[result,setResult]=useState("");
    const oper=['*','+','-','/','.','%']
    const displayCalci=value=>{
        try{
        if((oper.includes(value) && input==='') || 
        (oper.includes(value) && oper.includes(input.slice(-1)))){
                  return;
        }
        setInput(input+value)
      

        if(!oper.includes(value)){
              setResult(eval(String(input)+String(value)).toString());
        }}
        catch{
            alert(Error("Octal Values are not Allowed, use Decimal values!"))
            window.location.reload()
        }
       
    }
    const calculate=()=>{
        setInput(eval(input).toString())
    }
    const clear=()=>{
        if(input==''){
            return;
        }
        const value=input.slice(0,-1);
        setInput(value);
    }
    const clearAll=()=>{
        setInput(input.replace(input,"0"));
        setResult(input.replace(input,"0"))
    }
    return(
    <div className={style.calculator}>
         
        <div className={style.display}>
           {result ? <span>{result}</span> : ''} {input|| '0'}
        </div>
        <div className={style.operators}>
        <button onClick={clear}>C</button>
         <button onClick={clearAll}>AC</button>
         <button onClick={()=>displayCalci('%')}>%</button>
         <button onClick={()=>displayCalci('/')}>/</button>
        </div>
        <div className={style.digits}>
         <button onClick={()=>displayCalci('1')}>1</button>
         <button onClick={()=>displayCalci('2')}>2</button>
         <button onClick={()=>displayCalci('3')}>3</button>
         <button style={{backgroundColor:'rgb(109, 34, 194)'}} onClick={()=>displayCalci('*')}>*</button>
         </div>
         <div className={style.digits}>
         <button onClick={()=>displayCalci('4')}>4</button>
         <button onClick={()=>displayCalci('5')}>5</button>
         <button onClick={()=>displayCalci('6')}>6</button>
         <button style={{backgroundColor:'rgb(109, 34, 194)'}} onClick={()=>displayCalci('+')}>+</button>
         </div>
         <div className={style.digits}>
         <button onClick={()=>displayCalci('7')}>7</button>
         <button onClick={()=>displayCalci('8')}>8</button>
         <button onClick={()=>displayCalci('9')}>9</button>
         <button style={{backgroundColor:'rgb(109, 34, 194)'}} onClick={()=>displayCalci('-')}>-</button>
         </div>
         <div className={style.digits}>
         <button onClick={()=>displayCalci('0')}>0</button>
         <button onClick={()=>displayCalci('.')}>.</button>
         <button style={{backgroundColor:'rgb(109, 34, 194)'}} onClick={calculate}>=</button>
        </div>

    </div>

    )

}
export default Calculator;