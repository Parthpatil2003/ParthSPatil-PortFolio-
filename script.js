function send(){
	let number = "8591980438";

	let name = document.querySelector('.contact__input').value;
	let email = document.querySelector('.contact__input').value;
    let subject = document.querySelector('.contact__input').value;
	
    


	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
    + "Subject : " +subject+ "%0a%0a";
	

	window.open(url, '_blank').focus();
}