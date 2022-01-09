function sidebar(){

    return `

<div id="top">
    <h3 id="a">SHOP.COM now Accepts Cryptocurrency through BitPay! <a href="https://www.shop.com/bitPay-v.xhtml?tkr=210828100022">Learn More</a></h3>
<div id="maain">
    <div id="a1">
    <a href="index.html"><img id = "logo" src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg" alt="logo"></a>
        <div id="sd" style="display: flex;" >
         <i class="fa fa-bars" style="font-size:48px;color:rgb(32,35,64);margin-left: 16%;margin-top: 3%;cursor: pointer;"></i>
         <p class="menu" class="openbtn" >Categories</p>
        </div>
    </div>
    <div id="mid" style="display: flex;flex-direction: column;" >
    <div id="a2">
        <select name="" id="select">
            <option value="none">All Departments</option>
            <option value="">Auto</option>
            <option value="">Baby</option>
            <option value="">Beauty</option>
            <option value="">Books</option>
            <option value="">Business</option>
            <option value="">Cameras</option>
            <option value="">Clothes</option>
            <option value="">Collectibles</option>
            <option value="">Computers</option>
            <option value="">Crafts</option>
            <option value="">Electronics</option>
            <option value="">Food and Drink</option>
            <option value="">Garden</option>
            <option value="">Health & Nutrition</option>
            <option value="">Home Store</option>
            <option value="">Jewlery</option>
            <option value="">Movies</option>
            <option value="">Music</option>
            <option value="">Party Supplies</option>
            <option value="">Pet Supplies</option>
            <option value="">Posters</option>
            <option value="">Shoes</option>
            <option value="">Software</option>
            <option value="">Sports Fan Shop</option>
            <option value="">Sports and Fitness</option>
            <option value="">Tools</option>
            <option value="">Toys</option>
            <option value="">Travel</option>
            <option value="">Video Games</option>
        </select>
        <input id = "items" type="text" placeholder="Search SHOP.COM...">
        <div id="btn1"><button id="search" style="font-size:24px;"><i class="fa fa-search"></i></button></div>
        
    </div>
    <div id="cats">
        <a href="Exclusive_brands.html" class="top1">Exclusive Brands</a>
        <a href="stores.html" class="top1">Stores</a>
        <a href="deals.html" class="top1">Deals</a>
        <a href="shop_travel.html" class="top1">SHOP Travel</a>
        <a href="departments.html" class="top1">Departments</a>
        <a href="shopbuddy.html" class="top1">Shop Buddy</a>
        <a href="shop_local.html" class="top1">SHOP Local</a>


    </div>
</div>
<div id="a33">
    <div id="a3">
        <img src="https://img.shop.com/Image/header2013/shop-us-can-95072-holiday-gift-guide_300x501636140675215.jpg" alt="">
    </div>
    <div id="a31">
        <div id="a32">
            <i class="fa fa-user-circle-o" style="font-size:36px;"></i>
            <a id="a34" href="sign_in.html">Sign in</a>
        </div>
        <div id="a32">
            <i class="fa fa-refresh" style="font-size:36px;"></i>
            <a id="a34" href="orders.html">Orders</a>
        </div>
       
        <div id="a32">
        
            <i class='fa fa-shopping-cart' style='font-size:36px'></i>
            
            <a id="a34" id = "shop" onclick="car()">Cart</a>
        </div>
    </div>

</div>
</div>
</div>
<div id = "sugg" style="display: none;">
<a href="clothes.html"><p>clothes</p></a>
<a href="men_clothing.html"><p>Menswear</p></a>
<a href="women_clothing.html"><p>Women Wear</p></a>
<a href="men_acc.html"><p>Men's Accessories</p></a>
<a href="women_acc.html"><p>Women's Accessories</p></a>
<a href="shoes.html"><p>Shoes</p></a>
<a href="women_shoe.html"><p>Women's Shoes</p></a>
<a href="men_shoe.html"><p>Men's Shoes</p></a>
<a href="electronics.html"><p>Electronics</p></a>
<a href="home.html"><p>Home Materials</p></a>
<a href="beauty.html"><p>Cosmetics</p></a>

</div>
`
}

export default sidebar;

