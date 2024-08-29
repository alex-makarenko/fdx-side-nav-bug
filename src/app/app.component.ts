import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CxSideNavigationModule} from '@fundamental-ngx/cx/side-navigation';
import {CxNestedListModule} from '@fundamental-ngx/cx/nested-list';
import {NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CxSideNavigationModule, CxNestedListModule, NgTemplateOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
