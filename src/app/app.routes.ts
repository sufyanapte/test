
import { Routes } from '@angular/router';
import { Addtocart } from './addtocart/addtocart';
import { Home } from './home/home';
import { Product } from './product/product';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'products',
    component: Product,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'product',
    redirectTo: 'products',
  },
    {
    path: 'addtocart',
    component: Addtocart
  },
  {
    path: '**',
    redirectTo: '',
  },
];