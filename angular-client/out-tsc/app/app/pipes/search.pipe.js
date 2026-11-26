import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchPipe {
    transform(items, searchText) {
        // Default for empty arrays
        if (!items)
            return [];
        // Default for ALL items if there are no conditions
        if (!searchText || searchText.trim() === '')
            return items;
        //Handles case sensitivity
        searchText = searchText.toLowerCase().trim();
        // Filtering
        return items.filter(item => {
            return JSON.stringify(item).toLowerCase().includes(searchText);
        });
    }
    static { this.ɵfac = function SearchPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SearchPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "search", type: SearchPipe, pure: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchPipe, [{
        type: Pipe,
        args: [{
                name: 'search',
                standalone: true // for importing
            }]
    }], null, null); })();
