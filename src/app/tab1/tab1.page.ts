import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { AddToCartPage } from '../pages/add-to-cart/add-to-cart.page';
import { CartPage } from '../services/cart/cart.page';
import { ProductsPage } from '../services/products/products.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  // set app banner slides
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
  };

  bannerImages: any = [];
  products: any = [];

  constructor(
    public productService : ProductsPage,
    public routerOutlet : IonRouterOutlet,
    public modalCtrl : ModalController,
    public cart : CartPage,
    private router: Router
  ) {
    this.bannerImages = this.productService.bannerImages;
    this.products = this.productService.products;
  }

  async addToCartModal(item) {
    console.log('item_id :>> ', item);
    let isAdded = this.cart.isAddedToCart(item.id);

    if ( !isAdded ) {
      this.cart.placeItem(item);
      const modal = await this.modalCtrl.create({
        component: AddToCartPage,
        cssClass: 'add-to-cart-modal',
        presentingElement: this.routerOutlet.nativeEl
      });
  
      await modal.present();
      
      await modal.onWillDismiss().then((result) => {
        console.log('result :>> ', result);
      }).catch((err) => {
        console.log('err :>> ', err);
      });

    } else {
      this.router.navigate(['/tabs/tab2']);
    }
    
  }

}
