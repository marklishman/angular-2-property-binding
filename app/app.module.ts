import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { PropertyComponent } from "./property.component";
import { ExpressionComponent } from "./expression.component";
import { SyntaxComponent } from "./syntax.component";
import { AttributeComponent } from "./attribute.component";

@NgModule({
    imports:      [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        PropertyComponent,
        ExpressionComponent,
        SyntaxComponent,
        AttributeComponent
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }