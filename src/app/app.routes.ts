import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Movielist } from '../Componants/movielist/movielist';
import { Pnotfound } from '../Componants/pnotfound/pnotfound';
import { Products } from '../Componants/products/products';
import { AboutUs } from '../Componants/about-us/about-us';
import { Home } from '../Componants/home/home';


export const routes: Routes = [
    // here we defin our route
    {path : '' , redirectTo :'home' , pathMatch :'full'},
    {path : 'home' , component:Home},
    {path : 'movieList' , component:Movielist},
    {path : 'products' , component:Products},
    {path : 'about-us' , component:AboutUs},
    // {path: '**', component: Pnotfound } // wildcard
];
