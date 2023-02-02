import { Component } from '@angular/core';

@Component({
  selector: 'app-regen',
  templateUrl: './regen.component.html',
  styleUrls: ['./regen.component.css'],
})
export class RegenComponent {
  regenUrl: string = 'https://www.oriontools.pl/pl_PL/offer';

  regenLink(): void {
    const w = window.open(this.regenUrl, '_blank');
    if (w) {
      w.focus();
    }
  }
}
