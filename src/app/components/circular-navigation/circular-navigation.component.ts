import { Component, OnInit } from '@angular/core';
declare var classie: any;
@Component({
  selector: 'circular-navigation',
  templateUrl: './circular-navigation.component.html',
  styleUrls: ['./circular-navigation.component.scss'],
})
export class CircularNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    (function () {

      var button = document.getElementById('cn-button'),
        wrapper = document.getElementById('cn-wrapper'),
        overlay = document.getElementById('cn-overlay');

      //open and close menu when the button is clicked
      var open = false;
      button.addEventListener('click', handler, false);
      wrapper.addEventListener('click', cnhandle, false);

      function cnhandle(e) {
        e.stopPropagation();
      }

      function handler(e) {
        if (!e) var e:any = window.event;
        e.stopPropagation();//so that it doesn't trigger click event on document

        if (!open) {
          openNav();
        }
        else {
          closeNav();
        }
      }
      function openNav() {
        open = true;
        button.innerHTML = "-";
        classie.add(overlay, 'on-overlay');
        classie.add(wrapper, 'opened-nav');
      }
      function closeNav() {
        open = false;
        button.innerHTML = "+";
        classie.remove(overlay, 'on-overlay');
        classie.remove(wrapper, 'opened-nav');
      }
      document.addEventListener('click', closeNav);

    })();
  }

}
