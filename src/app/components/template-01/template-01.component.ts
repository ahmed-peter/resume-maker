import { Component } from '@angular/core';
// user model
import { UserInformation } from '../../model/userinfo';


@Component({
  selector: 'app-template-01',
  templateUrl: './template-01.component.html',
  styleUrls: ['./template-01.component.css']
})
export class Template01Component {

  userinfo: UserInformation = new UserInformation();

  
  constructor() { }

  }

//   ngOnInit() {
  	

// };

