import { Component } from '@angular/core';

@Component({
    selector: 'attribute',
    template: `
        <h1>Attribute</h1>
        
        <table #t border=1 [attr.aria-label]="'Table with ' + t.rows.length + ' rows'">
            <tr>
                <td>one</td>
                <td>two</td>
                <td>three</td>
                <td>four</td>
            </tr>
            <tr>
                <td colspan="4">Hard coded</td>
            </tr>
            <tr>
                <td [attr.colspan]="t.rows.item(0).cells.length">First row cell count</td>
            </tr>
        </table>
        <p>aria-label: {{t.getAttribute('aria-label')}}</p>`
})
export class AttributeComponent {}