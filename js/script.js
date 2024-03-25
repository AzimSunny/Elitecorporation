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

	else if(numb.value == "1A930A7M" || numb.value == "2B930B7M" || numb.value == "3C930C7M" || numb.value == "4D930D7M" || numb.value == "5E930E7M" || numb.value == "6S930F7M" || numb.value == "7S930G7M" || numb.value == "8S930H7M" || numb.value == "9S930I7M" || numb.value == "0S930J7M" || numb.value == "AQ930K7M" || numb.value == "XS932L7M" || numb.value == "12930M7M" || numb.value == "67930N7M" || numb.value == "XX930O7M" || numb.value == "SS930Q7M" || numb.value == "XS930X7M" || numb.value == "5S930R7M" || numb.value == "ZZ930S7M" || numb.value == "4S937T75" || numb.value == "4S930IUI" || numb.value == "4S930X7X" || numb.value == "4S930016" || numb.value == "5SJ30X7M" || numb.value == "1S630Y7M" || numb.value == "42932Z7M" || numb.value == "7A930ZQM" || numb.value == "73930X7M" || numb.value == "74430Z7M" || numb.value == "7D930ZXY" || numb.value == "7QQX0Z7M"|| numb.value == "RFR30Z7M" || numb.value == "QG930Z7M" || numb.value == "7D93XZ7M" || numb.value == "7X530Z7M"|| numb.value == "77930Z7M" || numb.value == "7K93XZ7X" || numb.value == "7AAA0Z7M" || numb.value == "7M93BABM" || numb.value == "7XBE30ZM" || numb.value == "7O930mbS" || numb.value == "7P930SVG" || numb.value == "7Q930FNT" || numb.value == "7R930SLV"|| numb.value == "7S930GLD"|| numb.value == "7T930RPM" || numb.value == "U93GSDZ7" || numb.value == "7V93KTBZ" || numb.value == "7TB30MYC" || numb.value == "7KKP30Z7" || numb.value == "7YTRBZ7M" || numb.value == "7ZROZZ7M"){
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
