import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareableServiceService {

  constructor() { }

  getWidget() {
    return {
      something: "foo"
    }
  }

}
