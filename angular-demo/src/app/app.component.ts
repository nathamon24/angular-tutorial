import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomePageComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo';
}
