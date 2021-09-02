import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private currentFlag: boolean = false;
  private _loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loader: Observable<boolean> = this._loader.asObservable();

  constructor() { }

  setLoader(flag: boolean) {
    // If this method calls from multiple time it will not repeating same flag to set everytime if flag change then and then it will get change
    if (flag != this.currentFlag) {
      this.currentFlag = flag;
      this._loader.next(flag);
    }
  }
}
