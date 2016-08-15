import { provideRouter } from '@angular/router';
import { AlbumComponent} from './album';

export const APP_ROUTES_PROVIDERS = [
    provideRouter([
        { path: '', redirectTo: '/recipes', pathMatch: 'full'},
        { path: 'albums', component: AlbumComponent }
    ])
];
