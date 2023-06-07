let date = document.getElementById("date");
date.innerHTML= "Get your Order By" + " <br><br>"+  new Date(0,0,0,0,0,0,Date.now() + 5 * 24 * 60 * 60 * 1000);
  //Registration form validation

  function savee(){
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

    let ad1 = document.getElementById("inp2").value;
    if(ad1.length == 0){
        document.getElementById("e2").innerHTML = "Address cannot be empty";
    returnval = false;
    }
    let city = document.getElementById("inp3").value;
    if(city.length == 0){
        document.getElementById("e3").innerHTML = "Please Enter City";
    returnval = false;
    }

    let state = document.getElementById("inp33").value;
    if(state.length == 0){
        document.getElementById("e4").innerHTML = "Please Enter state/Province";
    returnval = false;
    }

    let zip = document.getElementById("inp4").value;
    if(zip.length == 0){
        document.getElementById("e4").innerHTML = "Please Enter correct Zip";
    returnval = false;
    }

    let mobile = document.getElementById("inp44").value;
    if(mobile.length < 10){
        document.getElementById("e6").innerHTML = "Enter Valid Mobile Number";
    returnval = false;
    }

if(returnval === true){
    document.getElementById("final").style.display = "block";
    document.getElementById("form").style.display = "none";
   }
     
   return returnval;
}


function Register(e){
    e.preventDefault();

    let formdata = {
      fname: document.getElementById("inp1").value,
      lname: document.getElementById("inp11").value,
      ad1: document.getElementById("inp2").value,
      ad2: document.getElementById("inp22").value,
     city: document.getElementById("inp3").value,
      state: document.getElementById("inp33").value,
      zip:  document.getElementById("inp4").value,
      phone:document.getElementById("inp44").value,
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


