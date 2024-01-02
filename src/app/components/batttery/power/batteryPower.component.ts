import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-battery-power',
  standalone: true,
  templateUrl: 'batteryPower.component.html',
})
export class BatteryPowerComponent {
  @Input() batteryPowerKw: number;
}
