import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  constructor(private modal:MatDialog){}
  openAddCustomerModal(){
    this.addCustomer(0,"Add Customer")
  }
  addCustomer(code:number, title:string){
    this.modal.open(CustomerDetailsComponent,{
      width: '50%',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
      data: {
        code: code,
        title: title
      }
    }
    )
  }
}
