import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-view',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './form-view.component.html',
  styleUrl: './form-view.component.css'
})
export class FormViewComponent {
  constructor(private route: ActivatedRoute) { }
}
