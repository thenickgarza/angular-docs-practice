import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-housing-location',
  imports: [RouterLinkWithHref],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
        crossorigin
        />
        <h2 class="listing-heading">{{ housingLocation().name }}</h2>
        <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
        <a [routerLink]="['/details', housingLocation().id]">Lean More</a>
    </section>
  `,
  styleUrl: `./housing-location.css`
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
