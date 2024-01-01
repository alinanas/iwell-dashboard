export interface BatteryStatusInterface {
  batteryEnergyLifetimeImportKwh: number;
  batteryEnergyLifetimeExportKwh: number;
  batteryPowerKw: number;
  batteryPowerSetpointKw: number;
  cycleCountDay: number;
  cycleCountYtd: number;
  cycleCountLifetime: number;
  availableChargePowerKw: number;
  availableDischargePowerKw: number;
  chargeCapacityRemainingKwh: number;
  dischargeCapacityRemainingKwh: number;
}
