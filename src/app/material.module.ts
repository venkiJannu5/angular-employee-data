import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatMenuModule,
  MatExpansionModule,
  MatDialogModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatRadioModule,
  MatSidenavModule,
  MatSortModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';
const modules = [
   MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
   MatProgressSpinnerModule, 
  MatPaginatorModule,
  MatMenuModule,
  MatExpansionModule,
  MatDialogModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatRadioModule,
  MatSidenavModule,
  MatSortModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule
];


@NgModule({
  imports: [modules,
  BrowserAnimationsModule,
   MatMenuModule
  ],
  declarations: [
  ],
  exports: modules,
})
export class MaterialModule { }