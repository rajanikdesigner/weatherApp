import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Subscription
  private apiSubscription = new Subscription();

  // Public Properties
  public loader: boolean = false;

  constructor(private _loaderService: LoaderService) {}

  ngOnInit() {
    const loaderSubscription = this._loaderService.loader.subscribe((response: boolean) => {
      if (response != this.loader) {
        this.loader = response;
      }
    })
    this.apiSubscription.add(loaderSubscription);
  }
}
