import {Worker} from "./worker";
import {Client} from "./Client";

export interface Demmande{
  id:number
  date:Date
  worker:Worker
  client:Client
  message:String
}
