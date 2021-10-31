import React,{useState}  from "react";
import style from './Calculator.module.css'

const Calculator=()=>{
   
    const[calc,setCalc]=useState("");
    const[result,setResult]=useState("");
    const oper=['*','+','-','/','.','%']
    const updateCalc=value=>{
        try{
        if((oper.includes(value) && calc==='') || 
        (oper.includes(value) && oper.includes(calc.slice(-1)))){
                  return;
        }
        setCalc(calc+value)
      

        if(!oper.includes(value)){
              setResult(eval(String(calc)+String(value)).toString());
        }}
        catch{
            alert(Error("Octal Values are not Allowed, use Decimal values!"))
            window.location.reload()
        }
       
    }
    const calculate=()=>{
        setCalc(eval(calc).toString())
    }
    const clear=()=>{
        if(calc==''){
            return;
        }
        const value=calc.slice(0,-1);
        setCalc(value);
    }
    const clearAll=()=>{
        setCalc(calc.replace(calc,"0"));
        setResult(calc.replace(calc,"0"))
    }
    return(
    <div className={style.calculator}>
        <div className={style.display}>
           {result ? <span>{result}</span> : ''} {calc || '0'}
        </div>
        <div className={style.operators}>
        <button onClick={clear}>C</button>
         <button onClick={clearAll}>AC</button>
         <button onClick={()=>updateCalc('%')}>%</button>
         <button onClick={()=>updateCalc('/')}>/</button>
        </div>
        <div className={style.digits}>
         <button onClick={()=>updateCalc('1')}>1</button>
         <button onClick={()=>updateCalc('2')}>2</button>
         <button onClick={()=>updateCalc('3')}>3</button>
         <button style={{backgroundColor:'rgb(109, 34, 194)'}} onClick={()=>updateCalc('*')}>*</button>
         </div>
         <div className={style.digits}>
         <button onClick={()=>updateCalc('4')}>4</button>
         <button onClick={()=>updateCalc('5')}>5</button>
         <button onClick={()=>updateCalc('6')}>6</button>
         <button style={{backgroundColor:'rgb(109, 34, 194)'}} onClick={()=>updateCalc('+')}>+</button>
         </div>
         <div className={style.digits}>
         <button onClick={()=>updateCalc('7')}>7</button>
         <button onClick={()=>updateCalc('8')}>8</button>
         <button onClick={()=>updateCalc('9')}>9</button>
         <button style={{backgroundColor:'rgb(109, 34, 194)'}} onClick={()=>updateCalc('-')}>-</button>
         </div>
         <div className={style.digits}>
         <button onClick={()=>updateCalc('0')}>0</button>
         <button onClick={()=>updateCalc('.')}>.</button>
         <button style={{backgroundColor:'rgb(109, 34, 194)'}} onClick={calculate}>=</button>
        </div>

    </div>

    )

}
export default Calculator;