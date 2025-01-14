import { isNgTemplate } from '@angular/compiler';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rds-comp-new-dynamic-entity-property',
  templateUrl: './rds-comp-new-dynamic-entity-property.component.html',
  styleUrls: ['./rds-comp-new-dynamic-entity-property.component.scss'],
})
export class RdsCompNewDynamicEntityPropertyComponent
  implements OnInit, OnChanges
{
  entityFullName: string = '';
  Placeholder : string = 'Select Property';
  PropertyID: any = '';
  resetDropdown = false;
  placeholderReset : string = 'Select Property';
  @Input() entityNames: any[] = [];
  @Input() reset: boolean = false;
  @Input() parameterList: any[] = [];
  dynamicEntityData: any = { entityFullName: '', PropertyID: '' };
  @Output() createOrUpdateDynamicEntity = new EventEmitter<any>();
  @ViewChild('dynamicEntityForm') dynamicEntityInfoForm: NgForm;
  resetFormSubject: Subject<boolean> = new Subject<boolean>();
  dynamicEntityDataSelect: any[] = [];

  constructor(public translate:TranslateService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.resetDropdown = this.reset;
    this.dynamicEntityData = { entityFullName: '', PropertyID: '' };
  }

  ngOnInit(): void {
    this.resetDropdown = this.reset;
    this.Placeholder = "Select Property";
  }

  addEntity(dynamicEnityForm) {
    let Data = this.dynamicEntityDataSelect;
    if(Data.length > 0){
      this.createOrUpdateDynamicEntity.emit(Data);
      this.dynamicEntityData = { entityFullName: '', PropertyID: '' };
      this.dynamicEntityDataSelect = [];
      dynamicEnityForm.resetForm();
      this.resetDropdownList();
      this.Placeholder = "Select Property";
    }
    else{
      this.dynamicEntityInfoForm.form.markAllAsTouched();
    }
    
    
  }

  onPropertySelect(prop : any) {
    if(prop  && prop.item){
      const data : any = {
        entityFullName : this.dynamicEntityData.entityFullName,
        PropertyID : prop.item.id
      }
      if(prop.item.isSelected) {
        this.dynamicEntityDataSelect.push(data);
      }
      else{
        this.dynamicEntityDataSelect.forEach((element,index)=>{
          if(JSON.stringify(element)==JSON.stringify(data)){
            this.dynamicEntityDataSelect.splice(index,1);
          }  
       });
      }
    }
  }

  closeCanvas(): void {
    this.Placeholder = "Select Property";
    this.dynamicEntityData = { entityFullName: '', PropertyID: '' };
    this.resetDropdownList();
  }

  resetDropdownList() {
    let parameter = this.parameterList
    parameter.forEach((element: any) => {
      element.isSelected = false;
    })
    this.resetDropdown = true;
    this.Placeholder = "Select Property";

  }
}
