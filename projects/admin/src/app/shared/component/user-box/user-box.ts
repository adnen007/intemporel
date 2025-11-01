import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-box',
  imports: [],
  templateUrl: './user-box.html',
  styleUrl: './user-box.css',
})
export class UserBox {
  @Input() user!: { name: string; email: string; number: number; location: string; imgUrl: string };
}
