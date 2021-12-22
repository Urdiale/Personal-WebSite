import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Personal-Website';
  numero=1;
  ngOnInit(): void {
    const x=10;

    console.log(x+x)
  }
  somar1(){
    this.numero=this.numero+1
  }
  subtrair1(){
    this.numero=this.numero-1
  }

}
