import { TextField,Stack,Button } from '@mui/material';
import './App.css';
import { useState } from 'react';
function App() {
  const[interest,setInterest] = useState(0)
  const[principle,setPrinciple] = useState(0)
  const[rate,setRate] = useState(0)
  const[year,setYear] = useState(0)
  const[validPrinciple,setvalidPrinciple] = useState(true)
  const[validRate,setvalidRate]=useState(true)
  const[validYear,setvalidYear]=useState(true)

 const handleCalculate = (e)=>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert("Please fill the form completely")
  }
  else{
    setInterest(Math.floor(principle*rate/100*year))
  }
 }

 const validateUserInput = (e)=>{
  // {key}=object
    const {name,value}= e.target
    if(!!value.match(/^[0-9]+$/)){
     
      // valid expression
      if(name==="principle"){
        setPrinciple(value)
        setvalidPrinciple(true)
      }
      else if(name==="rate"){
         setRate(value)
         setvalidRate(true)
      }
      else if(name==="year"){
         setYear(value)
         setvalidYear(true)
      }
    }
    else{
      // invalid expression
      if(name==="principle"){
        setPrinciple(value)
        setvalidPrinciple(false)
      }
      else if(name==="rate"){
        setRate(value)
        setvalidRate(false)
      }
      else if(name==="year"){
        setYear(value)
        setvalidYear(false)
     }

    }

   
 }
const handleReset = ()=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
}
  return (
   <div style={{height:'100vh'}} className='d-flex justify-content-center w-100 align-items-center bg-dark'>
        <div style={{width:'600px'}} className='bg-light p-5 rounded'>
          <h1>Simple Interest Calculator</h1>
            <p>Calculate your simple interest easily</p>
            <div style={{height:'150px'}} className="interest-card d-flex justify-content-center w-100 align-items-center bg-warning rounded shadow flex-column text-light mt-5">
              <h1>₹{''}
              {interest}</h1>
              <p>Total Simple Interest</p>
            </div>

             <form onSubmit={handleCalculate} className="mt-5">
              <div className='mb-3'>
              <TextField className='w-100' id="outlined-basic1" label="₹ Principle Amount" name='principle' variant="outlined"  value={principle || ""} onChange={(e)=>validateUserInput(e)}/>
              </div>
            
            {
              !validPrinciple &&

              <div className='text-danger mb-3 fw-bolder'>
                 *Invalid amount
              </div>
            }  

              <div className='mb-3 '>
              <TextField className='w-100' id="outlined-basic2" label="Rate of Interest(p.a)%" variant="outlined" name="rate"  value={rate || ""} onChange={(e)=>validateUserInput(e)} />
              </div>

              {
              !validRate &&

              <div className='text-danger mb-3 fw-bolder'>
                 *Invalid amount
              </div>
            }  

              <div className='mb-3'>
              <TextField className='w-100' id="outlined-basic3" label="Time Period(Yr)" variant="outlined" name='year'  value={year || ""}onChange={(e)=>validateUserInput(e)} />
              </div>
              
              {
              !validYear &&

              <div className='text-danger mb-3 fw-bolder'>
                 *Invalid amount
              </div>
            }  

              <Stack direction="row" spacing={2}>
              <Button type='submit' style={{height:'70px', width:'250px'}} variant="contained" disabled={validPrinciple && validRate && validYear ?false:true}>CALCULATE</Button>

              <Button style={{height:'70px', width:'250px',color:'black'}} variant="outlined" className='text-dark' onClick={handleReset}>RESET</Button>
             </Stack>
             </form>

          </div>   
   </div>
  );
}

export default App;
