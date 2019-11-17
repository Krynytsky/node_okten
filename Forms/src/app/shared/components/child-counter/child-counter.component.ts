import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const ValueAccessor: any = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => ChildCounterComponent)
};

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.scss'],
  providers: [ValueAccessor]
})
export class ChildCounterComponent implements ControlValueAccessor {
  childCounter = 0;
  decrese() {
    this.childCounter--;
    this.onTouchedCb();
    this.onChangeCb(this.childCounter);
  }

  increse() {
    this.childCounter++;
    this.onTouchedCb();
    this.onChangeCb(this.childCounter);
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn ;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb();
  }

  writeValue(obj: any): void {
    this.childCounter = obj;
  }
  private onTouchedCb() {}
  private onChangeCb(childCounter: number) {}
}
