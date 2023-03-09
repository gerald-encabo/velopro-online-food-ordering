// all images imported from images directory

// Burger
import bacon_burger_1 from "./images/bacon-burger-1.jpg";
import bacon_burger_2 from "./images/bacon-burger-2.jpg";
import bacon_burger_3 from "./images/bacon-burger-3.jpg";

import cheese_burger_1 from "./images/cheese-burger-1.jpg";
import cheese_burger_2 from "./images/cheese-burger-2.jpg";
import cheese_burger_3 from "./images/cheese-burger-3.jpg";

import chicken_burger_1 from "./images/chicken-burger-1.jpg";
import chicken_burger_2 from "./images/chicken-burger-2.jpg";
import chicken_burger_3 from "./images/chicken-burger-3.jpg";

import double_burger_1 from "./images/double-burger-1.jpg";
import double_burger_2 from "./images/double-burger-2.jpg";
import double_burger_3 from "./images/double-burger-3.jpg";

// Pizza 
import chicken_pizza_1 from "./images/chicken-pizza-1.jpg";
import chicken_pizza_2 from "./images/chicken-pizza-2.jpg";
import chicken_pizza_3 from "./images/chicken-pizza-3.jpg";

import hawaiian_pizza_1 from "./images/hawaiian-pizza-1.jpg";
import hawaiian_pizza_2 from "./images/hawaiian-pizza-2.jpg";
import hawaiian_pizza_3 from "./images/hawaiian-pizza-3.jpg";

import margherita_pizza_1 from "./images/margherita-pizza-1.jpg";
import margherita_pizza_2 from "./images/margherita-pizza-2.jpg";
import margherita_pizza_3 from "./images/margherita-pizza-3.jpg";

import pepperoni_pizza_1 from "./images/pepperoni-pizza-1.jpg";
import pepperoni_pizza_2 from "./images/pepperoni-pizza-2.jpg";
import pepperoni_pizza_3 from "./images/pepperoni-pizza-3.jpg";

// Sushi
import maki_sushi_1 from "./images/maki-sushi-1.jpg";
import maki_sushi_2 from "./images/maki-sushi-2.jpg";
import maki_sushi_3 from "./images/maki-sushi-3.jpg";

import nigiri_sushi_1 from "./images/nigiri-sushi-1.jpg";
import nigiri_sushi_2 from "./images/nigiri-sushi-2.jpg";
import nigiri_sushi_3 from "./images/nigiri-sushi-3.jpg";

import shashimi_sushi_1 from "./images/sashimi-sushi-1.jpg";
import shashimi_sushi_2 from "./images/sashimi-sushi-2.jpg";
import shashimi_sushi_3 from "./images/sashimi-sushi-3.jpg";

import uramaki_sushi_1 from "./images/uramaki-sushi-1.jpg";
import uramaki_sushi_2 from "./images/uramaki-sushi-2.jpg";
import uramaki_sushi_3 from "./images/uramaki-sushi-3.jpg";

// Taco
import taco_al_pastor_1 from "./images/taco-al-pastor-1.png";
import taco_al_pastor_2 from "./images/taco-al-pastor-2.jpg";
import taco_al_pastor_3 from "./images/taco-al-pastor-3.jpg";

import taco_de_birria_1 from "./images/taco-de-birria-1.png";
import taco_de_birria_2 from "./images/taco-de-birria-2.jpg";
import taco_de_birria_3 from "./images/taco-de-birria-3.jpg";

import taco_de_cabeza_1 from "./images/taco-de-cabeza-1.png";
import taco_de_cabeza_2 from "./images/taco-de-cabeza-2.jpg";
import taco_de_cabeza_3 from "./images/taco-de-cabeza-3.jpg";

import taco_de_carne_asada_1 from "./images/taco-de-carne-asada-1.png";
import taco_de_carne_asada_2 from "./images/taco-de-carne-asada-2.jpg";
import taco_de_carne_asada_3 from "./images/taco-de-carne-asada-3.jpg";

const products = [
  {
    id: "1",
    title: "Bacon Burger",
    price: 15.99,
    image01: bacon_burger_1,
    image02: bacon_burger_2,
    image03: bacon_burger_3,
    category: "Burger",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "2",
    title: "Cheese Burger",
    price: 16.99,
    image01: cheese_burger_1,
    image02: cheese_burger_2,
    image03: cheese_burger_3,
    category: "Burger",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "3",
    title: "Chicken Burger",
    price: 17.50,
    image01: chicken_burger_1,
    image02: chicken_burger_2,
    image03: chicken_burger_3,
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "4",
    title: "Double Burger",
    price: 20.00,
    image01: double_burger_1,
    image02: double_burger_2,
    image03: double_burger_3,
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "5",
    title: "Chicken Pizza",
    price: 18.95,
    image01: chicken_pizza_1,
    image02: chicken_pizza_2,
    image03: chicken_pizza_3,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "6",
    title: "Hawaiian Pizza",
    price: 17.75,
    image01: hawaiian_pizza_1,
    image02: hawaiian_pizza_2,
    image03: hawaiian_pizza_3,
    category: "Pizza",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "7",
    title: "Margherita Pizza",
    price: 15.0,
    image01: margherita_pizza_1,
    image02: margherita_pizza_2,
    image03: margherita_pizza_3,
    category: "Pizza",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "8",
    title: "Pepperoni Pizza",
    price: 16.50,
    image01: pepperoni_pizza_1,
    image02: pepperoni_pizza_2,
    image03: pepperoni_pizza_3,
    category: "Pizza",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "9",
    title: "Maki Sushi",
    price: 17.00,
    image01: maki_sushi_1,
    image02: maki_sushi_2,
    image03: maki_sushi_3,
    category: "Sushi",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Nigiri Sushi",
    price: 19.50,
    image01: nigiri_sushi_1,
    image02: nigiri_sushi_2,
    image03: nigiri_sushi_3,
    category: "Sushi",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Shashimi Sushi",
    price: 21.50,
    image01: shashimi_sushi_1,
    image02: shashimi_sushi_2,
    image03: shashimi_sushi_3,
    category: "Sushi",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Uramaki Sushi",
    price: 20.00,
    image01: uramaki_sushi_1,
    image02: uramaki_sushi_2,
    image03: uramaki_sushi_3,
    category: "Sushi",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Al Pasto Taco",
    price: 18.00,
    image01: taco_al_pastor_1,
    image02: taco_al_pastor_2,
    image03:  taco_al_pastor_3,
    category: "Taco",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "14",
    title: "De Birria Taco",
    price: 18.50,
    image01: taco_de_birria_1,
    image02: taco_de_birria_2,
    image03:  taco_de_birria_3,
    category: "Taco",
    popular: "yes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "15",
    title: "De Cabeza Taco",
    price: 17.50,
    image01: taco_de_cabeza_1,
    image02: taco_de_cabeza_2,
    image03: taco_de_cabeza_3,
    category: "Taco",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "16",
    title: "De Carne Asada Taco",
    price: 19.00,
    image01: taco_de_carne_asada_1,
    image02: taco_de_carne_asada_2,
    image03: taco_de_carne_asada_3,
    category: "Taco",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;