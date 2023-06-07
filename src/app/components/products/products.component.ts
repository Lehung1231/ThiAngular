import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Iproduct } from 'src/interface/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Iproduct[] = [];
  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe((data) => {
      this.products = data;
      console.log(this.products);     
    });
  }
  viewDetail(id: string) {
    console.log(id);
  }
  onRemove(id: string) {
    this.productService.deleteProduct(id).subscribe((data) => {
      this.productService.getProduct().subscribe((data) => {
        this.products = data;
        console.log(this.products); 
      });
    });
    
  }
}
