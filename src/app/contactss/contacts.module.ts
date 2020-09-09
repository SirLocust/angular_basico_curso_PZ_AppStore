import { ContactsRoutingModule } from './contacts_routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core'


@NgModule({
    declarations:[
        ContactsComponent
    ],
    imports:[
        CommonModule,
        ContactsRoutingModule
    ],
    exports :[
        ContactsComponent
    ]
    

})

export class ContactsModule{}