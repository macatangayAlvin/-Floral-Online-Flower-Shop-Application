import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilityPage } from '../utility/utility.page';

@Injectable({
  providedIn: 'root'
})
export class ProductsPage {
  
  brands: any = [];
  sizes: any = [];
  
  selectedBrands: any = [];
  selectedSizes: any = [];

  priceRange: PriceRange = {
    lower: 0,
    upper: 5000,
    applied: false
  };

  sort: Sort = {
    latest: false,
    price_lth: false,
    price_htl: false
  };

  items: any = [];
  item: any = {};
  filterItems: any = [];

  cartCount: number = 0;

  listBy: ListBy = {
    nav: false,
    search: false,
    banner: false,
    details: false
  };

  searchTerm: string = '';
  searchIn: string;
  bannerId: string;

  show_result_size: boolean = true;

  bannerImages = [
    {
      imgurl: 'assets/images/image1.jpg'
    }, {
      imgurl: 'assets/images/image2.jpg'
    }, {
      imgurl: 'assets/images/image3.jpg'
    }
  ];

  products = [
    {
      id : 1,
      imgurl: 'assets/images/image1.jpg',
      name: 'Beautiful You',
      category: 'daisy',
      price: 1299,
      totalStock: 20
    }, {
      id : 2,
      imgurl: 'assets/images/image3.jpg',
      name: 'Sunny Smile',
      category: 'sunflower',
      price: 1499,
      totalStock: 20
    }, {
      id : 3,
      imgurl: 'assets/images/image2.jpg',
      name: 'Queen Thalia',
      category: 'tulip',
      price: 2399,
      totalStock: 20
    }, {
      id : 4,
      imgurl: 'assets/images/image4.jpg',
      name: 'Pure Love',
      category: 'whiterose',
      price: 1699,
      totalStock: 20
    }, {
      id : 5,
      imgurl: 'assets/images/image5.jpg',
      name: 'Fall For You',
      category: 'rose',
      price: 1599,
      totalStock: 20
    }, {
      id : 6,
      imgurl: 'assets/images/image6.jpg',
      name: 'All My Love',
      category: 'pinkrose',
      price: 1899,
      totalStock: 20
    }, {
      id : 7,
      imgurl: 'assets/images/image7.jpg',
      name: 'True of Love',
      category: 'redrose',
      price: 1999,
      totalStock: 20
    }, {
      id : 8,
      imgurl: 'assets/images/image8.jpg',
      name: 'Sunny Morning',
      category: 'sunflower',
      price: 1999,
      totalStock: 20
    }
  ];

  categories : any = [
    {
      category : 'daisy'
    }, {
      category : 'tulip'
    }, {
      category : 'sunflower'
    }, {
      category : 'whiterose'
    }
  ];

  constructor(
    private modalCtrl: ModalController,
    private utility: UtilityPage,
  ) { 
    
  }

  searchProducts ( term: string, sort: string = '' ) {
    this.utility.presentLoading('Please wait.!.');

    this.resetItems();
    this.listBy.search = true;

  }

  getProductsByDepartment(department: string, sort: string = '' ) {
    console.log("search product by department :", department);
    this.utility.presentLoading('Loading...');
    
  }

  initProductList(items: any) {
    this.items = items;
    this.filterItems = items;
    
    this.setSizes();
    this.setBrands();
    this.showResultCount();
  }

  applySort ( column, order, type ) {
    this.uncheckSorts();
    
    console.log('type :>> ', type, this.sort);

    if ( this.listBy.banner ) {
      
    } else if ( this.listBy.nav ) {
      this.resetItems();
      this.listBy.nav = true;

      this.getProductsByDepartment(this.searchIn, `&column=${column}&order=${order}`);
    } else if ( this.listBy.search ) {
      this.searchProducts(this.searchIn, `&column=${column}&order=${order}`);
    }

    this.sort[type] = true;

  }

  applyLocalSort ( column, order, type )  {
    this.uncheckSorts();
    this.sort[type] = true;
    console.log('column :>> ', column);
    this.items = this.items.sort((a, b) => {
      console.log('sort :>> ', a, b);
      if ( order === 'desc' ) {
        return a[column] > b[column];
      } else {
        return a[column] < b[column];
      }
      
    })
  }

  applyFilter() {
    console.log(this.selectedBrands, this.selectedSizes, this.priceRange);
    if ( this.selectedBrands.length > 0 || this.selectedSizes.length > 0 || this.priceRange.applied ) {
      console.log('Filter applied :>> ');
      this.items = [];

      for(let i = 0; i < this.filterItems.length; i++) {
        let foundBrand = true, foundSize = true, foundPrice = true;

        if ( this.selectedBrands.length > 0 ) {
          foundBrand = this.selectedBrands.some( val => val.brand.toLocaleLowerCase() === this.filterItems[i]['brand'].toLocaleLowerCase() && val.isChecked);
        }
        
        if ( this.selectedSizes.length > 0 ) {
          foundSize = this.selectedSizes.some( val => val.size == this.filterItems[i]['size'] && val.isChecked);
        }
        
        if ( this.priceRange.applied ) {
          let price = this.filterItems[i]['rsp'];
          price = !price ? this.filterItems[i]['mrp'] : price;
          foundPrice = ( price >= this.priceRange.lower && price <= this.priceRange.upper );
        }
        
        if(foundBrand && foundSize && foundPrice) {
          this.items.push(this.filterItems[i]);
        }
        
      }
    } else {
      console.log('No Filter found:>> ');
      this.items = this.filterItems;
    }
  } 


  showResultCount() {
    this.show_result_size = true;
    setTimeout(() => {
      this.show_result_size = false;
    }, 2000);
  }

  getBrands() {
    let tempBrands = [];
    this.brands = [];
    this.selectedBrands = [];

   
  }
 
  setBrands() {
    let tempBrands = [];
    this.brands = [];
    this.selectedBrands = [];

    this.items.forEach(val => {
      if ( val.brand && !tempBrands.includes(val.brand) ) {
        tempBrands.push(val.brand); 
        this.brands.push({ 
          'isChecked': false, 
          'brand': val.brand 
        });

      }
    });

    console.log('set brands :>> ', this.brands);

  }

  setSizes() {

    let tempSizes = [];
    this.sizes = [];
    this.selectedSizes = [];

    this.items.forEach(val => {
      console.log('val :>> ', val);
      if ( val.size && !tempSizes.includes(val.size) ) {
          tempSizes.push(val.size);

          this.sizes.push({ 'isChecked': false, 'size': val.size });
      }

    });

    console.log('sizes :>> ', this.sizes);

  }

  resetItems() {
    this.items = [];
    this.filterItems = [];

    this.searchIn = '';
    this.searchTerm = '';
    this.uncheckFilters();
    this.uncheckSorts();
    this.defaultListBy();
  } 

  uncheckSorts() {
    this.defaultSorting();
  }

  uncheckFilters() {
    this.selectedBrands = [];
    this.selectedSizes = [];
    this.defaultPriceRange();

    for( let i = 0; i < this.brands.length; i++) {
      this.brands[i].isChecked = false;
    }

    for( let i = 0; i < this.sizes.length; i++) {
      this.sizes[i].isChecked = false;
    }
  }

  defaultPriceRange() {
    this.priceRange = {
      applied:  false,
      lower : 0,
      upper : 5000
    }
    
  }

  defaultSorting() {
    Object.keys(this.sort).forEach(key => {
      this.sort[key] = false;
    })
  }

  defaultListBy() {
    Object.keys(this.listBy).forEach(key => {
      this.listBy[key] = false;
    })
  }

}

interface PriceRange {
  lower: any,
  upper: any,
  applied: boolean
}

interface Sort {
  latest: boolean,
  price_lth: boolean,
  price_htl: boolean
}

interface ListBy {
  search: boolean,
  banner: boolean,
  nav: boolean,
  details: boolean
}