import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { CreateAccountPage } from './create-account.page';
import { CreateAccountPageRoutingModule } from './create-account-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAccountPageRoutingModule,
		ReactiveFormsModule
  ],
  declarations: [CreateAccountPage]
})
export class CreateAccountPageModule {}
