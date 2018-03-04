import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FlowerListComponent } from './flowers/flower-list/flower-list.component';
import { FlowerInfoComponent } from './flowers/flower-info/flower-info.component';
import { FlowerItemComponent } from './flowers/flower-list/flower-item/flower-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlowersComponent,
    FlowerListComponent,
    FlowerInfoComponent,
    FlowerItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
 
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
