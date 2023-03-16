import { Component, Input } from '@angular/core';
import { Chip } from 'src/app/models/chip.model';

@Component({
  selector: 'app-custom-mat-chip',
  template: `
  <mat-chip-listbox class="chip-container">
    <mat-chip ngClass="{{c.color}}" selected *ngFor="let c of chip">
      <b>Chip:</b>
      {{c.label}}
  </mat-chip>
  </mat-chip-listbox>
  `,
  styles: [
    `.chip-container {
      margin: 30px !important;
      .mat-chip {
        color: black;
      }
      b {
        color: black;
      }
    }
    
    .color-1 {
      background-color: #8ebcf9 !important;
    }
    
    .color-2 {
      background-color: #FFA888 !important;
    }
    
    .color-3 {
      background-color: #ECDF76 !important;
    }
    `
  ]
})
export class CustomMatChipComponent {
  @Input() chip!: Chip[];
}
