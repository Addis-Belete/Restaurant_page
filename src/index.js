
import _ from 'lodash';
import './style.css';
import Food from './images/food.jpeg';

function component() {
	const element = document.getElementById('content');
	const header = document.createElement('header');
	const nav = document.createElement('nav')
	const home = document.createElement('a')
	const menu = document.createElement('a')
	const contact = document.createElement('a')
	const logo = document.createElement('a')
	const section = document.createElement('section')
	const about = document.createElement('h2')
	const description = document.createElement('p')
	const footer = document.createElement('footer')
	const copy = document.createElement('p')

	logo.innerHTML = "Ethiopian Food";
	home.innerHTML = "Home";
	menu.innerHTML = "Menu";
	menu.setAttribute("href", './menu.html');
	contact.setAttribute('href', './contact.html');
	home.setAttribute('href', './index.html');
	logo.setAttribute('href', './index.html');
	contact.innerHTML = "Contacts"
	about.innerHTML = "About Ethiopian Food"
	description.innerHTML = `"Ethiopian cuisine (Oromo: Nyaata Etiyoophiyaa; Amharic: የኢትዮጵያ ምግብ) 
                             characteristically consists of vegetable and often very spicy meat dishes. ... 
                             Ethiopians eat most of the time with their right hands,
                             using pieces of injera to pick up bites of entrées and side dishes."`
	copy.innerHTML = "&copy 2021";

	nav.append(home, menu, contact);
	header.append(logo, nav);
	section.append(about, description);
	footer.appendChild(copy)
	logo.classList.add('logo');
	element.append(header, section, footer);


	return element;
}



document.body.appendChild(component());
document.body.classList.add('page');