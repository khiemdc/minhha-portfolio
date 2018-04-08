import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      var offset = 250;
      var duration = 500;
    
      $(window).scroll(function(){
        if($(this).scrollTop() > offset){
          $('.to-top').fadeIn(duration);
        } else {
          $('.to-top').fadeOut(duration);
        }
      });
    
      $('.to-top').click(function(){
        $('body, html').animate({scrollTop: 0}, duration);
      })
    
    });
    
    }
    
  }
