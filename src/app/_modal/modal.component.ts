import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from './modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations:[
    trigger('fade',[
      state('out', style({
        transform:'scale3D(.9,0.9,0.9)'
      })),
      state('in',style({
        transform:'scale(1,1,1)'
      })),
      transition('*=>*',[animate('0.2s')]),
    ])
  ]

})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: any;
  @Input() title: any;
  @Input() maxWidth: any;
  @Input() isCloseHidden: boolean = false;
  @Input() isTitleHidden: boolean = false;
  @Input() stickyTop: boolean = false;
  @Input() class: any;
  private element: any;

  state='out';

  constructor(private modalService : ModalService,  private el : ElementRef){
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
   // ensure id attribute exists
   if(!this.id){
    console.error('modal must have an id');
    return;
   } 

   // move element to bottom of pages
   document.body.appendChild(this.element);

   // close modal in background click
   this.element.addEventListener('click', (el: { target: { className: string; } ;}) => {
    if (el.target.className === 'modal') {
      this.close();
    }
   });

   this.modalService.add(this);
  }

  // remove self form modal service when component is destroyed
  ngOnDestroy():void{
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open():void{
    this.state = 'in';
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  // close modal
  close(): void{
    this.state = "out";
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}
