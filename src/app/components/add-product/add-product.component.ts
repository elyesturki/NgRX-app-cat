import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { ProductsActionTypes } from 'src/app/state/product.state';
import { CustomValidator } from 'src/app/validators/customValidator';
import { EventDriverService } from '../../state/event.driver.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productFormGroup?: FormGroup;
  submitted: boolean = false;
  displaySuccessMessage = false;

  constructor(
      private formbuilder: FormBuilder,
      private productsService: ProductsService,
      private eventDriverService: EventDriverService
       ) { }

  ngOnInit(): void {
    this.productFormGroup = this.formbuilder.group({
      name: ["", Validators.required],
      price: [0, [Validators.required, CustomValidator.numeric]],
      quantity: [0, [Validators.required, CustomValidator.numeric]],
      selected: [true, Validators.required],
      available: [true, Validators.required],
    })
  }

  onAddProduct() {
    this.submitted = true;
    if (this.productFormGroup?.valid) {
      this.productsService.addProduct(this.productFormGroup?.value)
      .subscribe(
        data=>{
          this.eventDriverService.publishEvent({type: ProductsActionTypes.PRODUCT_ADDED});
          this.onResetForm();
          this.displaySuccessMessage = true;
          setTimeout(() => {
            this.displaySuccessMessage = false
          }, 3000);
        }

      )
    }
  }

  onResetForm() {
    this.submitted = false;
    this.productFormGroup?.reset();
  }

}
