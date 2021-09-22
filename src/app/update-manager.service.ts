import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateManagerService {

  updates: Observable<any>;

  constructor(private swUpdate: SwUpdate) {
    // this.swUpdate.available.subscribe(e => {
    //   console.log("New Version aviable");
    //   setTimeout(() => {
    //     this.swUpdate.activateUpdate().then(() => window.location.reload());
    //   }, 5000);
    // });
    this.updates = this.swUpdate.available;
  }

  update(): Observable<any> {
    return from(this.swUpdate.activateUpdate());
  }
}
