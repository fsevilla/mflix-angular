import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnchorClick]'
})
export class AnchorClickDirective implements AfterViewInit {

  @Input('appAnchorClick') anchor;

  constructor(private elRef:ElementRef) { }

  ngAfterViewInit() {
    console.log('Directiva anchor click cargada', this.elRef.nativeElement);
    this.elRef.nativeElement.addEventListener('click', (e) => {
      // console.log('Hice click en ',  this.elRef.nativeElement.innerText);
      e.stopPropagation();
    })
  }

}