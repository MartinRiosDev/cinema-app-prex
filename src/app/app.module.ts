import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppState } from './store/app.state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { withNgxsResetPlugin } from 'ngxs-reset-plugin';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		NgxsModule.forRoot([AppState], {
			developmentMode: !environment.production
		}),
		NgxsStoragePluginModule.forRoot({ keys: ['appState'] }),
		NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production })
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		withNgxsResetPlugin()
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
