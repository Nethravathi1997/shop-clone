import sidebar from "./sidebar.js";
  let side = document.getElementById("sidebar");
  side.innerHTML = sidebar();

  import navbar from "./navbar.js";
  let nav = document.getElementById("navbar");
  nav.innerHTML = navbar();

 import footer from "./footer.js";
  let foot = document.getElementById("footer");
  foot.innerHTML = footer();

  import index from "./index.js";
  let ind = document.getElementById("index");
  ind.innerHTML = index();

  function search(){
    let item = document.getElementById("items").value;
    window.location.replace(`/${item}.html`);
  }

  function openNav() {
    document.getElementById("mySidebar").style.display = "block";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }

  document.getElementById("sd").addEventListener("click", () => {
    openNav();
  });

  document.getElementById("clo").addEventListener("click", () => {
    closeNav();
  });

  document.getElementById("search").addEventListener("click", () => {
    search();
  });


  
  
  function autofill(){
    let da = document.getElementById("da").textContent;
    console.log(da);
    window.location.replace(`/${da}.html`);

  }

  document.getElementById("items").addEventListener("click", () => {
     document.getElementById("sugg").style.display = "block";
  });


