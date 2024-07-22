import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EditMoviePage } from './edit-movie.page';
import { EditMoviePageRoutingModule } from './edit-movie-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMoviePageRoutingModule,
		ReactiveFormsModule
  ],
  declarations: [EditMoviePage]
})
export class EditMoviePageModule {}
