import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-localiser-projet',
  templateUrl: './localiser-projet.page.html',
  styleUrls: ['./localiser-projet.page.scss'],
})
export class LocaliserProjetPage implements OnInit {

  map: GoogleMap;

  constructor(
    public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    private platform: Platform
  ) { 

    if (this.platform.is('cordova')) {
      this.loadMap();
    }
  }


  loadMap(){
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyB5i8jekPnulSI2NhlpxzWcOvFy4MR-fK8',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyB5i8jekPnulSI2NhlpxzWcOvFy4MR-fK8'
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.610769,
          lng: 3.876716
        },
        zoom: 12,
        tilt: 30
      }
    });
  }
  ngOnInit() {
  }

}
