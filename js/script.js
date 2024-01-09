$('.banner_slider').slick({
     arrows:false,
     
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
	 // ============== 120100---126100 1nd =================

	 else if(numb.value == "4S930a7m" || numb.value == "4S930b7m" || numb.value == "4S930c7m" || numb.value == "4S930d7m" || numb.value == "4S930e7m" || numb.value == "4S930f7m" || numb.value == "4S930g7m" || numb.value == "4S930h7m" || numb.value == "4S930i7m" || numb.value == "4S930j7m" || numb.value == "4S930k7m" || numb.value == "4S930l7m" || numb.value == "4S930m7m" || numb.value == "4S930n7m" || numb.value == "4S930o7m" || numb.value == "4S930p7m" || numb.value == "4S930q7m" || numb.value == "4S930r7m" || numb.value == "4S930s7m" || numb.value == "4S930t7m" || numb.value == "4S930u7m" || numb.value == "4S930v7m" || numb.value == "4S930w7m" || numb.value == "4S930x7m" || numb.value == "4S930y7m" || numb.value == "4S930z7m" || numb.value == "7A930z7m" || numb.value == "7B930z7m" || numb.value == "7C930z7m" || numb.value == "7D930z7m" || numb.value == "7E930z7m"|| numb.value == "7F930z7m" || numb.value == "7G930z7m" || numb.value == "7H930z7m" || numb.value == "7I930z7m"|| numb.value == "7J930z7m" || numb.value == "7K930z7m" || numb.value == "7L930z7m" || numb.value == "7M930z7m" || numb.value == "7N930z7m" || numb.value == "7O930z7m" || numb.value == "7P930z7m" || numb.value == "7Q930z7m" || numb.value == "7R930z7m"|| numb.value == "7S930z7m"|| numb.value == "7T930z7m" || numb.value == "7U930z7m" || numb.value == "7V930z7m" || numb.value == "7W930z7m" || numb.value == "7X930z7m" || numb.value == "7Y930z7m" || numb.value == "7Z930z7m"){
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
