// Bike.ts
import { Vehicle } from './Vehicle';
import { Workshop } from './Workshop';

export class Bike extends Vehicle {
  constructor(workShop1: Workshop, workShop2: Workshop) {
    super(workShop1, workShop2);
  }

  manufacture(): void {
    console.log("Bike ");
    this.workShop1.work();
    this.workShop2.work();
  }
}
