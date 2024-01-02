import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './services/api.service';
import { BatteryStatusComponent } from './components/batttery/status/batteryStatus.component';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BatteryStatusInterface } from './interfaces/batteryStatus.interface';
import { CommonModule } from '@angular/common';
import { BatteryPowerComponent } from './components/batttery/power/batteryPower.component';
import { PowerChartComponent } from './components/charts/powerChart/powerChart.component';
import { PageHeaderComponent } from './components/shared/pageHeader/pageHeader.component';
import { BatteryCapacityRemainingComponent } from './components/batttery/capacityRemaining/batteryCapacityRemaining.component';

const timeFrameEnum = new Map<string, number>([
  ['hour', -60],
  ['day', -2400],
  ['week', -16800],
  ['month', -74400],
]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    BatteryStatusComponent,
    BatteryPowerComponent,
    PowerChartComponent,
    PageHeaderComponent,
    BatteryCapacityRemainingComponent,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  title = 'iwell dashboard';

  data$: Observable<BatteryStatusInterface> | null = null;

  @ViewChild(PowerChartComponent) powerChart: PowerChartComponent;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data$ = this.api.getBatteryStatus(environment.DEVICE_ID);
  }

  refreshData(value: string) {
    this.getData();
    this.powerChart.getData(timeFrameEnum.get(value) || -60);
  }
}
