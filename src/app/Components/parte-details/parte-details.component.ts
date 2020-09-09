import { Parte } from 'src/app/Models/parte';
import { Component, OnInit, Input } from '@angular/core';
import { ParteService } from 'src/app/Services/parte.service';
import { ParteListComponent } from 'src/app/Components/parte-list/parte-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './parte-details.component.html',
  styleUrls: ['./parte-details.component.scss']
})
export class ParteDetailsComponent implements OnInit {

  id: number;
  parte: Parte;

  constructor(private route: ActivatedRoute,private router: Router,
    private parteService: ParteService) { }

  ngOnInit() {
    this.parte = new Parte();

    this.id = this.route.snapshot.params['id'];

    this.parteService.getParte(this.id)
      .subscribe(data => {
        console.log(data)
        this.parte = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['partes']);
  }
}
