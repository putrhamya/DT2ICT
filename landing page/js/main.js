// === Resize navbar on Scroll ===
var navbar = document.querySelector(".navbar");

// when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

//Navbar Toggler
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector('.menu-btn');

if(navTogle) {
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// closing menu when navlick is clicked
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove(".active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

// Product Color
var pic = document.querySelector("#main-shoe");
var yellow = document.querySelector(".yellow");
var blue = document.querySelector(".blue");
var matcha = document.querySelector(".matcha");
var def = document.querySelector(".def");
var black = document.querySelector(".black");
var pink = document.querySelector(".pink");
const colors = document.querySelectorAll(".color");
//  store product info in object
var info = [
	{
		src: "images/products/kf94yellow.png"
	},
	{
		src: "images/products/kf94blue.png"
	},
	{
		src: "images/products/kf94matcha.png"
	},
	{
		src: "images/products/MASKER1.png"
	},
	{
		src: "images/products/kf94black.png"
	},
	{
		src: "images/products/kf94pink.png"
	}
]
// change color
yellow.addEventListener("click",function(){
	pic.src = info[0].src;
})

blue.addEventListener("click",function(){
	pic.src = info[1].src;
})

matcha.addEventListener("click",function(){
	pic.src = info[2].src;
})

def.addEventListener("click",function(){
	pic.src = info[3].src;
})

black.addEventListener("click",function(){
	pic.src = info[4].src;
})

pink.addEventListener("click",function(){
	pic.src = info[5].src;
})

//  active color
function color() {
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}

colors.forEach(c => c.addEventListener('click', color));