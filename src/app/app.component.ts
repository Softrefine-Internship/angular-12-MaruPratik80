import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, Subscription } from 'rxjs';
import { PermissionService } from './permissions/permission.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  resizeInterval!: any;

  navLinks = [
    { link: 'permissions', icon: 'grading' },
    { link: 'job', icon: 'work' },
    { link: 'candidate', icon: 'person' },
    { link: 'settings', icon: 'settings' },
    { link: 'reports', icon: 'book' },
    { link: 'hire', icon: 'handshake' },
    { link: 'department', icon: 'add_task' },
  ];

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    if (window.innerWidth > 600) this.sidenav.open();
    else this.sidenav.close();
    this.resizeInterval = setInterval(() => {
      this.sidenav.mode = window.innerWidth > 600 ? 'side' : 'over';
    }, 1000);
  }

  hasPermission(name: string): boolean {
    if (name === 'permissions') return true;
    return this.permissionService.hasPermission(name);
  }

  onNavigate() {
    if (this.sidenav.mode === 'over') this.sidenav.close();
  }

  ngOnDestroy(): void {
    clearInterval(this.resizeInterval);
  }
}
