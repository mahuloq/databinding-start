import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };

  @Input() name: string;

  constructor() {
    console.log("constructer called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Called");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy Called");
  }
}
