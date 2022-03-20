import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { CountComponent } from './count/count.component';
import { HotColdUnicastMulicastComponent } from './hot-cold-unicast-mulicast/hot-cold-unicast-mulicast.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, PageListComponent, RxjsLearningComponent, CountComponent, HotColdUnicastMulicastComponent, SubjectComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
