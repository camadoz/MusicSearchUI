import { Component, OnInit } from '@angular/core';
import {EntryService} from 'src/app/services/entry.service'
import { IEntry } from 'src/app/models/entry';

@Component({
  selector: 'app-fullview',
  templateUrl: './fullview.component.html',
  styleUrls: ['./fullview.component.css']
})
export class FullviewComponent implements OnInit {
 
  public entries :IEntry[];
  private _errorMsg:string;

  constructor(private entryService:EntryService) { }

  ngOnInit(): void {
    this.entryService.getEntries().subscribe(
      data =>{
        let badResponse = data;
        let badResponseProps = Object.keys(badResponse);
        let goodResponse = [];
        for(var prop of badResponseProps){
          goodResponse.push(badResponse[prop]);
        }
        
        this.entries = goodResponse[0];
        console.log(this.entries);
      },
      error => {
        this._errorMsg = error.message;
      }
      
      );
  
  }

}
