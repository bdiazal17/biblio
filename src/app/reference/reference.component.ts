import { Component, Input } from '@angular/core';
import { Reference } from '../reference';

@Component({
  selector: 'app-reference',
  imports: [],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent{

  @Input() reference: any = {
    id: 0,
    authors: '',
    title: '',
    year: '',
    custom2: '',
    first_author: '',
    date: ''
  };

  constructor(){}
}
