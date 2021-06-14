import './contact.css';
import Maps from './Images/map.png';

const component = () => {
  const element = document.getElementById('contact');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');
  const logo = document.createElement('a');
  const section = document.createElement('section');
  const footer = document.createElement('footer');
  const copy = document.createElement('p');
  const orderNow = document.createElement('a');
  // for contact only
  const contactUs = document.createElement('div');
  const address = document.createElement('h3');
  const contactOn = document.createElement('h3');
  const email = document.createElement('p');
  const phone = document.createElement('p');

  contactOn.innerHTML = 'Contact Us On';
  email.innerHTML = 'Email: Addis.bel@gmail.com';
  phone.innerHTML = 'Phone Number : +251943413849';

  const myMap = new Image();
  myMap.src = Maps;
  contactUs.append(address, myMap, contactOn, email, phone);
  section.append(contactUs);

  // end
  logo.innerHTML = 'Ethiopian Food';
  home.innerHTML = 'Home';
  menu.innerHTML = 'Menu';
  orderNow.innerHTML = 'Go to Menu';
  orderNow.setAttribute('href', './menu.html');
  menu.setAttribute('href', './menu.html');
  contact.setAttribute('href', './contact.html');
  home.setAttribute('href', './index.html');
  logo.setAttribute('href', './index.html');
  contact.innerHTML = 'Contacts';

  copy.innerHTML = '&copy 2021';

  nav.append(home, menu, contact);
  header.append(logo, nav);

  footer.appendChild(copy);
  logo.classList.add('logo');
  element.append(header, section, footer);

  return element;
};

document.body.appendChild(component());
document.body.classList.add('page');