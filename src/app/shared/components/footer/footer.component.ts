import { Component, OnInit } from '@angular/core';
import { Iicons } from '../../model/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  iconsListArray: Array<Iicons> = [

    {
      link : 'javascript:;',
      icon: ` <i class="fa-brands fa-square-facebook fa-3x"></i>`
    },
    {
      link : 'javascript:;',
      icon: `<i class="fa-brands fa-square-twitter fa-3x"></i>`
    },
    {
      link : 'javascript:;',
      icon: `<i class="fa-brands fa-square-google-plus fa-3x"></i>`
    },    
    {
      link : 'javascript:;',
      icon: `<i class="fa-brands fa-square-pinterest fa-3x"></i>`
    }
  ];

  footerLink1: Array<any> = [

    {
      link : 'javascript:;',
      icon: `Examples`
    },
    {
      link : 'javascript:;',
      icon: `Shop`
    },
    {
      link : 'javascript:;',
      icon: `License`
    }
  ];

  footerLink2: Array<any> = [

    {
      link : 'javascript:;',
      icon: `Examples`
    },
    {
      link : 'javascript:;',
      icon: `Shop`
    },
    {
      link : 'javascript:;',
      icon: `License`
    }
  ];

  footerLink3: Array<any> = [

    {
      link : 'javascript:;',
      icon: `Examples`
    },
    {
      link : 'javascript:;',
      icon: `Shop`
    },
    {
      link : 'javascript:;',
      icon: `License`
    }
  ];

  footerLink4: Array<any> = [

    {
      link : 'javascript:;',
      icon: `Examples`
    },
    {
      link : 'javascript:;',
      icon: `Shop`
    },
    {
      link : 'javascript:;',
      icon: `License`
    }
  ];

  footerLink = [this.footerLink1, this.footerLink2, this.footerLink3, this.footerLink4]

  constructor() { }

  ngOnInit(): void {
  }

}
