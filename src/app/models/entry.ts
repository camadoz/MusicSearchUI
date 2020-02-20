import { ITrack } from './Track';

export interface IEntry{
    Title:string,
    Artist:string,
    Category:string,
    tracks:ITrack[]
}