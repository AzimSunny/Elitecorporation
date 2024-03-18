$('.banner_slider').slick({
     arrows:false,
	 autoplay:true,
     
})


var navLinks = document.getElementById('navLinks')

	function showMenu() {
		navLinks.style.left = '0%',
          navLinks.style.boxShadow='0px 1px 20px rgba(0,0,0,0.4)'
	}

	function hideMenu() {
		navLinks.style.left = '-90%',
          navLinks.style.boxShadow='0px 1px 20px rgba(0,0,0,0.0)'

	}


	// =========================================
	// ================
let numb = document.forms['myForm']['num']
function valid(){
	if(numb.value == ''){
		alert('Number field cannot be empty')
		return false;
	}
	 // ==============  1nd =================

	 else if(numb.value == "4S930a7m" || numb.value == "4S930b7m" || numb.value == "4S930c7m" || numb.value == "4S930d7m" || numb.value == "4S930e7m" || numb.value == "4S930f7m" || numb.value == "4S930g7m" || numb.value == "4S930h7m" || numb.value == "4S930i7m" || numb.value == "4S930j7m" || numb.value == "4S930k7m" || numb.value == "4S930l7m" || numb.value == "4S930m7m" || numb.value == "4S930n7m" || numb.value == "4S930o7m" || numb.value == "4S930p7m" || numb.value == "4S930q7m" || numb.value == "4S930r7m" || numb.value == "4S930s7m" || numb.value == "4S930t7m" || numb.value == "4S930u7m" || numb.value == "4S930v7m" || numb.value == "4S930w7m" || numb.value == "4S930x7m" || numb.value == "4S930y7m" || numb.value == "4S930z7m" || numb.value == "7A930z7m" || numb.value == "7B930z7m" || numb.value == "7C930z7m" || numb.value == "7D930z7m" || numb.value == "7E930z7m"|| numb.value == "7F930z7m" || numb.value == "7G930z7m" || numb.value == "7H930z7m" || numb.value == "7I930z7m"|| numb.value == "7J930z7m" || numb.value == "7K930z7m" || numb.value == "7L930z7m" || numb.value == "7M930z7m" || numb.value == "7N930z7m" || numb.value == "7O930z7m" || numb.value == "7P930z7m" || numb.value == "7Q930z7m" || numb.value == "7R930z7m"|| numb.value == "7S930z7m"|| numb.value == "7T930z7m" || numb.value == "7U930z7m" || numb.value == "7V930z7m" || numb.value == "7W930z7m" || numb.value == "7X930z7m" || numb.value == "7Y930z7m" || numb.value == "7Z930z7m"){
		document.getElementById('demo').innerHTML = 'আপনার পণ্য টি অরিজিনাল'+"<img src='./img/verify.png'>";
		 
		return false
	}

	// ==============  2nd =================

	else if(numb.value == "1A930a7m" || numb.value == "2B930b7m" || numb.value == "3C930c7m" || numb.value == "4D930d7m" || numb.value == "5E930e7m" || numb.value == "6S930f7m" || numb.value == "7S930g7m" || numb.value == "8S930h7m" || numb.value == "9S930i7m" || numb.value == "0S930j7m" || numb.value == "AQ930k7m" || numb.value == "XS932l7m" || numb.value == "12930m7m" || numb.value == "67930n7m" || numb.value == "Xx930o7m" || numb.value == "SS930q7m" || numb.value == "XS930X7m" || numb.value == "5S930r7m" || numb.value == "ZZ930s7m" || numb.value == "4S937t75" || numb.value == "4S930IUI" || numb.value == "4S930X7X" || numb.value == "4S930016" || numb.value == "5SJ30x7m" || numb.value == "1S630y7m" || numb.value == "42932z7m" || numb.value == "7A930zQm" || numb.value == "73930x7m" || numb.value == "74430z7m" || numb.value == "7D930zxY" || numb.value == "7qqX0z7m"|| numb.value == "RfR30z7m" || numb.value == "QG930z7m" || numb.value == "7D93xz7m" || numb.value == "7x530z7m"|| numb.value == "77930z7m" || numb.value == "7K93xz7x" || numb.value == "7aAa0z7m" || numb.value == "7M93bAbm" || numb.value == "7xBe30zm" || numb.value == "7O930mbS" || numb.value == "7P930svg" || numb.value == "7Q930fnt" || numb.value == "7R930slv"|| numb.value == "7S930gld"|| numb.value == "7T930rpm" || numb.value == "U93gsdz7" || numb.value == "7V93ktbz" || numb.value == "7tb30myc" || numb.value == "7kkp30z7" || numb.value == "7Ytrbz7m" || numb.value == "7ZrOzz7m"){
		document.getElementById('demo').innerHTML = 'আপনার পণ্য টি অরিজিনাল'+"<img src='./img/verify.png'>";
		 
		return false
	}
	 
 
	 
	 
	else{
		document.getElementById('demo').innerHTML = 'আপনার পণ্য টি অরিজিনাল না'+"<img src='./img/notverify.png'>";
		return false
	}
	return true;

}

window.addEventListener('scroll',function(){
	var arrow = document.querySelector('.fa-chevron-up');
	arrow.classList.toggle('arrowUp', window.scrollY > 500)   

});
