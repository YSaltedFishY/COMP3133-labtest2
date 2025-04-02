import { Component, EventEmitter, Output } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { Launch } from '../models/launch.model';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 

@Component({
  selector: 'app-missionfilter',
  imports: [MatCardModule,MatButtonModule,FormsModule,MatInputModule,MatFormFieldModule],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  year: string = ''

  @Output() filteredMissions = new EventEmitter<Launch[]>()

  constructor(private spacexService: SpacexService){}

  filterMissions(): void {
    if (!this.year.trim()) return;

    this.spacexService.getLaunchesByYear(this.year.trim()).subscribe(data => {
      this.filteredMissions.emit(data);
    });
  }

}
