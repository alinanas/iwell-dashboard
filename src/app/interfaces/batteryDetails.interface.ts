export interface BatteryDetailsInterface {
  deviceId: string;
  description: string;
  state: 'Error' | 'Warning' | 'Stable';
}
