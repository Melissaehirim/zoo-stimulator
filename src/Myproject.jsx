import React from 'react'
import { useEffect, useState } from 'react'

function Myproject() {
        var [elephant1, setElephant1] = useState(100.00)
        var [elephant2, setElephant2] = useState(100.00)
        var [elephant3, setElephant3] = useState(100.00)
        var [elephant4, setElephant4] = useState(100.00)
        var [elephant5, setElephant5] = useState(100.00)
      
        var [elephantt, setElephantt] = useState("")
        var [elephantt1, setElephantt1] = useState("")
        var [elephantt2, setElephantt2] = useState("")
        var [elephantt3, setElephantt3] = useState("")
        var [elephantt4, setElephantt4] = useState("")
        var [elephantt5, setElephantt5] = useState("")
        var [elephantt6, setElephantt6] = useState("")
        var [elephantt7, setElephantt7] = useState("")
        var [elephantt8, setElephantt8] = useState("")
        var [elephantt9, setElephantt9] = useState("")
        var [elephantt10, setElephantt10] = useState("")
        var [elephantt11, setElephantt11] = useState("")
        var [elephantt12, setElephantt12] = useState("")
        var [elephantt13, setElephantt13] = useState("")
        var [elephantt14, setElephantt14] = useState("")
        var [elephantt15, setElephantt15] = useState("")
      
        var [blur, setBlur]= useState("none")
        var [blur1, setBlur1]= useState("none")
        var [blur2, setBlur2]= useState("none")
        var [blur3, setBlur3]= useState("none")
        var [blur4, setBlur4]= useState("none")
        var [blur5, setBlur5]= useState("none")
        var [blur6, setBlur6]= useState("none")
        var [blur7, setBlur7]= useState("none")
        var [blur8, setBlur8]= useState("none")
        var [blur9, setBlur9]= useState("none")
        var [blur10, setBlur10]= useState("none")
        var [blur11, setBlur11]= useState("none")
        var [blur12, setBlur12]= useState("none")
        var [blur13, setBlur13]= useState("none")
        var [blur14, setBlur14]= useState("none")
        var [blur15, setBlur15]= useState("none")
        // var[click,setClick] = useState("")
      
      
      
      
        var [elephant6, setElephant6] = useState(Math.floor(Math.random()*20))
        var [elephant7, setElephant7] = useState(Math.floor(Math.random()*20))
        var [elephant8, setElephant8] = useState(Math.floor(Math.random()*20))
        var [elephant9, setElephant9] = useState(Math.floor(Math.random()*20))
        var [elephant10, setElephant10] = useState(Math.floor(Math.random()*20))
      
      
        var [giraffe1,setGiraffe1] = useState(100.00)
        var [giraffe2,setGiraffe2] = useState(100.00)
        var [giraffe3,setGiraffe3] = useState(100.00)
        var [giraffe4,setGiraffe4] = useState(100.00)
        var [giraffe5,setGiraffe5] = useState(100.00)
        var [giraffe6,setGiraffe6] = useState(100.00)
      
      
        var [giraffe60,setGiraffe60] = useState(Math.floor(Math.random()*20))
        var [giraffe7,setGiraffe7] = useState(Math.floor(Math.random()*20))
        var [giraffe8,setGiraffe8] = useState(Math.floor(Math.random()*20))
        var [giraffe9,setGiraffe9] = useState(Math.floor(Math.random()*20))
        var [giraffe10,setGiraffe10] = useState(Math.floor(Math.random()*20))
        var [giraffe11,setGiraffe11] = useState(Math.floor(Math.random()*20))
      
      
        var[monkey1,setMonkey1]=useState(100.00)
        var[monkey2,setMonkey2]=useState(100.00)
        var[monkey3,setMonkey3]=useState(100.00)
        var[monkey4,setMonkey4]=useState(100.00)
        var[monkey5,setMonkey5]=useState(100.00)
      
      
        var[monkey6,setMonkey6]=useState(Math.floor(Math.random()*20))
        var[monkey7,setMonkey7]=useState(Math.floor(Math.random()*20))
        var[monkey8,setMonkey8]=useState(Math.floor(Math.random()*20))
        var[monkey9,setMonkey9]=useState(Math.floor(Math.random()*20))
        var[monkey10,setMonkey10]=useState(Math.floor(Math.random()*20))
        var[hour,setHour] = useState(0)
      
        var[Min,setMin] = useState(0)
        var[sec,setSec] = useState(0)
      var[monkeytype, setMonkeytype]= useState()
      var[giraffetype, setGiraffetype]= useState()
      var[elephanttype, setElephanyttype]= useState()
      
      
      function obi() {
       setElephanyttype(Math.floor(Math.random()*16)+10)
       setMonkeytype(Math.floor(Math.random()*16)+10)
       setGiraffetype(Math.floor(Math.random()*16)+10)
      
       setElephant1(elephant1 = elephant1+elephanttype)
       setElephant2(elephant2 = elephant2+elephanttype)
       setElephant3(elephant3 = elephant3+elephanttype)
       setElephant4(elephant4 = elephant4+elephanttype)
       setElephant5(elephant5 = elephant5+elephanttype)
      
       setGiraffe1(giraffe1= giraffe1+giraffetype)
       setGiraffe2(giraffe2= giraffe2+giraffetype)
       setGiraffe3(giraffe3= giraffe3+giraffetype)
       setGiraffe4(giraffe4= giraffe4+giraffetype)
       setGiraffe5(giraffe5= giraffe5+giraffetype)
       setGiraffe6(giraffe6= giraffe6+giraffetype)
      
       setMonkey1(monkey1 = monkey1+monkeytype)
       setMonkey2(monkey2 = monkey2+monkeytype)
       setMonkey3(monkey3 = monkey3+monkeytype)
       setMonkey4(monkey4 = monkey4+monkeytype)
       setMonkey5(monkey5 = monkey5+monkeytype)
      
      }
      
      
        useEffect(() => {
          var intervall = setInterval(() => {
      
            setElephant1(elephant1 = elephant1-elephant6)
            setElephant2(elephant2 = elephant2-elephant7)
            setElephant3(elephant3 = elephant3-elephant8)
            setElephant4(elephant4 = elephant4-elephant9)
            setElephant5(elephant5 = elephant5-elephant10)
       
            setGiraffe1(giraffe1= giraffe1-giraffe60)
            setGiraffe2(giraffe2= giraffe2-giraffe7)
            setGiraffe3(giraffe3= giraffe3-giraffe8)
            setGiraffe4(giraffe4= giraffe4-giraffe9)
            setGiraffe5(giraffe5= giraffe5-giraffe10)
            setGiraffe6(giraffe6= giraffe6-giraffe11)
       
            setMonkey1(monkey1 = monkey1-monkey6)
            setMonkey2(monkey2 = monkey2-monkey7)
            setMonkey3(monkey3 = monkey3-monkey8)
            setMonkey4(monkey4 = monkey4-monkey9)
            setMonkey5(monkey5 = monkey5-monkey10)
          },10000)
          
          return()=>clearTimeout(intervall);
        
        }, [])
      
      
        useEffect(() => {
         
            if (elephant1 < 70) {
                 var timer = setTimeout(() => {
                  setElephantt("dead")
                  setBlur("block")
                 }, 5000);
            }
             
      
            if (elephant1<1) {
              setElephant1(0)
            }
      
            if (elephant2<1) {
              setElephant2(0)
            }
      
            if (elephant3<1) {
              setElephant3(0)
            }
      
            if (elephant4<1) {
              setElephant4(0)
            }   
            
            if (elephant5<1) {
              setElephant5(0)
            }
            
            
            if (giraffe1<1) {
              setGiraffe1(0)
            }   
            
            
            if (giraffe2<1) {
              setGiraffe2(0)
            }  
            
            
            if (giraffe3<1) {
              setGiraffe3(0)
            }  
            
            
            if (giraffe4<1) {
              setGiraffe4(0)
            }   
            
            
            if (giraffe5<1) {
              setGiraffe5(0)
            } 
            
            if (giraffe6<1) {
              setGiraffe6(0)
            } 
            
            if (monkey1<1) {
              setMonkey1(0)
            } 
            
            if (monkey2<1) {
              setMonkey2(0)
            }
            
            if (monkey3<1) {
              setMonkey3(0)
            } 
            
            if (monkey4<1) {
              setMonkey4(0)
            }  
            
            if (monkey5<1) {
              setMonkey5(0)
            } 
          
      
            if (elephant2<70) {
              var timer1 = setTimeout(() => {
                setElephantt1("dead")
                setBlur1("block")
              }, 5000);
            } 
      
         if (elephant3<70) {
          var timer2 = setTimeout(() => {
            setElephantt2("dead")
            setBlur2("block")
          }, 5000);
         }
      
         if (elephant4<70) {
          var timer3 = setTimeout(() => {
            setElephantt3("dead")
            setBlur3("block")
          }, 5000);
         }
      
         if (elephant5<70) {
          var timer4 =setTimeout(() => {
            setElephantt4("dead")
            setBlur4("block")
          }, 5000);
         }
      
         if (monkey1<70) {
         var  timer5  = setTimeout(() => {
          setElephantt5("dead")
          setBlur5("block")
      
         }, 5000);
         }
      
         if (monkey2<70) {
          var timer6 = setTimeout(() => {
            setElephantt6("dead")
            setBlur6("block")
      
          }, 5000);
         }
      
         if (monkey3<70) {
          let timer7 = setTimeout(() => {
            setElephantt7("dead")
            setBlur7("block")
      
          }, 5000);
         }
      
         if (monkey4 < 70) {
          const timer8 = setTimeout(() => {
            setElephantt8("dead")
            setBlur8("block")
            
          }, 5000);
         }
      
      
         if (monkey5 < 70) {
          const timer9 = setTimeout(() => {
            setElephantt9("dead")
            setBlur9("block")
      
          }, 5000);
         }
      
         if (giraffe1 < 70) {
          let timer10 = setTimeout(() => {
            setElephantt10("dead")
            setBlur10("block")
      
          }, 5000);
         }
      
         if (giraffe2 < 70) {
          let timer11 = setTimeout(() => {
            setElephantt11("dead")
            setBlur11("block")
      
          }, 5000);
         }
           
      
      
         if (giraffe3 < 70) {
          const timer12 = setTimeout(() => {
            setElephantt12("dead")
            setBlur12("block")
      
          }, 5000);
         }
      
      
         if (giraffe3 < 70) {
          let timer13 = setTimeout(() => {
            setElephantt13("dead")
            setBlur13("block")
      
          }, 5000);
         }
      
      
         if (giraffe5 < 70) {
          let timer14 = setTimeout(() => {
            setElephantt14("dead")
            setBlur14("block")
      
          }, 5000);
         }
      
         if (giraffe6 < 70) {
          var timer16 =setTimeout(() => {
            setElephantt15("dead")
            setBlur15("block")
      
          }, 5000);
         }
        }, [elephant1,elephant2,elephant3,
          elephant4,elephant5,giraffe1,giraffe2,giraffe3,giraffe4,
          giraffe5,giraffe6,monkey1,monkey2,monkey3,monkey4,monkey5])
      
        useEffect(() => {
          var interval = setInterval(() => {
            setSec(sec = sec+1)
            if (sec === 60) {
              setMin(Min = Min+1)
              setSec(sec = 0)
            }else if (Min === 50) {
              setHour(hour = hour+1)
              setMin(Min=0)
            }
            
      
            
          },1000);
          return()=>clearInterval(interval)
        }, [])
      
           function mira() {
            setHour(hour=hour+1)
           }
      
           function icon() {
            
           }
        return (
    <div>
   
    <div>
            <div className=' h-28 hh grid grid-rows-2'>
              <div className=' text-whorange-700ite  text-3xl text-center pt-2'>Zoo simulator</div>
              <div className='orangebg grid grid-cols-2'>
                  <div className='btno '>
                      <div className='sidenav'>
                      <button className='btn1 bg h-10 w-28 rounded-xl mt-2 ml-1' onClick={mira}> Skip 1 hour</button>
                      <button  className='btn2 bg h-10 w-28 rounded-xl mt-2 ml-2' onClick={obi}>Feed the Zoo</button>
                      </div>
                    
                  </div>
                  <div className='time text-3xl font-bold text-end mr-12 pt-1'>
                    <h1>{hour<10?"0"+hour:hour}:{Min<10? "0"+Min:Min}:{sec<10? "0" + sec:sec}</h1>
                  </div>
              </div>
            </div>
          
       <div className='mom  text-3xl grid grid-rows-4 text-black '>

        <div className="firstline grid grid-cols-4">
                    <div className="q">
                      <div className='post1 text-center '>
                      <div className='ad absolute mt-1 text-center pt-20' style={{display:blur}}>{elephantt}</div>
                      </div>
                      <div className="bg inline-block rounded-[10px] w-[70%]">
                      <div className=' h-4 de rounded-[10px]'style={{width:elephant1+"%"}}> </div>
                      </div>
                      <h1 className=' inline-block  ml-4'>{elephant1}%</h1>
                      
                  </div>

            
              <div className="post22">
              <div className='post2 '>
              <div className='ad absolute text-center pt-20' style={{display:blur1}}>{elephantt1}</div>
              </div>
              <div className=' bg inline-block rounded-[10px] w-[70%]'>
                  <div className=' h-4 de rounded-[10px]'style={{width:elephant2+"%"}}></div>
              </div>
              <h1 className=' inline-block ml-4 '>{elephant2}%</h1>
              </div>


              <div className="post33">
              <div className='post3'>
              <div className='ad absolute mt-1 text-center pt-20' style={{display:blur2}}>{elephantt2}</div>
              </div>
              <div  className='bg inline-block rounded-[10px] w-[70%]'>
                <div  className=' h-4 de rounded-[10px]'style={{width:elephant3+"%"}}></div>
              </div>
              <h1 className=' inline-block ml-4'>{elephant3}%</h1>
              </div>


              <div className="post44 ">
              <div className='post4 text-center'>
              <div className='ad absolute mt-1 text-center pt-20' style={{display:blur3}}>{elephantt3}</div>
              </div>
              <div className=' bg inline-block rounded-[10px] w-[70%]'>
                <div className=' h-4 de rounded-[10px]'style={{width:elephant4+"%"}}></div>
              </div>
              <h1 className=' inline-block ml-4'>{elephant4}%</h1>
              </div>
        </div>
          


          <div className="secondline grid grid-cols-4">
  
                <div className="post55 ">
              <div className='post5 text-center'>
              < div className='ad absolute mt-1 text-center pt-20' style={{display:blur4}}>{elephantt4}</div>
              </div>
                <div className='bg  inline-block rounded-[10px] w-[70%]'>
                  <div  className=' h-4 de rounded-[10px]'style={{width:elephant5+"%"}}></div>
                </div>
                <h1 className=' inline-block ml-4'>{elephant5}%</h1>
              </div>


              <div className="post66 ">
              <div className='post6 text-center'>
              <div className='ad absolute mt-1 text-center pt-20' style={{display:blur5}}>{elephantt5}</div>
              </div>
                <div className=' bg inline-block rounded-[10px] w-[70%]'>
                  <div  className=' h-4 de rounded-[10px]'style={{width:monkey1+"%"}}></div>
                </div>
                <h1 className=' inline-block ml-4'>{monkey1}%</h1>
              </div>


              <div className="post77 ">
              <div className='post7 text-center'>
              <div className='ad absolute mt-1 text-center pt-20' style={{display:blur6}}>{elephantt6}</div>
              </div>
              <div className=' bg inline-block rounded-[10px] w-[70%]'>
                <div  className=' h-4 de rounded-[10px]'style={{width:monkey2+"%"}}></div>
              </div>
              <h1 className=' inline-block ml-4'>{monkey2}%</h1>
              </div>


              <div className="post88 ">
              <div className='post8 text-center'>
              <div className='ad absolute mt-1 text-center pt-20' style={{display:blur7}}>{elephantt7}</div>
              </div>
              <div className=' bg inline-block rounded-[10px] w-[70%]'>
                <div  className=' h-4 de rounded-[10px]'style={{width:monkey3+"%"}}></div>
              </div>
              <h1 className=' inline-block ml-4'>{monkey3}%</h1>
              </div>
          </div>


           <div className="thirdline grid grid-cols-4">
           <div className="post99  ">
        <div className='post9 text-center'>
        <div className='ad absolute mt-1 text-center pt-20' style={{display:blur8}}>{elephantt8}</div>
        </div>
        <div className=' bg inline-block rounded-[10px] w-[70%]'>
          <div  className=' h-4 de rounded-[10px]'style={{width:monkey4+"%"}}></div>
        </div>
        <h1 className=' inline-block ml-4'>{monkey4}%</h1>
        </div>


        <div className="post100  ">
        <div className='post10 text-center '>
        <div className='ad absolute mt-1 text-center pt-20' style={{display:blur9}}>{elephantt9}</div>
        </div>
        <div className='bg  inline-block rounded-[10px] w-[70%]'>
          <div  className=' h-4 de rounded-[10px]'style={{width:monkey5+"%"}}></div>
        </div>
        <h1 className=' inline-block ml-4'>{monkey5}%</h1>
        </div>


        <div className="post111  ">
        <div className='post11 text-center'>
        <div className='ad absolute mt-1 text-center pt-20' style={{display:blur10}}>{elephantt10}</div>
        </div>
        <div className='bg  inline-block rounded-[10px] w-[70%]'>
          <div  className=' h-4 de rounded-[10px]'style={{width:giraffe1+"%"}}></div>
        </div>
        <h1 className=' inline-block ml-4'>{giraffe1}%</h1>
        </div>


        <div className="post122  ">
        <div className='post12 text-center'>
        <div className='ad absolute mt-1 text-center pt-20' style={{display:blur11}}>{elephantt11}</div></div> 
        <div className='bg  inline-block rounded-[10px] w-[70%]'>
          <div  className=' h-4 de rounded-[10px]'style={{width:giraffe2+"%"}}></div>
        </div>
        <h1 className=' inline-block ml-4'>{giraffe2}%</h1>
        </div>

           </div>
      

      <div className="fourthline grid grid-cols-4">
      <div className="post133  ">
        <div className='post13 text-center '>
        <div className='ad absolute mt-1 text-center pt-20' style={{display:blur12}}>{elephantt12}</div>
        </div>
        <div className='bg  inline-block rounded-[10px] w-[70%]'>
          <div  className=' h-4 de rounded-[10px]'style={{width:giraffe3+"%"}}></div>
        </div>
        <h1 className=' inline-block ml-4'>{giraffe3}%</h1>
        </div>


        <div className="post144  ">
        <div className='post14 text-center '>
        <div className='ad absolute mt-1 text-center pt-20' style={{display:blur13}}>{elephantt13}</div>

        </div>
        <div className='bg inline-block rounded-[10px] w-[70%]'>
          <div  className=' h-4 de rounded-[10px]'style={{width:giraffe4+"%"}}></div>
        </div>
        <h1 className=' inline-block ml-4'>{giraffe4}%</h1>
        </div>


        <div className="post155  ">
          <div className='post15 text-center'>
          <div className='ad absolute mt-1' style={{display:blur14}}>{elephantt14}</div>
          </div>
            <div className=' bg inline-block rounded-[10px] w-[70%]'>
              <div className=' h-4 de rounded-[10px]'style={{width:giraffe5+"%"}}></div>
            </div>
            <h1 className=' inline-block ml-4'>{giraffe5}%</h1>
            </div>

              <div className="post166 ">
          <div className='post16 text-center'>
          <div className='ad absolute mt-1' style={{display:blur15}}>{elephantt15}</div>
          </div>
              <div className=' bg inline-block rounded-[10px] w-[70%]'>
                <div className=' h-4 de rounded-[10px]'style={{width:giraffe6+"%"}}></div>
              </div>
              <h1 className=' inline-block'>{giraffe6}%</h1>
        </div>
       </div>

     
     <div/>
      </div>


             
             
   
          
    </div>
    </div>
  )
}

export default Myproject
