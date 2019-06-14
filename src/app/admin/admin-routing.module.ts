import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "admin",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        canActivateChild: [AuthGuard],
        children: [{ path: "dashboard", component: DashboardComponent }]
      }
    ]
  },
  { path: "admin/login", component: LoginComponent },
  { path: "admin/register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
