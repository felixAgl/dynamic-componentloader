import { Component, Input }  from '@angular/core';

import { AdComponent }       from '../ad.component';

@Component({
  templateUrl: 'hero-profile.component.html'
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/