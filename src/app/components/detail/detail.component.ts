import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Iproduct } from 'src/interface/product';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  product!:Iproduct;
  constructor(private activatedRoute: ActivatedRoute,private productService: ProductService) {
    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.productService.getProductById(id!).subscribe((data) => {
        this.product = data;
        
      });
    });
  }
}
