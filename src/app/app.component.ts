import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorldAJS';
  imgUrl="../assets/fav.jpg";
  url="https://www.bridgelabz.com";
  userName: string = "";

  ngOnInit(): void {
    this.title = "Hello From BridgeLabz"
  }

  onClick($event){
    console.log("Save button is clicked!!", $event);
    window.open(this.url, "_blank");
  }
}
