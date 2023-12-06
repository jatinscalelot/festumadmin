import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals:any[] = [];

  add(modal:any){
    this.modals.push(modal);
  }

  remove(id:string){
    // remove modal from array of active modals
    this.modals= this.modals.filter(x => x.id !== id);
  }

  open(id:string){
    // open modal specified by id
    const modal = this.modals.find(x => x.d === id);
    modal.open();
  }

  close(id:string){
    // class modal specified by id
    const modal =  this.modals.find(x => x.id === id)
    modal.close();
  }
}
