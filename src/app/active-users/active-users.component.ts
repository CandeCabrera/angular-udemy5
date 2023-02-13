import { Component, Input } from "@angular/core";
import { CounterServices } from "../counter.service";
import { UsersServices } from "../users.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent {
  @Input() users: string[];
  active: number = 2;

  constructor(
    private usersServices: UsersServices,
    private counterServices: CounterServices
  ) {
    this.counterServices.activeAmount.subscribe(
      (number: number) => (this.active = number)
    );
  }

  onSetToInactive(id: number) {
    this.usersServices.onSetToInactive(id);
    this.counterServices.activeAmount.emit(
      this.usersServices.activeUsers.length
    );
    this.counterServices.inactiveAmount.emit(
      this.usersServices.inactiveUsers.length
    );
    console.log(this.active);
  }
}
