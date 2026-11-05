import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search', 
  standalone: true // for importing
})
export class SearchPipe implements PipeTransform {
  
  transform(items: any[], searchText: string): any[] {
    // Default for empty arrays
    if (!items) return [];
    
    // Default for ALL items if there are no conditions
    if (!searchText || searchText.trim() === '') return items;
    
    //Handles case sensitivity
    searchText = searchText.toLowerCase().trim();

    // Filtering
    return items.filter(item => {
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}