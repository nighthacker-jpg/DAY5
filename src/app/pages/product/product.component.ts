import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(public api: ApiService, private routes: ActivatedRoute){ }
  item: any;

  ngOnInit() {

    let id = this.routes.snapshot.paramMap.get('id')

    this.api.getDataById(id).subscribe((data:any)=> {
      this.item = data;
      console.log(this.item);
    })
  
}


}
