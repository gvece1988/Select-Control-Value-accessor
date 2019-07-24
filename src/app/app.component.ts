import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ApplicationRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  form;
  options;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      contactTypeCode: {}
    });

    this.options = of([{ id: 1, value: "Phone" }, { id: 2, value: "Email" }]);
    this.form.patchValue({ contactTypeCode: 2 });
  }
}
