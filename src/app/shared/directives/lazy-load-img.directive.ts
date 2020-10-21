import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLazyLoadImg]'
})
export class LazyLoadImgDirective implements AfterViewInit {
  @HostListener('load', ['$event.target'])
  onLoad(el: HTMLImageElement) {
    el.style.opacity = '1';
  }

  constructor(
    private elementRef: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        const el: HTMLImageElement = this.elementRef.nativeElement;
        el.src = el.getAttribute('data-src');
      }
    });
    observer.observe(this.elementRef.nativeElement);
  }

}
