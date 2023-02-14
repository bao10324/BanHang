import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  BanHang= [
    {
      id: 1,
      name: "cà chua",
      price: 30000,
      image: 'https://th.bing.com/th/id/OIP.iISyjYcpDiU8TaE4y9vl3wHaEo?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      status: true
    },

    {
      id: 2,
      name: "dâu tây",
      price: 120000,
      image: 'https://th.bing.com/th/id/OIP._Q1g_gjp_cryGhfjYs8ZowHaDx?w=283&h=178&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      
    },
          
    {
      id: 3,
      name: "bông cải ",
      price: 40000,
      image: 'https://th.bing.com/th/id/OIP.i24Kg6aYPzqIqpO5tf7XCAEsDh?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      
    },
     
    {
      id: 4,
      name: "ổi",
      price: 17000,
      image: 'https://th.bing.com/th/id/OIP.uqbBIW33rPrPse0ihj9FiwHaFj?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      
    },
     
  
  ]}