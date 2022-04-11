import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPageTwoComponent } from '../dialog-page-two/dialog-page-two.component';
import { DialogPageComponent } from '../dialog-page/dialog-page.component';
import { Router } from '@angular/router';
import { DialogProjectOneComponent } from '../smart-car/dialog-project-one.component';
import { OasisComponent } from '../oasis/oasis.component';
import { RacingGameComponent } from '../racing-game/racing-game.component';
import { MoodyComponent } from '../moody/moody.component';
import { ThesisComponent } from '../thesis/thesis.component';
import { MenstrualHealthComponent } from '../menstrual-health/menstrual-health.component';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
  }

  openDialogCar() {
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

  openDialogOasis() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(OasisComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.router.events
      .subscribe(() => {
        dialogRef.close();
      });
  }

  openDialogRacingGame() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(RacingGameComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.router.events
      .subscribe(() => {
        dialogRef.close();
      });
  }

  openDialogMoody() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(MoodyComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.router.events
      .subscribe(() => {
        dialogRef.close();
      });
  }

  openDialogThesis() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ThesisComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.router.events
      .subscribe(() => {
        dialogRef.close();
      });
  }

  openDialogHealth(params: string) {
    this.dialog.closeAll();
    console.log(params);
    const dialogRef = this.dialog.open(MenstrualHealthComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.router.events
      .subscribe(() => {
        dialogRef.close();
      });
  }

}
