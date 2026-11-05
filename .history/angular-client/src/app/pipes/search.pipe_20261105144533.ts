import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search', 
  standalone: true // for importing
})
export class SearchPipe implements PipeTransform {
  
  transform(items: any[], searchText: string): any[] {
    // Default for empty arrays
    if (!items) return [];
    
    // 2. If search text is empty, return all items
    if (!searchText || searchText.trim() === '') return items;
    
    // 3. Make search text lowercase for case-insensitive matching
    searchText = searchText.toLowerCase().trim();

    // 4. Filter the array
    return items.filter(item => {
      // Convert the entire object to a JSON string and search through it
      // This means it searches across ALL columns (name, email, phone, etc.)
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }
}