import { Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DetailsPageComponent } from './page/details-page/details-page.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: DetailsPageComponent,
    title: 'Home details'
  }
];

export default routeConfig;


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/