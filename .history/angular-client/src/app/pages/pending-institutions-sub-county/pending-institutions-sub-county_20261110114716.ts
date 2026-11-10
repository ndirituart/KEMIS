import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe'; //for filtering

@Component({
  selector: 'app-pending-institutions-sub-county',
 imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './pending-institutions-sub-county.html',
  styleUrl: './pending-institutions-sub-county.css',
})
export class PendingInstitutionsSubCounty {}

