import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((param) => {
      const { id } = param;
      this.productService.getProductById(id!).subscribe((data) => {
        console.log(data);
        this.form.patchValue(data);
      });
    });
  }
  form!: FormGroup;
  submitted = false;
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(255),
      ]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      desc: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(255),
      ]),
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value);
      this.productService.createProduct(this.form.value).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
