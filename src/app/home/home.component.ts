import { Component, OnInit } from '@angular/core';
import { CreateComponent } from '../create/create.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CreateComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  array = [1, 2, 3, 4, 5, 6, 7];
  name: string = '';

  ngOnInit(): void {
    this.arrayFunction()
  }

  arrayFunction(): void {
    this.array.reverse();
    console.log(this.array);

  }

}
