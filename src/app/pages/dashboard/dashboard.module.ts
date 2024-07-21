import { CommonModule } from '@angular/common';
import { DashboardPage } from './dashboard.page';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NgModule } from '@angular/core';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DashboardRoutingModule
	],
	declarations: [DashboardPage, MovieCardComponent]
})
export class DashboardModule { }
