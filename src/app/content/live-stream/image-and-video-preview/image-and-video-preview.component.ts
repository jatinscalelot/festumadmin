import { AfterViewInit, Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { CONSTANTS } from 'src/app/common/constants';
// import Swiper from 'swiper';

declare var $:any;
declare var Swiper:any;

@Component({
  selector: 'app-image-and-video-preview',
  templateUrl: './image-and-video-preview.component.html',
  styleUrls: ['./image-and-video-preview.component.css']
})
export class ImageAndVideoPreviewComponent {

  constants: any = CONSTANTS;
  @Input() expectedProp: any;
  @Input() isImageOrVideoFlag: boolean = false;
  @Input() isCompanyImagesAndVideo: boolean = false;
  @Input() isSingleVideo: boolean = false;
  @Output() openClosePopup = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
      // gallery slider 
    var galleryTop:any = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      },
      loop: false,
      loopedSlides: 4
    });
    var galleryThumbs:any = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      loop: false,
      loopedSlides: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
  }

  closePopup(): void {
    if (!this.isImageOrVideoFlag) {
      const video: any = document.getElementById("video");
      if (video) {
        video.pause();
      }
    }
    this.openClosePopup.emit(false);
  }
}