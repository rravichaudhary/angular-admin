import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, DashboardComponent],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}
