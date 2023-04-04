import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarCharComponent } from './bar-chart.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BarCharComponent],
  exports: [BarCharComponent],
})
export class BarChartModule {}
