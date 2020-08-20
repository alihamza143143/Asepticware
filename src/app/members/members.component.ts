import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members = [];
  show: boolean;
  mId: String;
  fname: String;
  lname: String;
  jTitle: String;
  rTeam: String;
  status: String;
  constructor(public appService: AppService, private router: Router) {
   
  }

  ngOnInit() {
    this.show = false;
    this.appService.getMembers().subscribe(members => (this.members = members));
  }

  goToAddMemberForm() {
    this.show = true;

  }
  submitMember() {
    this.show = false;

    this.appService.setMembers(this.mId, this.fname, this.lname, this.jTitle, this.rTeam, this.status)
      .subscribe(members => (this.members = members));

  }

}
