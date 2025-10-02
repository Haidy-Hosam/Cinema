import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from "../Componants/products/products";
import { Movielist } from "../Componants/movielist/movielist";
import { Navbar } from "../Componants/navbar/navbar";
import { Footer } from "../Componants/footer/footer";
import { Pnotfound } from "../Componants/pnotfound/pnotfound";
import { AboutUs } from "../Componants/about-us/about-us";
import { Home } from "../Componants/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Products, Movielist, Navbar, Footer, Pnotfound, AboutUs, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project_2');
}
