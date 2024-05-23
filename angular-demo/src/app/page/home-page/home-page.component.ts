import { Component, Input, inject } from '@angular/core';
import { HousingLocationComponent } from './component/housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../../interface/housingLocation';
import { HousingService } from '../../service/housing.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
