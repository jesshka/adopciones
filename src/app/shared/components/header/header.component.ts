import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentView: string = 'inicio';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const urlChunks: string[] = this.router.url.split('/');

    if(!!urlChunks[1]) {
      this.currentView = urlChunks[1];
    }

    // To get url params
    // this.route.paramMap.subscribe((urlParams: any) => {});
  }

}
