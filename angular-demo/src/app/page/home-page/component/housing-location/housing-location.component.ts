import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { HousingLocation } from '../../../../../interface/housingLocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [ CommonModule ,RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

  
}
