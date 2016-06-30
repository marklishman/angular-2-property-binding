import { Component } from '@angular/core';

@Component({
    selector: 'expression',
    template: `
        <h1>Expressions</h1>
        
        <input #count type="number" value="4" (input)="star = count.value > 5">
        <label><input #show type="checkbox" (change)="0" checked> Show</label>
        
        <p [hidden]="!show.checked" 
           [title]="rating(count.value) + (star ? ' You\\'re a star!' : '')"
           [innerHTML]="symbol.repeat(count.value)">
        </p>
    `
})
export class ExpressionComponent {

    private star = false;

    private get symbol(): string {
        return this.star ? '&#10032;' : '&#10003;';
    }

    private rating(count: number): string {
        return 'Your current rating is ' + count;
    }

}