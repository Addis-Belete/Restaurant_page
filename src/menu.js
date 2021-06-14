
import _ from 'lodash';
import './menu.css';
import Doro from './Images/dorowet.jpeg';
import Kitfo from './Images/kitfo.jpeg';
function component() {
	const element = document.getElementById('food_menu');
	const header = document.createElement('header');
	const nav = document.createElement('nav')
	const home = document.createElement('a')
	const menu = document.createElement('a')
	const contact = document.createElement('a')
	const logo = document.createElement('a')
	const section = document.createElement('section')
	const footer = document.createElement('footer')
	const copy = document.createElement('p')
	const card1 = document.createElement('div')
	card1.classList.add('card_one');
	const name1 = document.createElement('h3');
	const ingerdients = document.createElement('p');
	const price = document.createElement('span')
	const order = document.createElement('button')
	const card2 = document.createElement('div')
	card2.classList.add('card_two');



	logo.innerHTML = "Ethiopian Food";
	home.innerHTML = "Home";
	menu.innerHTML = "Menu";
	menu.setAttribute("href", './menu.html');
	contact.setAttribute('href', './contact.html');
	home.setAttribute('href', './index.html');
	logo.setAttribute('href', './index.html');
	contact.innerHTML = "Contacts"
	// for menu 
	name1.innerHTML = "Doro Wet";
	ingerdients.innerHTML = `"Wat or Wot or Tsebhi is an Ethiopian and 
                             Eritrean stew that may be prepared with chicken, beef, lamb, a variety of vegetables, spice mixtures such as berbere,
                             and niter kibbeh, a seasoned clarified butter."`
	price.innerHTML = '300ETB';
	order.innerHTML = "Order Now"

	copy.innerHTML = "&copy 2021";
	const myImage = new Image();
	myImage.src = Doro;
	const myKitfo = new Image();
	myKitfo.src = Kitfo;


	nav.append(home, menu, contact);
	header.append(logo, nav);
	section.append(card1, card2);
	card1.append(myImage, name1, ingerdients, price, order);

	footer.appendChild(copy)
	logo.classList.add('logo');
	element.append(header, section, footer);


	return element;
}



document.body.appendChild(component());
document.body.classList.add('page');
