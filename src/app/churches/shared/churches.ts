import {Church} from './church.model';

export const CHURCHES: Church[] = [
  {
    id: 1,
    name: 'Baptistkyrkan',
    location: 'Motala',
    description: `Till Baptistkyrkan levererade vi X och Y i material Z.`,
    url: 'http://www.motalabaptist.se/',
    images: []
  },
  {
    id: 2,
    name: 'Bergaortens Missionsförsamling',
    location: 'Sundet, Lagan',
    description: 'Till Bergaortens Missionsförsamling levererade vi kopplingsbara kyrkbänkar utan sidogavlar.',
    url: 'http://bergamission.se/',
    images: [
      {
        path: 'assets/churches/sundet/bergaortens-missionsforsamling/1.jpg',
        description: 'Test1'
      },
      {
        path: 'assets/churches/sundet/bergaortens-missionsforsamling/2.jpg',
        description: 'Test2'
      },
      {
        path: 'assets/churches/sundet/bergaortens-missionsforsamling/3.jpg',
        description: 'Test3'
      }
    ]
  },
  {
    id: 3,
    name: 'Borgenkyrkan',
    location: 'Tierp',
    description: `Till Borgenkyrkan levererade vi X och Y i material Z.`,
    url: 'http://www.borgenkyrkan.se/',
    images: []
  },
  {
    id: 4,
    name: 'Equmeniakyrkan',
    location: 'Vårgårda',
    description: 'Till Equmeniakyrkan levererade vi kopplingsbara kyrkbänkar i ask.',
    url: 'http://equmeniakyrkan.se/vargarda/',
    images: [
      {
        path: 'assets/churches/vargarda/equmeniakyrkan/1.jpg',
        description: 'Test1'
      },
      {
        path: 'assets/churches/vargarda/equmeniakyrkan/2.jpg',
        description: 'Test2'
      },
      {
        path: 'assets/churches/vargarda/equmeniakyrkan/3.jpg',
        description: 'Test3'
      }
    ]
  }
];
