import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
 const[username,setusername]=useState('');
 const[password,setpassword]=useState('');

  // const { username, password } = data;
  // const changeHandler = e => {
  //   setdata({ ...data, [e.target.name]: [e.target.value] })
  // }


  // const[errors,seterrors]=useState(
  //   {
  //     username:"",
  //     password:""
  //   })
    
    function App() {
      const [data, setData] = useState({
        username: "",
        password: ""
    
      })
      const { username, password } = data;
      const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    
      }
      const submitHandler = e => {
        e.preventDefault();
        // console.log(data);
        // axios.post("https://adminlogin-245bb-default-rtdb.firebaseio.com/rigistor.json", data)
        //   .then(() =>
        //     setData("")
    
        // )
        if (username === "Admin" && password === "hari123#") {
          alert("LOGIN SUCCESSFULL....")
    
    
        }
        else {
          document.getElementById("errNote").innerHTML = "Invailed username & password"
        }
    
      }

    
    }
    










// const usernamepattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 

//     function handlesubmit(){
//     if (username.trim()==="") {
//       seterrors(errors) ({...errors,username:"enter user name"})
      
//     }
   
      
//      else if (!usernamepattern.test(username)){
//       seterrors(errors) ({...errors,username:"enter value user name"})
//      }

//      else{
//       seterrors((errors)({...errors,username:""}))
//      }
      

//      if (password.trim()==="") {
//       seterrors(errors) ({...errors,password:"enter password"})
      
//     }
   
      
//      else if (password.trim().length<8){
//       seterrors(errors) ({...errors,password:"password is minimum 8characters"})
//      }

//      else{
//       seterrors((errors) ({...errors,password:""}))
//      }
    

//   }

  // const submitHandler = e => {
  //   e.preventDefault();
  //   console.log(data);
  // }

  return (
    <div class="containar">
      <div class='brand-logo'>
        <div id="brand-logo-img">
        <img src="./Bailey and co.jpg" alt=""/>
        </div>
        <h2>BaileyandCo.</h2>
      </div>


      <div class='line'>
        <hr />
      </div>

      <center className='text-center' > 
        <div>
          <h1 class="login-user-1">wellcome</h1>
          <p class="login-user-2">Please login to Admin Dashboard</p>
        </div>

        <form >
          <div>
            <input type="text" className='form' name="username" value={username} onChange={(e)=>{setusername(e.target.value)}}
              placeholder='username ' />
               <div id="errNote" className='errmsg'></div>
           {/* {errors.username&&<span className='errmsg'>{errors.username}</span>} */}
          </div>
          

          <div>
            <input type="password" className='form' name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}
              placeholder='password ' /><br/>
          
          </div>
          <div id="errNote" className='errmsg'></div>
          <br />

          <button type="submit" class='button' onClick={() => alert("successfull")}>Login</button>
          <br />


          <a href="https://accounts.google.com/v3/signin/challenge/pwd?TL=AJeL0C56P92ZeYOyF6bbW7I8usKeUXlgru-o1IR-GE2DtyKowHNLamdfAsAqznhB&amp;cid=1&amp;continue=https://myaccount.google.com/signinoptions/password?continue%3Dhttps://myaccount.google.com/security&amp;flowName=GlifWebSignIn&amp;hl=en_US&amp;ifkv=AYZoVhePK1dbWV-z1ig-ianKymfm1YFSMKTdaozUpeilvPtwTZf6trA-s0noJlzaF3cVn8HneWHZHg&amp;kdi=CAM&amp;rart=ANgoxceF9Fn-YayumsYofvTjQ2FTD9dtqiv-77zAsDJ1inlkbj7It_U4f393rrkUC14X-4nCTVSdXsJ3IEcmrx9HTxwjJ1j2Pg&amp;rpbg=1&amp;sarp=1&amp;scc=1&amp;service=accountsettings"
            class="link"> FORGOTTEN YOUR PASSWORD  ?
          </a>


        </form>
        </center>
    </div>


  );
}

export default App;
