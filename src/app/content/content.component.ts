import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { fromEvent, merge, of, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  networkStatus: any;
  networkStatus$: Subscription = Subscription.EMPTY;
  pageTitle: any;
  selectProject: any = 'festum-evento';

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private toastr:ToastrService
  ) {
    router.events.subscribe((val: any) => {
      if ((!localStorage.getItem("accessToken") || localStorage.getItem("accessToken") == null)) {
        localStorage.clear();
        location.reload();
      }
    });
  }

  ngOnInit(): void {
    this.checkNetworkStatus();
    // this.router.events.pipe(filter(event => event instanceof NavigationEnd),).subscribe(() => {
    //   var rt = this.getChild(this.activatedRoute)
    //   rt.data.subscribe((data: any) => {
    //     this.titleService.setTitle(data.title)
    //   });
    // });

    this.router.events.subscribe(event => {
      let route: ActivatedRoute = this.router.routerState.root;
      let routeTitle = '';
      while (route!.firstChild) {
        route = route.firstChild;
      }
      if (route.snapshot.data['title']) {
        routeTitle = route!.snapshot.data['title'];
      }
      this.pageTitle = routeTitle;
    });
    
  
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          this.pageTitle = routeTitle;
        })
      )
      .subscribe((title: any) => {
        if (title) {
          this.titleService.setTitle(`${title}`);
        }
      });
      this.pageTitle = this.activatedRoute.snapshot.component?.name == "ContentComponent" ? "Dashboard" : this.activatedRoute.snapshot.data[0].title;
  }

  // getChild(activatedRoute: ActivatedRoute): any {
  //   if (activatedRoute.firstChild) {
  //     return this.getChild(activatedRoute.firstChild);
  //   } else {
  //     return activatedRoute;
  //   }

  
  

  ngOnDestroy(): void {
    this.networkStatus$.unsubscribe();
  }

  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    )
      .pipe(map(() => navigator.onLine))
      .subscribe(status => {
        this.networkStatus = status;
      });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.clear();
    this.router.navigate(['']);
    this.toastr.success('Logged Out Successfully!', 'Success');
    // this.router.events.subscribe((event: any) => {
    //   if (event instanceof NavigationEnd) {
    //     this.router.navigate([event.url]);
    //     location.reload();
    //   }
    // })
  }

}
