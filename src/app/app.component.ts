import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorldAJS';
  imgUrl;
  url;

  ngOnInit(): void {
    this.title = "Hello From BridgeLabz"
    this.imgUrl="../assets/fav.jpg";
    this.url="https://www.bridgelabz.com";
  }

  onClick($event){
    console.log("Save button is clicked!!", $event);
    window.open(this.url, "_blank");
  }
}
