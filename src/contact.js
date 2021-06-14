
import _ from 'lodash';
import './contact.css';
import Maps from './Images/map.png';
function component() {
	const element = document.getElementById('contact');
	const header = document.createElement('header');
	const nav = document.createElement('nav')
	const home = document.createElement('a')
	const menu = document.createElement('a')
	const contact = document.createElement('a')
	const logo = document.createElement('a')
	const section = document.createElement('section')
	const footer = document.createElement('footer')
	const copy = document.createElement('p')
	const order_now = document.createElement('a');
	// for contact only
	const contact_us = document.createElement('div')
	const address = document.createElement('h3');
	const contact_on = document.createElement('h3');
	const email = document.createElement('p');
	const phone = document.createElement('p');


	contact_on.innerHTML = "Contact Us On";
	email.innerHTML = "Email: Addis.bel@gmail.com";
	phone.innerHTML = "Phone Number : +251943413849";

	const myMap = new Image();
	myMap.src = Maps;
	contact_us.append(address, myMap, contact_on, email, phone);
	section.append(contact_us)

	//end
	logo.innerHTML = "Ethiopian Food";
	home.innerHTML = "Home";
	menu.innerHTML = "Menu";
	order_now.innerHTML = "Go to Menu";
	order_now.setAttribute('href', './menu.html');
	menu.setAttribute("href", './menu.html');
	contact.setAttribute('href', './contact.html');
	home.setAttribute('href', './index.html');
	logo.setAttribute('href', './index.html');
	contact.innerHTML = "Contacts"

	copy.innerHTML = "&copy 2021";

	nav.append(home, menu, contact);
	header.append(logo, nav);

	footer.appendChild(copy)
	logo.classList.add('logo');
	element.append(header, section, footer);


	return element;
}



document.body.appendChild(component());
document.body.classList.add('page');