import {Component, HostListener, OnInit} from '@angular/core';
import {ServiceService} from "../../services/service.service";
import {Service} from "../../modeles/Service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  _services:Service[]=[]

  constructor(private service:ServiceService) {
  }

  ngOnInit(): void {
    this.service.getSetrvices().subscribe({
      next:res=>{
        this._services=res
      }
    })
    }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.querySelector('.back-to-top') as HTMLElement;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
