function proceed(){
    returnval = true;
    let email = document.getElementById("inp7").value;
if(email.length == 0){
    document.getElementById("err").innerHTML = "Enter Valid Email Address";
    returnval = false;
}
    let pswd = document.getElementById("inp8").value;
    if(pswd.length == 0){
        document.getElementById("err1").innerHTML = "Invalid Credentials";
    returnval = false;
    }

    let check = document.getElementById("che").value;
    if(check.checked == false){
        document.getElementById("err2").innerHTML = "Confirm You are not a Robot";
    returnval = false;
    }

if(returnval === true){
    window.location.replace("index.html")
   }
     
   return returnval;
}

function regis(){
    document.getElementById("Login").style.display = "none";
    document.getElementById("right").style.display = "none";
    document.getElementById("Register").style.display = "block";
}

document.getElementById("regi").addEventListener("click", () => {
    regis();
  });





function Register(e){
    e.preventDefault();

    let formdata = {
      fname: document.getElementById("inp1").value,
      lname: document.getElementById("inp11").value,
      email: document.getElementById("inp2").value,
      password: document.getElementById("inp3").value,
      cpassword: document.getElementById("inp33").value,
      mnumber:  document.getElementById("inp4").value,
    };
    
    formdata = JSON.stringify(formdata);//step 0
    
    //server needs data. URL (API)

    //https://masai-api-mocker.herokuapp.com/auth/register

    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{

      method:"POST",
      body: formdata,

      headers:{
         "Content-Type":"application/json",
      },
    })
    .then((res) =>{
      return res.json();
    })
    .then((res) =>{
      console.log("res:",res);
      if(res.error == true){
        alert("Registration failed, user already exists");
      }else{
        alert("Registration Successfull")
      }
    })
    .catch((err)=>{
      console.log("err:",err);
    });
  }

  function Login(e){
    e.preventDefault();

    let logindata = {
      username: document.getElementById("inp7").value,
      password: document.getElementById("inp8").value,
    };
    
    fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
      method: "POST",
      body: JSON.stringify(logindata),

      headers:{
         "Content-Type":"application/json",
      },
    })
    .then((res) =>{
      return res.json();
    })
    .then((res) =>{
      let token = res.token;
      let username = logindata.username;
      
      getMyProfile(username, token)
   })
    .catch((err)=>{
      console.log("err:",err);
    });
  }

  function getMyProfile(u, t){
   
    fetch(`https://masai-api-mocker.herokuapp.com/user/${u}`,{
      headers : {
        'Authorization': `Bearer ${t}`,
      },
    })
    .then((res) =>{
      return res.json();
    })
    .then((res) =>{
      if(res.message == "Invalid token for user"){
        alert("Invalid Credentials");
      }else{
        console.log("res:",res);
        alert("Login Successfull")
      }
      
    })
    .catch((err)=>{
      console.log("err:",err);
    });
  }






  //Registration form validation

  function regi(){
    returnval = true;
    let fname = document.getElementById("inp1").value;
if(fname.length == 0 ||fname.length < 2){
    document.getElementById("e").innerHTML = "Firstname Should have Min 3 letters";
    returnval = false;
}
    let lname = document.getElementById("inp11").value;
    if(lname.length == 0){
        document.getElementById("e1").innerHTML = "Lastname Cannot be empty";
    returnval = false;
    }

    let email = document.getElementById("inp2").value;
    if(email.length == 0){
        document.getElementById("e2").innerHTML = "Enter Valid Email";
    returnval = false;
    }
    let pswd = document.getElementById("inp3").value;
    let pswd1 = document.getElementById("inp33").value;
    if(pswd.length == 0 ||pswd1.length == 0){
        document.getElementById("e3").innerHTML = "Password cannot be empty";
    returnval = false;
    }else if(pswd != pswd1){
        document.getElementById("e33").innerHTML = "Passwords Does not Match";
    returnval = false;
    }

    let mobile = document.getElementById("inp4").value;
    if(mobile.length < 10){
        document.getElementById("e4").innerHTML = "Enter Valid Mobile Number";
    returnval = false;
    }

if(returnval === true){
    document.getElementById("Login").style.display = "block";
    document.getElementById("right").style.display = "block";
    document.getElementById("Register").style.display = "none";
   }
     
   return returnval;
}

