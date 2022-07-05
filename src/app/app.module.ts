import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EleEditModule } from 'angular-richedit';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, EleEditModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
