import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import {ConvertToSpace} from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail.component';
import {WelcomeComponent} from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpace,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'product', component: ProductListComponent},
      {path:'product/:Id', component: ProductDetailComponent},
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo: 'welcome' ,pathMatch: 'full'},
      {path:'', redirectTo: 'welcome' ,pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
