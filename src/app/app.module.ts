import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { Control } from './services/control.form/sign-up-sing-in.service';
import { ingredientNutVal } from './services/ingredient/nutriment-service.service';
import { CompositionDynamique } from './services/ingredient/composition-dynamique.service';
import { CompositionManuelle } from './services/ingredient/composition-manuelle.service';
import { PostProviderService } from './services/post-provider.service';
import { DataProviderService } from './services/data-provider.service';
import { ShareDataAccountService } from './services/shareData/share-data-account.service';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HelperService } from './services/helper.service';
import { DureeAlimentService } from './services/duree-aliment.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Control,
    ingredientNutVal,
    CompositionManuelle,
    CompositionDynamique,
    PostProviderService,
    DataProviderService,
    ShareDataAccountService,
    Geolocation,
    HelperService,
    DureeAlimentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
