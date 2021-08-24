import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-reusable-selector',
  templateUrl: './reusable-selector.component.html',
  styleUrls: ['./reusable-selector.component.scss'],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})
export class ReusableSelectorComponent<T extends { name: string }>
  implements OnInit
{
  selected?: T;

  @Input()
  label?: string;
  @Input()
  options?: T[];
  @Input('selectedTemplate')
  selectedTemplateRef?: TemplateRef<any>;

  @Output()
  selectionChange = new EventEmitter<T>();

  @ContentChild('optionTemplate', { static: false })
  optionTemplateRef: TemplateRef<any> | null = null;

  constructor() {}

  ngOnInit(): void {}

  selectOption(option: T) {
    this.selected = option;
    this.selectionChange.emit(option);
  }
}
