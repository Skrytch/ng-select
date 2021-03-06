import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'select-bindings',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <p>
            By default the dropdown is displayed below the ng-select. 
            You can change the default position by setting dropdownPosition to top or bottom.
        </p>

        ---html,true
        <ng-select [dropdownPosition]="dropdownPosition" 
                   [searchable]="false"
                   [items]="cities">
        </ng-select>
        ---

        <br>
        
        <label>
            <input [(ngModel)]="dropdownPosition" type="radio" [value]="'top'">
            top
        </label>
        <br>

        <label>
            <input [(ngModel)]="dropdownPosition" type="radio" [value]="'bottom'">
            bottom
        </label>

        <hr>
        <p>
          Using "Auto" it still defaults to bottom, but if the dropdown would be out of view, 
          it will automatically change the dropdownPosition to top.
        </p>

        ---html,true
        <ng-select [dropdownPosition]="'auto'"
                   [searchable]="false"
                   [items]="cities">
        </ng-select>
        ---
    `
})
export class DropdownPositionsComponent {
    dropdownPosition: 'top' | 'bottom' = 'bottom';
    cities = [
        { value: 1, label: 'Vilnius' },
        { value: 2, label: 'Kaunas' },
        { value: 3, label: 'Pavilnys' }
    ];
}

