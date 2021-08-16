import { Component } from '@angular/core';
import { Router, RouteConfigLoadEnd, RouteConfigLoadStart, NavigationStart } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Title } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-currentcos';
  loadingBar: any;

  constructor(private loadingBarService: LoadingBarService, private router: Router, public titleService: Title) {
    this.loadingBar = this.loadingBarService.useRef();

    // console.log($);
    let asyncLoadCount = 0;
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(title);
      }
      if (event instanceof RouteConfigLoadStart) {
        asyncLoadCount++;
      } else if (event instanceof RouteConfigLoadEnd) {
        asyncLoadCount--;
      }
      !!asyncLoadCount ? this.loadingBar.start() : this.loadingBar.stop();
    });
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
