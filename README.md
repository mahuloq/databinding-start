1. Seperated text that was originally in app.component.html and .ts into own seperate components. This broke the file, as the components could not communicate.

2. @Input() element: { type: string; name: string; content: string }; this allows you to bind to your own propert. Add Input to Import

3. Can assign alias by putting the alias in the Input('AliasHere')

4. import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Output() serverCreated = new EventEmitter<{
serverName: string;
serverContent: string;
}>();
@Output() blueprintCreated = new EventEmitter<{
serverName: string;
serverContent: string;

onAddServer() {
this.serverCreated.emit({
serverName: this.newServerName,
serverContent: this.newServerContent,
});
}

onAddBlueprint() {
this.blueprintCreated.emit({
serverName: this.newServerName,
serverContent: this.newServerContent,
});
}

5. Encapuslation is how Angular does CSS.
   // encapsulation: ViewEncapsulation.Emulated is the default, but None or Native (ShadowDom) also work
   with None making the CSS of the file apply globaly

6. Local References

onAddServer(nameInput: HTMLInputElement) {
this.serverCreated.emit({
serverName: nameInput.value,
serverContent: this.newServerContent,
});
}

onAddBlueprint(nameInput: HTMLInputElement) {
this.blueprintCreated.emit({
serverName: nameInput.value,
serverContent: this.newServerContent,
});
}

<input type="text" class="form-control" #serverNameInput />
<label>Server Content</label>
<input type="text" class="form-control" [(ngModel)]="newServerContent" />
<br />
<button class="btn btn-primary" (click)="onAddServer(serverNameInput)">
Add Server
</button>
<button class="btn btn-primary" (click)="onAddBlueprint(serverNameInput)">
Add Server Blueprint
</button>

7. @ViewChild

By changing

<input type="text" class="form-control" [(ngModel)]="newServerContent" />

to

<input type="text" class="form-control" #serverContentInput />

we can acess the data in our TS file by changing

newServerContent = "";

to

@ViewChild("serverContentInput", { static: true })
serverContentInput: ElementRef;

you also have to add elementref and view child to the import list.

You can then use the information

    onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });

}

onAddBlueprint(nameInput: HTMLInputElement) {
this.blueprintCreated.emit({
serverName: nameInput.value,
serverContent: this.serverContentInput.nativeElement.value,

8. <ng-content></ng-content>
   replacing this below in server element
   tag in a component will allow the passing of content in the app component between

<p>
        <strong *ngIf="serverElement.type === 'server'" style="color: red">{{
          serverElement.content
        }}</strong>
        <em *ngIf="serverElement.type === 'blueprint'">{{
          serverElement.content
        }}</em>
      </p>
    </app-server

    here we had to replace element with serverElement

9. ngOnInit()

ngOnChanges - Called after a bouind input propert changes.

ngOnInit- Called once the component is initialized.

ndDoCheck - Called during every change detection run.

ngAfterContentInit - called after content (ng-contet) has been projected into view

ngAfterContentChecked - Called every time the projected content has been checked.

ngAfterViewInit - Called after the component's view (and child views) has beeen initialized.

ngAfterViewChecked - Called every time the view (and Child views) have been checked

ngOnDestroy - Called ocne the component is about to be destroyed.

10. LifeCycle Hooks and Templates
