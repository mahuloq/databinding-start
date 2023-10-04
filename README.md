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
