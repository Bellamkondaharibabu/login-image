import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

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
    console.log(data);
    axios.post("https://image-login-83c78-default-rtdb.firebaseio.com/register.json", data)
      .then(() => setData(data)

      )
    if (username === "Admin" && password === "hari123#") {
      alert("LOGIN SUCCESSFULL....")


    }
    else {
      document.getElementById("errNote").innerHTML = "INVALID USERNAME & PASSWORD"
    }

  }
  return (
    <div className="containar">
      <div className='brand-logo'>
        <div className="brand-logo-img">
          <img src='c:\Users\B HARIBABU\Downloads\Bailey and co.jpg' alt='' />
        </div>
        <h2>BaileyandCo.</h2>
      </div>


      <div className='line'>
        <hr />
      </div>

      <center className='text-center' >
        <div>
          <h1 className="login-user-1">wellcome</h1>
          <p className="login-user-2">Please login to Admin Dashboard</p>
        </div>

        <form autoComplete='off' onSubmit={submitHandler}>
          <div>
            <input type="text" className='form' name="username" onChange={changeHandler} placeholder='USERNAME ' />
            <div id="errNote" className='errmsg'></div>
            {/* {errors.username&&<span className='errmsg'>{errors.username}</span>} */}
          </div>


          <div>
            <input type="password" className='form' name="password" onChange={changeHandler} placeholder='PASSWORD' /><br />

          </div>
          <div id="errNote" className='errmsg'></div>
          <br />

          <button type="submit" className='button'>Login</button>
          <br />


          <a href="https://accounts.google.com/v3/signin/challenge/pwd?TL=AJeL0C56P92ZeYOyF6bbW7I8usKeUXlgru-o1IR-GE2DtyKowHNLamdfAsAqznhB&amp;cid=1&amp;continue=https://myaccount.google.com/signinoptions/password?continue%3Dhttps://myaccount.google.com/security&amp;flowName=GlifWebSignIn&amp;hl=en_US&amp;ifkv=AYZoVhePK1dbWV-z1ig-ianKymfm1YFSMKTdaozUpeilvPtwTZf6trA-s0noJlzaF3cVn8HneWHZHg&amp;kdi=CAM&amp;rart=ANgoxceF9Fn-YayumsYofvTjQ2FTD9dtqiv-77zAsDJ1inlkbj7It_U4f393rrkUC14X-4nCTVSdXsJ3IEcmrx9HTxwjJ1j2Pg&amp;rpbg=1&amp;sarp=1&amp;scc=1&amp;service=accountsettings"
            className="link"> FORGOTTEN YOUR PASSWORD  ?
          </a>


        </form>
      </center>
    </div>


  );
}

export default App;
