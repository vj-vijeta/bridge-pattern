// Car.ts
import { Vehicle } from './Vehicle';
import { Workshop } from './Workshop';

export class Car extends Vehicle {
  constructor(workShop1: Workshop, workShop2: Workshop) {
    super(workShop1, workShop2);
  }

  manufacture(): void {
    console.log("Car ");
    this.workShop1.work();
    this.workShop2.work();
  }
}
