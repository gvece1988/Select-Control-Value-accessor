import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useClass: forwardRef(() => SelectBoxComponent),
    multi: true
  }]
})
export class SelectBoxComponent implements OnInit, ControlValueAccessor {
  @Input() options;
  value;

  constructor() { }

  ngOnInit() {
    console.log("value is ", this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

}
