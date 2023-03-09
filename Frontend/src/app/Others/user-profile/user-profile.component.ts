import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
occupation: string= "Fullstack Developer"
email: string= "simomutu8@gmail.com"
about: string= "As a developer, you have the skills to create innovative software solutions and applications that can solve complex problems. Your expertise in programming languages and technical knowledge allows you to design and build software that can transform the way people interact with technology."
answeres: number=0;
questions: number=0;
badges: number=0;
contributions: number=0;
name: string= "Simon Muturi";
}
