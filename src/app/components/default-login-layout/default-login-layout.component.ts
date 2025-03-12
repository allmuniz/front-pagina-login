import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.css'
})
export class DefaultLoginLayoutComponent {

  @Input() title: String = "";
  @Input() primaryButtonText: String = "";
  @Input() secundaryButtonText: String = "";

  @Output("submit") onSubmit = new EventEmitter();
  
  submit(){
    this.onSubmit.emit();
  }
}
