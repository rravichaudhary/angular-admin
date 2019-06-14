import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminModule } from "./admin/admin.module";
import { FrontModule } from './front/front.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AdminModule, FrontModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
