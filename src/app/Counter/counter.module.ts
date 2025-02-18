import { NgModule } from "@angular/core";
import { CounterComponent } from "./Components/counter.component";


@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{

}
