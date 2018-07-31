import { Injectable } from '@angular/core';

import DmnModdle from 'dmn-moddle';

@Injectable({
  providedIn: 'root'
})
export class DmnService {

  dmn: DmnModdle = new DmnModdle();
  data;
  constructor() { }

  parse(): any{
    this.dmn.fromXML(this.data, 'dmn:Definitions', (err, response) => {

      if (err) {
        console.log(err);
      }

      if(response){
      return response;
      }
      
      console.log(response == true);
      //this.dataService.setDMN(response); //set current DMN
    });

  
}
}
