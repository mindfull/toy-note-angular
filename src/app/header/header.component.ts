import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }

  signOut() {
    this.afAuth.auth.signOut()
      .then((result) => {
        this.router.navigate(['login']);
      });
  }

}
