import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports:[
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports:[
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class MaterialModule {

}