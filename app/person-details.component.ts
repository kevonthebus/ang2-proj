import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({

    selector: 'person-details',
    template: `
    <section *ngIf="person">
    <h2> You selected: {{ person.name}} </h2>
    <h3>Description</h3>
    <p>
    {{ person.name }} weights {{ person.weight }} and is {{ person.height }} tall.
    </p>
    </section>
    `
    
})

export class PersonDetailsComponent {
    //mark the person property as input to this component
  @Input() person : Person;
}
