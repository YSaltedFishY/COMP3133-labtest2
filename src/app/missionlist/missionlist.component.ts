import { Component } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { Launch } from '../models/launch.model';
import { NgFor,NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';


@Component({
  selector: 'app-missionlist',
  imports: [NgFor,NgIf,MatCardModule,MatButtonModule,RouterModule,MissionfilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent {
  missions: Launch[] = []

  constructor(private spacexService: SpacexService){}

  ngOnInit(): void{
    this.spacexService.getAllLaucnhes().subscribe((data: Launch[]) =>{
      this.missions = data
    })
  }

}
