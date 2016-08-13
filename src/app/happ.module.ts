import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HappComponent } from './happ.component';
import { OtherComponent } from './other';
import { NavbarComponent } from './navbar';
import { HomeComponent } from './home';
import { AlbumComponent } from './album';
import { AlbumListComponent } from './album-list';

@NgModule({
    declarations: [HappComponent, OtherComponent, NavbarComponent,
    HomeComponent, AlbumComponent, AlbumListComponent],
    imports: [BrowserModule],
    bootstrap: [HappComponent]
})

export class HappModule {};
