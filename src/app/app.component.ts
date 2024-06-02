import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'protfolio';
  flag :boolean =  true

  onBtnToggle(obj : any){
    console.log(obj);
    console.log(('kk'));
      
    if(this.flag == true){
           obj.classList.add('show')
           this.flag = false
    }else{
      obj.classList.remove('show')
       this.flag = true
    }
  }



  onNavitemclick(nav:any){
      nav.classList.remove('show')
      this.flag = true
  }
}
