import { BatteryDetailsInterface } from './batteryDetails.interface';

export interface BatteryListInterface {
  totalCount: number;
  items: BatteryDetailsInterface[];
}
