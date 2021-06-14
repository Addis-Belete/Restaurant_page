import './menu.css';
import Doro from './Images/dorowet.jpeg';
import Kitfo from './Images/kitfo.jpeg';
import Beyeaynet from './Images/aynet.jpeg';
import Tibs from './Images/tibs.jpeg';

function component() {
  const element = document.getElementById('food_menu');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const home = document.createElement('a');
  const menu = document.createElement('a');
  const contact = document.createElement('a');
  const logo = document.createElement('a');
  const section = document.createElement('section');
  const footer = document.createElement('footer');
  const copy = document.createElement('p');
  const card1 = document.createElement('div');
  card1.classList.add('card_one');
  const name1 = document.createElement('h3');
  const ingerdients = document.createElement('p');
  const price = document.createElement('span');
  const order = document.createElement('button');
  const card2 = document.createElement('div');
  card2.classList.add('card_two');
  const name2 = document.createElement('h3');
  const ingerdients2 = document.createElement('p');
  const price2 = document.createElement('span');
  const order2 = document.createElement('button');
  const card3 = document.createElement('div');
  card3.classList.add('card_three');
  const name3 = document.createElement('h3');
  const ingerdients3 = document.createElement('p');
  const price3 = document.createElement('span');
  const order3 = document.createElement('button');
  const card4 = document.createElement('div');
  card4.classList.add('card_four');
  const name4 = document.createElement('h3');
  const ingerdients4 = document.createElement('p');
  const price4 = document.createElement('span');
  const order4 = document.createElement('button');

  logo.innerHTML = 'Ethiopian Food';
  home.innerHTML = 'Home';
  menu.innerHTML = 'Menu';
  menu.setAttribute('href', './menu.html');
  contact.setAttribute('href', './contact.html');
  home.setAttribute('href', './index.html');
  logo.setAttribute('href', './index.html');
  contact.innerHTML = 'Contacts';
  // for menu
  name1.innerHTML = 'Doro Wet';
  ingerdients.innerHTML = `Wat or Wot or Tsebhi is an Ethiopian and 
                             Eritrean stew that may be prepared with chicken, beef, lamb, a variety of vegetables, spice mixtures such as berbere,
                             and niter kibbeh, a seasoned clarified butter.`;
  price.innerHTML = '300ETB';
  order.innerHTML = 'Order Now';
  name2.innerHTML = 'Kitfo';
  ingerdients2.innerHTML = `Kitfo (Amharic: ክትፎ, IPA: [kɨtfo]), sometimes spelled ketfo, is a 
traditional dish found in Ethiopian cuisine. It consists of minced 
raw beef, marinated in mitmita (a chili powder-based spice blend) 
and niter.`;

  price2.innerHTML = '200ETB';
  order2.innerHTML = 'Order Now';
  name3.innerHTML = 'Beyeaynet';
  ingerdients3.innerHTML = `"Let's start with a complete Ethiopian vegetarian food meal known as 
                         yetsom beyaynetu. It's essentially a mixed combination platter of injera 
                         topped with a variety of strictly vegan curries and vegetables available 
                         that day."`;
  price3.innerHTML = '100ETB';
  order3.innerHTML = 'Order Now';
  name4.innerHTML = 'Shekla Tibs';
  ingerdients4.innerHTML = `Tibs is an Ethiopian dish consisting of stir-fried meat and vegetables. 
                               Due to the usage of various types of meat, there are numerous 
                             variations of this Ethiopian delicacy. Tibs is usually prepared 
                             as a sign of respect to someone, or as a festive dish at special 
                             events.`;
  price4.innerHTML = '325ETB';
  order4.innerHTML = 'Order Now';

  copy.innerHTML = '&copy 2021';
  const myImage = new Image();
  myImage.src = Doro;
  const myKitfo = new Image();
  myKitfo.src = Kitfo;
  const myBeyeaynet = new Image();
  myBeyeaynet.src = Beyeaynet;
  const myTibs = new Image();
  myTibs.src = Tibs;

  nav.append(home, menu, contact);
  header.append(logo, nav);
  section.append(card1, card2, card3, card4);
  card1.append(myImage, name1, ingerdients, price, order);
  card2.append(myKitfo, name2, ingerdients2, price2, order2);
  card3.append(myBeyeaynet, name3, ingerdients3, price3, order3);
  card4.append(myTibs, name4, ingerdients4, price4, order4);
  footer.appendChild(copy);
  logo.classList.add('logo');
  element.append(header, section, footer);

  return element;
}

document.body.appendChild(component());
document.body.classList.add('page');
