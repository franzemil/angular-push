import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class NotificationManagerService {

  publicKey = "BDjSOcSE6R9j3OVBhylSMDw8WuADJeFFQ4MmFF7cGZYxxSKiIIEDAuxq_wwPkSWcnwJpbcN1OVuxBv-T449tAd4";
  privateKey = "SVHZr3UgrbfLRbv5RhCiLw0kl2tdGpZKlV8czDuufJ8";

  constructor(private httpClient: HttpClient, private swPush: SwPush) {
    swPush.requestSubscription({ serverPublicKey: this.publicKey }).then((subscription) => {
      console.log("subscription", subscription);
      this.httpClient.post("http://localhost:3000/subscribe", subscription).subscribe(() => {
        console.log("Subscription already sent to the server");
      });
    });

    swPush.notificationClicks.subscribe((event) => {
      console.log("Notification Click", event);
      if (event.action === 'donar') {
        const monto = event.notification.data.monto || 1;
        const cam_id = event.notification.data.campana_id;
        console.log("Se agregara cierto monto a la pantalla");
      }
    })
  }
}
