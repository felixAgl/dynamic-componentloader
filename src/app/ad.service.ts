import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdItem }               from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'City Name: Medellin', bio: 'Code Country: co'}),

      new AdItem(HeroProfileComponent, {name: 'City Name: bogota', bio: 'Code Country: co'}),

      new AdItem(HeroJobAdComponent,   {headline: 'City Name: Rionegro', body: 'Code Country: co'}),

      new AdItem(HeroJobAdComponent,   {headline: 'City Name: Cali', body: 'Code Country: co'}),
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/