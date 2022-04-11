import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPageTwoComponent } from '../dialog-page-two/dialog-page-two.component';
import { DialogPageComponent } from '../dialog-page/dialog-page.component';
import { Router } from '@angular/router';
import { DialogProjectOneComponent } from '../dialog-project-one/dialog-project-one.component';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(DialogProjectOneComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.router.events
      .subscribe(() => {
        dialogRef.close();
      });
  }

}
