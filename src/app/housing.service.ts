import { Injectable } from "@angular/core";
import { HousingLocationInfo } from "./housinglocation";

// This tell Angular to make a copy of this service when the app starts and keep it around
// the root injector.
@Injectable({
  providedIn: "root",
})
export class HousingService {
  readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";

  readonly url = "http://localhost:3000/locations";

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url)

    return await data.json() ?? [];

  }

  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}/${id}`);

    return await data.json() ?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes applicatoin received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`
    );
  }
}
