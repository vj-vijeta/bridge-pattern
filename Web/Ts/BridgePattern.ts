// BridgePattern.ts
import { Car } from './Car';
import { Bike } from './Bike';
import { Produce } from './Produce';
import { Assemble } from './Assemble';

const vehicle1 = new Car(new Produce(), new Assemble());
vehicle1.manufacture();

const vehicle2 = new Bike(new Produce(), new Assemble());
vehicle2.manufacture();
