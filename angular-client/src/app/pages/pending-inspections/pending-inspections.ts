import { Component } from '@angular/core';
import { InspectedSchools } from '../inspected-schools/inspected-schools';

@Component({
  selector: 'app-pending-inspections',
  imports: [InspectedSchools],
  templateUrl: './pending-inspections.html',
  styleUrl: './pending-inspections.css',
})
export class PendingInspections {}
