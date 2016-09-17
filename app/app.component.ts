import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <property *ngIf="showSection('property')"></property>
        <expression *ngIf="showSection('expression')"></expression>
        <syntax *ngIf="showSection('syntax')"></syntax>
        <attribute *ngIf="showSection('attribute')"></attribute>`
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