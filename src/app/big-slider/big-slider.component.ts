import { AfterViewInit, Component, OnInit, ɵmarkDirty as markDirty } from '@angular/core';

@Component({
  selector: 'app-big-slider',
  templateUrl: './big-slider.component.html',
  styleUrls: ['./big-slider.component.scss']
})
export class BigSliderComponent implements OnInit, AfterViewInit {
  // 'https://artist.api.cdn.hbo.com/images/GXadUQAL-FZaVkgEAAAKm/tile?v=a1c271b6f33eb7e6d06e9484144d0d73&size=1160x497',

  items = [
    {id: 1, img: 'https://artist.api.cdn.hbo.com/images/GXwTRLg2wGMPDwgEAAASZ/tile?v=8168b936fc60fa2de8ceb58a40bbdecd&size=1160x497'},
    {id: 2, img: 'https://artist.api.cdn.hbo.com/images/GXtq0PQyT7MPCwgEAAAaq/tile?v=d48046f6d8f1513e10df5e094b60f95b&size=1160x497'},
    {id: 3, img: 'https://artist.api.cdn.hbo.com/images/GXjyOBAdcLo7CZgEAABEc/tile?v=34acc7307be5c1486cd21df901e9c86d&size=1160x497'},
    {id: 4, img: 'https://artist.api.cdn.hbo.com/images/GXtf0UwTqw8JHjQEAAAbT/tile?v=36532c13d374a7bddcfcfa8881f83be3&size=1200x497'},
    {id: 5, img: 'https://artist.api.cdn.hbo.com/images/GXhzsPQW3_h_DTgEAAADV/tile?v=b6daef89d145d8f545ea9d2e0ef99b17&size=1160x497'},
    {id: 6, img: 'https://artist.api.cdn.hbo.com/images/GXadUQAL-FZaVkgEAAAKm/tile?v=a1c271b6f33eb7e6d06e9484144d0d73&size=1160x497'}
  ];

  counter = 1;
  clientWidth = 1200;

  constructor() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      document.getElementById('slider').style.transform = `translateX(-${this.clientWidth}px)`;
    }, 100);

    document.getElementById('slider').ontransitionend = () => {
      console.log('bitti')
      if (this.counter + 1 === this.items.length - 1) {
        this.items.push(...this.items);
        markDirty(this);
      }

      setTimeout(() => {
        this.counter++;
        document.getElementById('slider').style.transform = `translateX(-${this.clientWidth * this.counter}px)`;
      }, 2000);
    }
  }

  ngOnInit(): void {



    // setInterval(() => {
    //   console.log(this.counter + 1);
    //   if (this.counter + 1 === this.items.length - 1) {
    //     this.items.push(...this.items);
    //     markDirty(this);
    //   }
    //
    //   this.counter++;
    //   document.getElementById('slider').style.transform = `translateX(-${this.clientWidth * this.counter}px)`;
    // }, 2400);
  }
}
