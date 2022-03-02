import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../model/product.model';
import { CustomValidator } from 'src/app/validators/customValidator';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productId: number;
  productFormGroup: FormGroup | undefined;
  submitted = false;
  displaySuccessMessage = false;
  displayFormNotTouchedMessage = false

  constructor( private activatedRoute: ActivatedRoute, private productsService: ProductsService, private formbuilder: FormBuilder) {
    this.productId=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.onGetProduct()
  }

  onGetProduct() :void {
    this.productsService.getProduct(this.productId)
    .subscribe(
      prd=>{
        this.productFormGroup = this.setProductFormGroup(prd);
      }
    )
  }

  onEditProduct() {
    this.submitted = true;
    if (this.productFormGroup?.valid && this.productFormGroup?.touched) {
      this.productFormGroup.value['id'] = this.productId;
      this.productsService.updateProduct(this.productFormGroup?.value)
      .subscribe(
        (data: IProduct)=>{
          this.displaySuccessMessage = true;
          this.productFormGroup = this.setProductFormGroup(data)

          setTimeout(() => {
            this.displaySuccessMessage = false;
          }, 3000);
        }
      )
    } else if (!this.productFormGroup?.touched) {
      this.displayFormNotTouchedMessage = true;
      setTimeout(() => {
        this.displayFormNotTouchedMessage = false;
      }, 3000);
    }
  }

  onResetForm() {
    this.submitted = false;
    this.productFormGroup?.reset();
  }

  setProductFormGroup(prd: IProduct) {
    return this.formbuilder.group({
      id : this.productId,
      name: [prd.name, Validators.required ],
      price: [prd.price, [Validators.required, CustomValidator.numeric]],
      quantity: [prd.quantity, [Validators.required, CustomValidator.numeric]],
      selected: [prd.selected, Validators.required ],
      available: [prd.available, Validators.required ]
    })
  }

}
