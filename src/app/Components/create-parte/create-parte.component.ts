import { ParteService } from 'src/app/Services/parte.service';
import { Parte } from 'src/app/Models/parte';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-parte.component.html',
  styleUrls: ['./create-parte.component.scss']
})
export class CreateParteComponent implements OnInit {

  parte: Parte = new Parte();
  submitted = false;

  constructor(private parteService: ParteService,
    private router: Router) { }

  ngOnInit() {
  }

  newParte(): void {
    this.submitted = false;
    this.parte = new Parte();
  }

  save() {
    this.parteService
    .createParte(this.parte).subscribe(data => {
      console.log(data)
      this.parte = new Parte();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/partes']);
  }
}
