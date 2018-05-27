import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = {
    username: '',
    password: '',
    remember: false
  };

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>
  ) { }

  onSubmit() {
    console.log("User: ", this.user);
    this.dialogRef.close();
  }

}
