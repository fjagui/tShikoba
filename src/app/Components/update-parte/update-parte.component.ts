import { Component, OnInit } from '@angular/core';
import { Parte } from 'src/app/Models/parte';
import { ActivatedRoute, Router } from '@angular/router';
import { ParteService } from 'src/app/Services/parte.service';

@Component({
  selector: 'app-update-parte',
  templateUrl: './update-parte.component.html',
  styleUrls: ['./update-parte.component.scss']
})
export class UpdateParteComponent implements OnInit {

  id: number;
  parte: Parte;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private parteService: ParteService) { }

  ngOnInit() {
    this.parte = new Parte();

    this.id = this.route.snapshot.params['id'];

    this.parteService.getParte(this.id)
      .subscribe(data => {
        console.log(data)
        this.parte= data;
      }, error => console.log(error));
  }

  updateParte() {
    this.parteService.updateParte(this.id, this.parte)
      .subscribe(data => {
        console.log(data);
        this.parte = new Parte();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateParte();
  }

  gotoList() {
    this.router.navigate(['/partes']);
  }
}
