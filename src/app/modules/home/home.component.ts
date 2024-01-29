import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeSlide = 0;
  audioData: any;
  showAbout: boolean = false;
  showHome: boolean = true;
  constructor(
    public dataService: SharedDataService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit() {
    this.audioData = this.dataService.audioData.map(x => {
      return {
        ...x,
        link: this.sanitizer.bypassSecurityTrustResourceUrl(x.link)
      };
    });
  }

  showSection(key: string) {
    if (key == 'home') {
      this.showAbout = false;
      this.showHome = true;
    } else {
      this.showAbout = true;
      this.showHome = false;
    }
    console.log(key);

  }
  prevSlide() {
    this.activeSlide = (this.activeSlide - 1 + this.audioData.length) % this.audioData.length;
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.audioData.length;
  }

  redirectToClassLinks() {
    this.router.navigate(['/class-room']);
  }
}