import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatTooltipModule,
  ],
})
export class MaterialModule {}
