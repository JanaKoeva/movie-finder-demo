import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {

  constructor() { }

  @Input()
  currentValue!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
    
  }

}
