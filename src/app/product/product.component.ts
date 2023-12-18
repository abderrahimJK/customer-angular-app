import {Component, OnInit} from '@angular/core';
import {Product} from "../models/Product";
import {ProductService} from "../services/product.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products : Product[] | undefined;
  constructor(private productService: ProductService) { }
  ngOnInit(): void {

    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    })



  }

}
