import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTransferService} from 'src/app/services/data-transfer.service';
import {EntryService} from 'src/app/services/entry.service'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public _data:any;
  public searchString:string;
  private _errorMsg:string;
  public artist:boolean= false;
  public album:boolean =false;
  public track:boolean=false;

  constructor(private entryService:EntryService,public activatedRoute: ActivatedRoute,private dataTransfer:DataTransferService) { }

  ngOnInit(): void {
    //this._data = this.dataTransfer.getData();
    //console.log(this._data);
  }

onSearch($event){
    this._data=null;
    this.entryService.search(this.searchString).subscribe(
      data =>{

       
       if(data !=null)
       {
        let badResponse = data;
        let badResponseProps = Object.keys(badResponse);
        let goodResponse = [];
 
        for(var prop of badResponseProps){
          goodResponse.push(badResponse[prop]);
        }
        
        this._data = goodResponse;
      
        //Determine what field is being searched.
        if(this._data[1] == this.searchString)
        {
          this.album = true;
          this.artist = false;
          this.track=false;
          
        }
        else if(this._data[2] == this.searchString)
        {
          this.album = false;
          this.artist = true;
          this.track=false;
       
        }
        else
        {
          this.album = false;
          this.artist = false;
          this.track=true;
         
        }
      }
        
      },
      error => {
        this._errorMsg = error.message;
      }
    );
    
  }


}
