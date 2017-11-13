import {Component , OnInit } from '@angular/core';
import {Iproduct} from './products';
import {ProductService} from './product.service';


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product-List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  _ListFilter:string;
  get ListFilter(): string {
    return this._ListFilter;
  }
  set  ListFilter(value: string){
    this._ListFilter = value;
    this.filteredProduct = this.ListFilter ? this.PerformFilter(this.ListFilter): this.products;
  }
  filteredProduct: Iproduct[];
  products: Iproduct[] = [];

      toggleImage(): void {
         this.showImage = !this.showImage;
      }

      constructor(private _productservice: ProductService) {

      }

      PerformFilter(filterBy  : string):Iproduct[] {
        return this.products.filter((product: Iproduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1
          );

      }

      ngOnInit():void {
        this._productservice.getProducts().
          subscribe(products => {this.products = products
                   this.filteredProduct = this.products},
                    error => this.errorMessage = <any>error);

      }
}
