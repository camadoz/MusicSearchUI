import { Component, Input } from '@angular/core';
import {EntryService} from 'src/app/services/entry.service'
import { IEntry } from 'src/app/models/entry';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { DataTransferService} from 'src/app/services/data-transfer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-app';
  public searchString:string;
  
  //public entries :IEntry[];
  private _errorMsg:string;
  @Input() entries: IEntry[];

  constructor(private entryService:EntryService,private dataTransfer:DataTransferService,private router: Router) { }

  onSearch($event){
    
    this.entryService.search(this.searchString).subscribe(
      data =>{
        let badResponse = data;
        let badResponseProps = Object.keys(badResponse);
        let goodResponse = [];
        for(var prop of badResponseProps){
          goodResponse.push(badResponse[prop]);
        }
        
        this.entries = goodResponse;
        this.dataTransfer.setData(goodResponse);

        this.router.navigateByUrl('/search')
        console.log("from sender " + this.entries);
      },
      error => {
        this._errorMsg = error.message;
      }
    );
    
  }





}
