import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
    standalone:true,
    selector:"app-hello",
    imports:[FormsModule],
    templateUrl:"./hello.component.html",
    styleUrls:["./hello.component.css"]
})
export class HelloWorldComponent{
    // title = "WELCOME TO REACT JS";
    name = "method call";
    color="orange";
    getTitle(){
        return this.name;
    }
    getMax(first:number,second:number){
        return Math.max(first,second);
    }
}