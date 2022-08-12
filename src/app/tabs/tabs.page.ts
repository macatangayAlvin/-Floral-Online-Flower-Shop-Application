import { Component } from '@angular/core';
import { CartPage } from '../services/cart/cart.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public cart : CartPage
  ) {}

}
