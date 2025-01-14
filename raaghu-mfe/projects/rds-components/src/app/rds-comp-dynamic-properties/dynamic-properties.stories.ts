import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAccordionModule, RdsAppDetailsComponent, RdsButtonComponent, RdsButtonModule, RdsCardModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsSearchInputModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsCompDynamicPropertiesComponent } from './rds-comp-dynamic-properties.component';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompInformationShimmerComponent } from '../rds-comp-information/rds-comp-information-shimmer/rds-comp-information-shimmer.component';
import { RdsCompPermissionTreeComponent } from '../rds-comp-permission-tree/rds-comp-permission-tree.component';
import { RdsCompInformationComponent } from '../rds-comp-information/rds-comp-information.component';
import { StoreModule } from '@ngrx/store';



export default {
  title: 'Components/Dynamic Properties',
  component: RdsCompDynamicPropertiesComponent,
  decorators: [
    moduleMetadata({
        declarations:[
            RdsDataTableComponent,RdsCompInformationComponent,RdsCompPermissionTreeComponent,
          ],
      imports: [
         NgxTranslateModule,RdsOffcanvasModule,RdsNavTabModule,
        FormsModule, ReactiveFormsModule, RdsButtonModule,StoreModule.forRoot({}),RdsSearchInputModule,RdsOffcanvasModule,RdsInputModule,RdsIconModule,RdsSelectListModule,
      ],


      providers:[
        FormBuilder
      ],

    })
  ]
} as Meta;

const Template: Story<RdsCompDynamicPropertiesComponent> = (args: RdsCompDynamicPropertiesComponent) => ({
    props:{
        ...args
      }
});

export const Basic = Template.bind({});
Basic.args= {
      DynamicPropertiesTableData:  [
    { id: 1, propertyName: 'Standard',displayName : 'Edit' ,inputType:'CHECKBOX' ,permission:'Pages.Administration.Users'},
    { id: 2, propertyName: 'Basic', displayName : 'Edit',inputType:'MULTIPLECHECKBOX',permission:'Pages.Administration.Roles.Delete'},
    { id: 3, propertyName: 'Premium', displayName : 'Edit',inputType:'CHECKBOX',permission:'Pages.Administration.Languages.Edit'},
    { id: 4, propertyName: 'Standard',displayName : 'Edit',inputType:'MULTIPLECHECKBOX',permission:'Pages.Administration.Roles.Edit'},
    { id: 5, propertyName: 'Basic', displayName : 'Edit',inputType:'MULTIPLECHECKBOX',permission:'Pages.Administration.Languages.Edit'},
    { id: 6, propertyName: 'Standard',displayName : 'Edit',inputType:'CHECKBOX',permission:'Pages.Administration.Languages.Edit'},
   
  ],
  DynamicPropertiesTableHeader: [
    {
      displayName:'Property Name',
      key: 'propertyName',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName:'Display Name',
      key: 'displayName',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName:'Input Type',
      key: 'inputType',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName:'Permission',
      key: 'permission',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
  ],
  navtabsItems: [
    {
      label:'Dynamic Properties',
      tablink: '#dynamic-properties',
      ariacontrols: 'dynamic-properties',
    },
    {
      label:'Dynamic Entity Properties',
      tablink: '#dynamic-entity-properties',
      ariacontrols: 'dynamic-entity-properties',
    },
  ],
  //  DynamicProperyData:{propertyName:'string', displayName: 'string', inputType: 'string'},
  DynamicPropertiesModal: [
    {
      label:'Information',
      tablink: '#information',
      ariacontrols: 'information',
    },
    {
      label:'Permission',
      tablink: '#permission',
      ariacontrols: 'permission',
    },
  ]

    
}
