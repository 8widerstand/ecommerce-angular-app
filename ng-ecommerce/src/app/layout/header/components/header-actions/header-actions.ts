import {Component} from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header-actions',
  imports: [
    MatIconButton,
    MatIcon,
    MatButton,
    RouterLink
  ],
  templateUrl: './header-actions.html',
  styleUrls: ['./header-actions.scss', 'header-actions.tw.css']
})
export class HeaderActions {

}
