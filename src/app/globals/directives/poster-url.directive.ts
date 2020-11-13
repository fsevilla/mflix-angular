import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPosterUrl]'
})
export class PosterUrlDirective implements OnInit {

  @Input() appPosterUrl;

  private noImageUrl:string = 'https://zoomnearby.com/resources/media/images/common/Image-not-found.jpg';

  constructor(private elRef:ElementRef) { }

  ngOnInit() {
    let imageUrl = this.appPosterUrl || this.noImageUrl;
    this.elRef.nativeElement.setAttribute('src', imageUrl);
  }

}
