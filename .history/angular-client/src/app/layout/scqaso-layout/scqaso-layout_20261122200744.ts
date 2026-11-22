import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-scqaso-layout',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './scqaso-layout.html',
  styleUrl: './scqaso-layout.css',
})
export class ScqasoLayout {
  
}
