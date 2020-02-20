import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EntryService} from 'src/app/services/entry.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public albumDetails;
  public _data:any;
  public searchString:string;
  private _errorMsg:string;
  public artist:boolean= false;
  public album:boolean =false;
  public track:boolean=false;

  constructor(private route:ActivatedRoute,private entryService:EntryService) { }

  ngOnInit(): void {
   this.albumDetails = this.route.snapshot.paramMap.get("album");
   this.onSearch();
  }

  onSearch(){
    this._data=null;
    this.entryService.search(this.albumDetails).subscribe(
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
        console.log(this._data);

        if(this._data[1] == this.searchString)
        {
          this.album = true;
          this.artist = false;
          this.track=false;
           console.log("Hyes Title");
        }
        else if(this._data[2] == this.searchString)
        {
          this.album = false;
          this.artist = true;
          this.track=false;
          console.log("Hyes artist");
        }
        else
        {
          this.album = false;
          this.artist = false;
          this.track=true;
          console.log("the track");
        }
      }
      
      },
      error => {
        this._errorMsg = error.message;
      }
    );
    
  }

}
