import { EventEmitter, Injectable } from "@angular/core";
@Injectable()
export class CounterServices {
  activeAmount = new EventEmitter<number>();
  inactiveAmount = new EventEmitter<number>();
}
