import { Component, OnInit, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const tokensRegex = /(?:[^\s"]+|"[^"]*")+/g;

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBoxComponent),
      multi: true
    }
  ]
})
export class SearchBoxComponent implements OnInit, ControlValueAccessor {

  onChangeEditable: any;

  @ViewChild('editable') editable: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  onInputEditable() {
    
    // this.editable.nativeElement.textContent = this.editable.nativeElement.textContent.replace(/\s./, '<span>');
    // this.editable.nativeElement.textContent = this.editable.nativeElement.textContent.replace(/.\s/, '</span>');

    const term = this.editable.nativeElement.textContent.match(tokensRegex).map((t: string) => `<span>${t}</span>`).join(' ');
    console.log(term);
    // this.editable.nativeElement.innerHTML = term;
    console.log(this.editable.nativeElement);

    const range = document.createRange();
    const selection = window.getSelection();
    // range.setStart(this.editable.nativeElement.childNodes[0], this.editable.nativeElement.textContent.length);
    // range.setStart(this.editable.nativeElement.childNodes[0], this.editable.nativeElement.childNodes.length);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);

    // const term = this.editable.nativeElement.textContent.match(tokensRegex).map((t: string) => `<span>${t}</span>`).join(' ');
    // console.log(term);

    // this.editable.nativeElement.innerHTML = terms;
    // this.editable.nativeElement.innerHTML = term;
    // this.onChangeEditable(term);
    // const l = this.editable.nativeElement.textContent.length;
    // this.editable.nativeElement.setSelectionRange(l, l)

    console.log(this.editable);


  }





  writeValue(val: any) {
    this.editable.nativeElement.innerHTML = val;
  }


  registerOnChange(fn: any) {
    this.onChangeEditable = fn;
  }

  registerOnTouched(fn: any) {}

}
