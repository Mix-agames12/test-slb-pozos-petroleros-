import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-view',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './modify-view.component.html',
  styleUrl: './modify-view.component.css'
})
export class ModifyViewComponent {
  constructor(private route: ActivatedRoute) { }
}
