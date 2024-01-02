import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-battery-capacity-remaining',
  templateUrl: 'batteryCapacityRemaining.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class BatteryCapacityRemainingComponent {
  @Input() chargeCapacityRemainingKwh: number;
  @Input() dischargeCapacityRemainingKwh: number;
}
