import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rds-comp-information',
  templateUrl: './rds-comp-information.component.html',
  styleUrls: ['./rds-comp-information.component.scss'],
})
export class RdsCompInformationComponent implements OnInit {
  @ViewChild('newDynamicPropertyForm', { read: NgForm }) newDynamicPropertyForm!: NgForm;
  propertyName: string;
  displayName: string;
  permission: string;
  inputType: any = '';
  DynamicPropertyId: any;
  @Input() dynamicPropertiesData: {propertyName:string, displayName: string, inputType: string};
  @Input() inputTypeList: any[] = [];
  entityNames: any[]; 
  @Output() dynamicPropertiesInfo = new EventEmitter<any>();
  @Input() resetFormSubject : Observable<boolean> = new Observable<boolean>();
  @Input() editShimmer : boolean = false;
  isEdit: boolean = false;
  constructor(private store: Store, public translate:TranslateService) { }
  ngOnInit(): void {
    this.resetFormSubject.subscribe(response => {
      if(response){
        console.log(this.newDynamicPropertyForm);
        this.newDynamicPropertyForm.form.markAllAsTouched();
    }
  })
    if (!this.dynamicPropertiesData) {
      this.dynamicPropertiesData['propertyName'] = '';
      this.dynamicPropertiesData['displayName'] = '';
      this.dynamicPropertiesData['inputType'] = '';
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
    if(this.dynamicPropertiesData.displayName != "" && this.dynamicPropertiesData.propertyName !="" && this.dynamicPropertiesData.inputType != ""){ 
      this.dynamicPropertiesInfo.emit({
        dynamicProperties: this.dynamicPropertiesData,
      });
    }
  }
}