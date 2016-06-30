import { Component } from '@angular/core';

@Component({
    selector: 'property',
    template: `
        <h1 [textContent]="'Name: ' + person.name"></h1>
        
        <button (click)="person = male" [disabled]="person.sex=='m'">Male</button>
        <button (click)="person = female" [disabled]="person.sex=='f'">Female</button>
        
        <p><img [src]="person.photo" [alt]="person.name" [title]="person.name"></p>
        <p [hidden]="!person.rating">
            Rating: <span [innerHTML]="'&#10032;'.repeat(person.rating)"></span>
        </p>`
})
export class PropertyComponent {
    private female = {
        name: 'Turanga Leela',
        sex: 'f',
        rating: 4,
        photo: 'images/leela.jpg'
    };
    private male = {
        name: 'Philip J. Fry',
        sex: 'm',
        photo: 'images/fry.jpg'
    };
    private person = this.female;
}