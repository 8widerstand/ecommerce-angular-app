import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {HeaderActions} from './components/header-actions/header-actions';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    HeaderActions
  ],
  templateUrl: './header.html',
  styleUrls:[ './header.scss','header.tw.css']
})
export class Header {

}
