import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  myproduct ={
    title : "ipone 17",
    Brand : "Apple",
    image : "https://m.media-amazon.com/images/I/619GbzAAOhL.__AC_SX300_SY300_QL70_ML2_.jpg",
    Price : '1200LE',
    avilable : "true"
  }
  list_of_products = [
    {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "rating": {
      "rate": 4.7,
      "count": 500
    }
  },
  {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. ",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    "rating": {
      "rate": 2.1,
      "count": 430
    }
  },
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
  {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    "rating": {
      "rate": 3,
      "count": 400
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  }
  ]
  addcard(productTitle: string) {
    alert(`product ${productTitle} add to Cart`);
}
  searchval = "haidyhosam@gmail.com";
}
