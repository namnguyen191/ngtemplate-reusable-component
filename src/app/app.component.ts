import { Component } from '@angular/core';
import {
  faSkullCrossbones,
  faSwimmer,
} from '@fortawesome/free-solid-svg-icons';

export interface Shark {
  name: string;
  latinName: string;
  status: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reusable-component-ngtemplate';
  tractors = [
    {
      name: 'New Holland T7',
      stars: 3,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/New_Holland_T7_Series_Tractors_-_R.P._Motors_Pty_Ltd.jpg/320px-New_Holland_T7_Series_Tractors_-_R.P._Motors_Pty_Ltd.jpg',
    },
    {
      name: 'Doe Dual Drive',
      stars: 5,
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Doe_Dual_Drive_tractor_-_geograph.org.uk_-_572913.jpg',
    },
    {
      name: 'Massey Ferguson',
      stars: 1,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Massey_Ferguson_6716S.jpg/310px-Massey_Ferguson_6716S.jpg',
    },
  ];
  sharks: Shark[] = [
    {
      name: 'Great White',
      latinName: 'Carcharodon carcharias',
      status: 'Vunerable',
    },
    {
      name: 'Great hammerhead',
      latinName: 'Sphyrna mokarran',
      status: 'Endangered',
    },
    {
      name: 'Angular roughshark',
      latinName: 'Oxynotus centrina',
      status: 'Vunerable',
    },
    {
      name: 'Pyjama',
      latinName: 'Poroderma africanum',
      status: 'Near Threatend',
    },
  ];
  safeSharks = ['Angular roughshark', 'Pyjama'];
  selectedShark: Shark = {} as Shark;

  displayFunc = (shark: Shark) => {
    return `${shark.name} (${shark.latinName})`;
  };

  getSwimIcon = (shark: Shark) => {
    const icon =
      this.safeSharks.indexOf(shark.name) >= 0 ? faSwimmer : faSkullCrossbones;
    return icon;
  };
}
