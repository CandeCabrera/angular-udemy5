import { Component } from "@angular/core";
import { UsersServices } from "./users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  activeUsers = this.usersServices.activeUsers;
  inactiveUsers = this.usersServices.inactiveUsers;

  constructor(private usersServices: UsersServices) {}

  onSetToInactive(id: number) {
    this.usersServices.onSetToInactive(id);
  }

  onSetToActive(id: number) {
    this.usersServices.onSetToActive(id);
  }
}
