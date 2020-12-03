import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatToolbarModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
