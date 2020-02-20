import { Injectable } from '@angular/core';
import {IEntry} from '../models/entry';
import {Observable} from 'rxjs';
import {HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class EntryService {


  private _url: string = "https://sonovisionwebapp.azurewebsites.net/api/artist/all";
  private _urlSearch:string ="https://sonovisionwebapp.azurewebsites.net/api/artist/search?valueToSearch=";
  public headers = new HttpHeaders();
  
  
  constructor(private http:HttpClient) { }



  public getEntries():Observable<IEntry[]>
  {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS');
    this.headers.append('Access-Control-Allow-Credentials', 'true');
    this.headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent');

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {                                                                                                                                                                                 
      headers: new Headers(headerDict), 
    };
     console.log("entrsdsfsdfeis");
    //GET call to api to retrieve all albums from the XML file.
    return this.http.get<IEntry[]>(this._url,{headers: this.headers});
  }

  public search(txtToSearch:string):Observable<IEntry[]>
  {
    //GET call to api to retrieve the Artis, title, or track entered in the search box.
    return this.http.get<IEntry[]>(this._urlSearch + txtToSearch);
  } 
}
