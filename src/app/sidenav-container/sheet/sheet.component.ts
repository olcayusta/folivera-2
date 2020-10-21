import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconsModule } from '@shared/icons/icons.module';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SheetComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Hepsi'},
    {value: 'pizza-1', viewValue: '4K'},
    {value: 'tacos-2', viewValue: 'Aile'},
    {value: 'tacos-3', viewValue: 'Aksiyon'},
    {value: 'tacos-4', viewValue: 'Animasyon'},
    {value: 'tacos-5', viewValue: 'Belgesel'},
    {value: 'tacos-6', viewValue: 'Bilim Kurgu'},
    {value: 'tacos-7', viewValue: 'Dram'},
    {value: 'tacos-8', viewValue: 'Fantastik'},
    {value: 'tacos-9', viewValue: 'Gerilim'},
    {value: 'tacos-10', viewValue: 'Gizem'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

@NgModule({
  declarations: [SheetComponent],
  imports: [
    MatToolbarModule,
    IconsModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule
  ]
})
class SheetModule {
}
