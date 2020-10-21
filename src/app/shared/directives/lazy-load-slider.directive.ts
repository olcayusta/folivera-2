import {AfterViewInit, Directive, ElementRef, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appLazyLoadSlider]'
})
export class LazyLoadSliderDirective implements AfterViewInit {
  @Output() isVisible = new EventEmitter();

  constructor(
    private elementRef: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log(this.elementRef.nativeElement);
        this.isVisible.emit();
        observer.disconnect();
      } else {
        console.log('Olay yok!');
      }
    });
    observer.observe(this.elementRef.nativeElement);
  }

}
