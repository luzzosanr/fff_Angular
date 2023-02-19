// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: false,
  API_URL: 'http://164.132.57.11:8080/api/',
  API_URL_IMAGES: 'http://164.132.57.11:8080',
  full_link_image(link: string) {
    return environment.API_URL_IMAGES + link;
  },
  get_csrf_headers() {
    let token = document.cookie.split('; ').find(row => row.startsWith('csrftoken'))
    token = token ? token.split('=')[1] : '';

    let headers = new HttpHeaders({
      'X-CSRFTOKEN': token
    });

    return headers;
  },
};


export class Product {
  /**
   * Used in handeling products for the brands.
   */

  name: string = "";
  price: number = 0;
  stock: number = 0;
  slug: string = "";
  description: string = "";
  image_url: string = "";
  is_available: boolean = false;
  is_unlimited: boolean = true;
  image: File | undefined;
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
