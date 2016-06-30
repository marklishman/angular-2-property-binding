import { Component } from '@angular/core';

import { PropertyComponent } from "./property.component";
import { ExpressionComponent } from "./expression.component";

@Component({
    selector: 'property-binding',
    template: `
        <property></property>
        <hr/>
        <expression></expression>
        `,
    directives: [
        PropertyComponent,
        ExpressionComponent
    ]
})
export class AppComponent {}