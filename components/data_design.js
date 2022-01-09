let MyItems = localStorage.getItem("MyItems");

    MyItems = JSON.parse(MyItems);

    function showproducts(){
        let data_div = document.getElementById("women");

        MyItems.forEach(function(product){
            let div = document.createElement("div");
            div.style.boxShadow = "inset 0 0 5px grey"

            let J_name = document.createElement("h3");
            J_name.innerHTML = product.name;
            J_name.style.marginLeft = "4%";

            let logo = document.createElement("p");
            logo.innerHTML = product.logo;
            logo.style.fontSize = "18px";

            let J_price = document.createElement("h2");
            J_price.innerHTML = "$" + product.price;

            let image = document.createElement("img");
            image.style.width = "80%";
            image.style.marginLeft = "10%";
            image.style.marginTop = "1%";
            image.src = product.image;

            let margin = document.createElement("p");
            margin.innerHTML = product.mar;
            margin.style.fontSize = "15px";

            let btn = document.createElement("button");
            btn.innerHTML = "Add to cart";
            btn.style.backgroundColor = "rgb(65,68,103)";
            btn.style.color = "white";
            btn.style.width = "98%";
            btn.style.marginLeft = "1%"
            btn.style.height  = "1.5cm";
            btn.style.fontSize = "20px";

            btn.onclick = function(){
                addtoCart(product);
            }
            
            
            div.append(image,J_name,logo,J_price,margin,btn);
            data_div.append(div);
        });
    }
    showproducts();

    if(localStorage.getItem("cart")==null){
        localStorage.setItem("cart",JSON.stringify([]));
    };

    
    function addtoCart(p){
      let car = document.getElementById("cart").style.display = "block";
      window.location.reload();
        let cart_data = JSON.parse(localStorage.getItem("cart"));
        cart_data.push(p);
        localStorage.setItem("cart",JSON.stringify(cart_data))
    }

    let d = cart_data.length;
    console.log(Number(d));

    localStorage.setItem("count",JSON.stringify(d));


    function car(){
        let data = document.getElementById("cart");
        data.style.display = "block";
      }
      
      document.getElementById("shop").addEventListener("click", () => {
        car();
      });
