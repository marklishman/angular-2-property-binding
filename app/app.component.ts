import { Component } from '@angular/core';

import { PropertyComponent } from "./property.component";
import { ExpressionComponent } from "./expression.component";
import { SyntaxComponent } from "./syntax.component";
import { AttributeComponent } from "./attribute.component";

@Component({
    selector: 'app',
    template: `
        <property *ngIf="showSection('property')"></property>
        <expression *ngIf="showSection('expression')"></expression>
        <syntax *ngIf="showSection('syntax')"></syntax>
        <attribute *ngIf="showSection('attribute')"></attribute>`,
    directives: [
        PropertyComponent,
        ExpressionComponent,
        SyntaxComponent,
        AttributeComponent
    ]
})
export class AppComponent {

    private showSection(name: string): boolean {
        if (!window.location.search) {
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }
}