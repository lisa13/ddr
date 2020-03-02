import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  public title = "Personnel on board".toUpperCase();
  public leaders = [
    {
      role: 'Drilling Superintendent',
      name: 'Alejandro Leonard'
    },
    {
      role: 'Toolpusher-Day',
      name: 'Erickd War'
    },
    {
      role: 'Toolpusher-Night',
      name: 'Alan Brock'
    },
    {
      role: 'Driller-Day',
      name: 'Jordan Reeves'
    },
    {
      role: 'Driller-Night',
      name: 'Philip Morris'
    },
    {
      role: 'Maintenance Supervisor',
      name: 'Michael Fletcher'
    },
    {
      role: 'Drilling Supervisor-Day',
      name: 'Ricky Hudson'
    },
    {
      role: 'Drilling Supervisor-Night',
      name: 'Louis Morales'
    },
    {
      role: 'Safety Deputy-Day',
      name: 'Elijah Hill'
    },
    {
      role: 'Safety Deputy-Night',
      name: 'Jason Wright'
    }
  ];

  public reports = [
    {
      category: 'Drilling Superintendent',
      day: '16',
      night: '13',
      total: '29'
    },
    {
      category: 'Toolpusher-Day',
      day: '1',
      night: '0',
      total: '1'
    },
    {
      category: 'Toolpusher-Night',
      day: '0',
      night: '0',
      total: '0'
    },
    {
      category: 'Driller-Day',
      day: '0',
      night: '0',
      total: '0'
    },
    {
      category: 'Sum KCAD Crew',
      day: '17',
      night: '13',
      total: '30'
    },
    {
      category: '-',
      day: '0',
      night: '0',
      total: '0'
    },
    {
      category: '-',
      day: '0',
      night: '0',
      total: '0'
    },
    {
      category: 'Sum',
      day: '17',
      night: '13',
      total: '30'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
