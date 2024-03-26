// Assemble.ts
import { Workshop } from './Workshop';

export class Assemble implements Workshop {
  work(): void {
    console.log("And Assembled.");
  }
}
