import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { PermissionService } from './permissions/permission.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  subscription!: Subscription;

  navLinks = [
    { link: 'permissions', icon: 'grading' },
    { link: 'job', icon: 'work' },
    { link: 'candidate', icon: 'person' },
    { link: 'settings', icon: 'settings' },
    { link: 'reports', icon: 'book' },
    { link: 'hire', icon: 'handshake' },
    { link: 'department', icon: 'add_task' },
  ];

  constructor(private permissionService: PermissionService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.subscription = this.breakpointObserver.observe(['(max-width:50em)']).subscribe(result => {
      this.sidenav.mode = result.matches ? 'over' : 'side';
      if (result.matches) this.sidenav.close();
      else this.sidenav.open();
    });
  }

  hasPermission(name: string): boolean {
    if (name === 'permissions') return true;
    return this.permissionService.hasPermission(name);
  }

  onNavigate() {
    if (this.sidenav.mode === 'over') this.sidenav.close();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
