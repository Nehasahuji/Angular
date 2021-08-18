import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  secretPwd: boolean = false;
  log=[];


  onToggleDetails(){
    this.secretPwd = !this.secretPwd;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date);
  
  }



}
