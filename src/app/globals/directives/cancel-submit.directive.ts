import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCancelSubmit]'
})
export class CancelSubmitDirective implements OnInit {

  @Input() appCancelSubmit;

  constructor(private elRef:ElementRef) { }

  ngOnInit() {
    this.elRef.nativeElement.addEventListener('click', (e) => {
      console.log('Hiciste click en un submit button');
      e.preventDefault();
    })
  }

}
