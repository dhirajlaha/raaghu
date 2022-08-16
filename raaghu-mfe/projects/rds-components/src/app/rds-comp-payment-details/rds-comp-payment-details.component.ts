import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rds-comp-payment-details',
  templateUrl: './rds-comp-payment-details.component.html',
  styleUrls: ['./rds-comp-payment-details.component.scss']
})
export class RdsCompPaymentDetailsComponent implements OnInit {

  constructor(public translate: TranslateService) { }


  @Input() cvc:number;
  @Input() cardNumber:number;
  @Input() name:string;
  @Input() expirationDate:string;  
  
  ngOnInit(): void {
  }
  
  continue(){
  }
  
  back(){
  }

}