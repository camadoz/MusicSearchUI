import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private router:Router) { }

  private _data;

  setData(data){
    this._data= data
  }

  getData(){
    let temp = this._data;
    this.clearData();
    return temp;
  }

  clearData(){
    this._data = undefined;
  }
}
