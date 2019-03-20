import { City } from './City';

import { Street } from './Street';

import { Address } from './Address';

export class SearchCriteria {
    city: number;

    street: number;

    address: number;

    page: number;

    size: number;

    tenderIds: number[];
    
    constructor(city: City, street:  Street, address: Address){
        this.city = city.id;
        if(street != null){
            this.street = street.id;
        }
        if(address != null){
            this.address = address.id;
        }
    }
}