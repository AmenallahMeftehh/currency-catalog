import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

    transform(value: any, filter: any, selectedValue: any): any {
        if (value && value.length && filter && filter !== '' && selectedValue && selectedValue != '') {
            if (selectedValue === 'id') {
                return value.filter(item => {
                    if (item.id !== filter) {
                        return false;
                    }
                    return true;
                });
            } else if (selectedValue === 'code') {
                return value.filter(item => {
                    if (item.attributes.code !== filter) {
                        return false;
                    }
                    return true;
                });
            } else if (selectedValue === 'name') {
                return value.filter(item => {
                    if (item.attributes.name !== filter) {
                        return false;
                    }
                    return true;
                });
            } else if (selectedValue === 'currency_type') {
                return value.filter(item => {
                    if (item.attributes.currency_type !== filter) {
                        return false;
                    }
                    return true;
                });
            } else {
                return value;
            }
        } else {
            return value;
        }
    }
}
