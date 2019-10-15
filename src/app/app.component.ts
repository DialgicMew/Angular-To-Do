import { Component, NgModule } from "@angular/core";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  items = [];
  newitem = "";
  pushitem = function() {
    if (this.newitem != "") {
      this.items.push(this.newitem);
      this.newitem = "";
    }
  };
  remove = function(index) {
    this.items.splice(index, 1);
  };
}
