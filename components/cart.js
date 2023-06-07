let new_data = document.getElementById("cart");
    document.getElementById("close").addEventListener("click", () => {
    close();
  });

  function close(){
    let clo = document.getElementById("cart");
    clo.style.display = "none";
  }

  let cart_data = JSON.parse(localStorage.getItem("cart"));


  let data_div = document.getElementById("data");

var total = 0;
console.log(total);
   cart_data.forEach(function (product){
       
        let div = document.createElement("div");
   div.style.marginTop = "60px";
   div.style.boxShadow = "inset 0 0 5px grey";
   div.style.marginLeft = "10px";
   let J_name = document.createElement("h3");
   J_name.innerHTML =product.name;
   J_name.style.marginLeft = "220px";
  

   let J_price = document.createElement("div");
   J_price.innerHTML ="$" + product.price;
   J_price.style.marginLeft = "220px";

   let image = document.createElement("img");
   image.src = product.image;
   image.style.height = "200px";
   image.style.width = "200px";
   image.style.float = "left";
   let btn = document.createElement("button");
   btn.innerHTML = "Remove product";
   btn.style.margin = "10px";
   btn.style.backgroundColor = "rgb(65,68,103)"
   btn.style.color = "white";
   btn.style.border = "none";
   btn.style.height = "50px";
   btn.onclick =function (){
     remove(product);
   }
    

div.append(image, J_name, J_price,btn);

data_div.append(div);
total = total + Number(product.price);




   });
   let totall = document.getElementById("total");
    totall.innerHTML = `Total Price - $  ${total} `;

    
    

    
    
    totall.style.fontSize = "30px";
    totall.style.fontWeight = "500";
console.log(total);

function remove(p){
    let car = document.getElementById("cart");
    car.style.display = "block";
    let cart_data = JSON.parse(localStorage.getItem("cart"));
        cart_data.pop(p);
        localStorage.setItem("cart",JSON.stringify(cart_data));
        

}
