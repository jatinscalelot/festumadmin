import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAndVideoPreviewComponent } from './image-and-video-preview.component';

describe('ImageAndVideoPreviewComponent', () => {
  let component: ImageAndVideoPreviewComponent;
  let fixture: ComponentFixture<ImageAndVideoPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageAndVideoPreviewComponent]
    });
    fixture = TestBed.createComponent(ImageAndVideoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
