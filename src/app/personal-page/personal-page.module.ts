import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout/layout.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ heroUsers }),
    IonicModule.forRoot(),
  ],
  exports: [LayoutComponent],
})
export class PersonalPageModule {}
