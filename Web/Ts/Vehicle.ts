// Vehicle.ts
import { Workshop } from './Workshop';

export abstract class Vehicle {
  protected workShop1: Workshop;
  protected workShop2: Workshop;

  constructor(workShop1: Workshop, workShop2: Workshop) {
    this.workShop1 = workShop1;
    this.workShop2 = workShop2;
  }

  abstract manufacture(): void;
}
