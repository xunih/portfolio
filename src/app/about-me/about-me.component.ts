import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPageTwoComponent } from '../dialog-page-two/dialog-page-two.component';
import { DialogPageComponent } from '../dialog-page/dialog-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(DialogPageComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.router.events
      .subscribe(() => {
        dialogRef.close();
      });
  }
  
  openDialogTwo() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(DialogPageTwoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.router.events
      .subscribe(() => {
        dialogRef.close();
      });
  }
}
