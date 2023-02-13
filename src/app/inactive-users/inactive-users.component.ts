import { Component, Input } from "@angular/core";
import { CounterServices } from "../counter.service";
import { UsersServices } from "../users.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent {
  @Input() users: string[];

  inactive: number = 2;

  constructor(
    private usersServices: UsersServices,
    private counterServices: CounterServices
  ) {
    this.counterServices.inactiveAmount.subscribe(
      (number: number) => (this.inactive = number)
    );
  }

  onSetToActive(id: number) {
    this.usersServices.onSetToActive(id);
    this.counterServices.activeAmount.emit(
      this.usersServices.activeUsers.length
    );
    this.counterServices.inactiveAmount.emit(
      this.usersServices.inactiveUsers.length
    );
  }
}
