import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = TabsPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
                oauthService: OAuthService) {
        if (oauthService.hasValidIdToken()) {
            this.rootPage = TabsPage;
        } else {
            console.log('*** no valid token!');
            this.rootPage = LoginPage;
        }

        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}
