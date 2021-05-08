/*
The intention behind the custom map is to hide away all the properties 
Google Map gives us so we can control what other developers can do
with it.
*/

export class CustomMap {
  // Adding private so nobody can change it from the outside
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
