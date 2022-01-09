const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-input");

inputBox.onkeyup = () =>{
    let suggBox = searchWrapper.querySelector(".autocom-input");
    suggBox.style.display = "block";
}
