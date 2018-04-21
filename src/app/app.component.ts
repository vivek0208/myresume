import { Component } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  maintenanceFlag: any;
  showLoader: boolean;
  showMenuComponent = true;
  title = '';

  constructor(private route: ActivatedRoute,
    private routerService: Router,
    private titleService: Title,
    private loaderService: LoaderService,
    private meta: Meta) {


    this.maintenanceFlag = this.meta.getTag('name=maintenanceMode');
    if (this.maintenanceFlag) {
      this.maintenanceFlag = this.maintenanceFlag.content;
    }

    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
    routerService.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        this.title = event.state.root.children[0].data.title ||
          event.state.root.children[0].children[0].data.title;
        this.titleService.setTitle(this.title + '-Mysite');
      }
      switch (this.routerService.url) {
        case '/login':
        case '/register':
        case '/forgot':
          this.showMenuComponent = false;
          break;
        default:
          if (this.title === 'Page not Found' || this.title === 'Reset Password') {
            this.showMenuComponent = false;
          } else {
            this.showMenuComponent = true;
          }
          break;
      }
    });
  }
}
