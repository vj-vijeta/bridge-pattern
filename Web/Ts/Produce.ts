// Produce.ts
import { Workshop } from './Workshop';

export class Produce implements Workshop {
  work(): void {
    console.log("Produced");
  }
}
