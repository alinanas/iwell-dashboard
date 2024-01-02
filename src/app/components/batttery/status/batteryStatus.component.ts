import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-battery-status',
  standalone: true,
  templateUrl: 'batteryStatus.component.html',
  imports: [CommonModule],
})
export class BatteryStatusComponent {
  @Input() availableDischargePowerKw: number;
}
