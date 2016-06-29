import { Component } from '@angular/core';

import { PropertiesComponent } from "./properties.component";

@Component({
    selector: 'property-binding',
    template: `
        <properties></properties>
        <hr/>
        `,
    directives: [
        PropertiesComponent
    ]
})
export class AppComponent {}