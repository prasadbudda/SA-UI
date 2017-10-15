import { DialogsService } from './dialogs.service';
import { MdDialogModule, MdButtonModule, MdCheckboxModule  } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogVerificationComponent }   from './dialog-verification.component';
import { VerificationQuestionComponent } from './verification-question/verification-question'
@NgModule({
    imports: [
        MdDialogModule,
        MdButtonModule,
        MdCheckboxModule,
        CommonModule
    ],
    exports: [
        DialogVerificationComponent,
        VerificationQuestionComponent
    ],
    declarations: [
        DialogVerificationComponent,
        VerificationQuestionComponent
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        DialogVerificationComponent,
        VerificationQuestionComponent
    ],
})
export class DialogsModule { }