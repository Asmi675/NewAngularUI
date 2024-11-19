import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking-status',
  standalone: true,
  imports: [RouterLink, RouterOutlet, DatePipe, CommonModule, FormsModule],
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.css'] // Corrected key 'styleUrl' to 'styleUrls'
})
export class BookingStatusComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ProfileName: string = ''; // Initialized ProfileName with an empty string
  http = inject(HttpClient);

  isVisible: boolean = false; // Controls visibility of the right section
  reviewObj: any = {
    id: 0,
    professionalName: '',
    userName: '',
    dateTime: new Date().toISOString(),
    message: '',
    userRating: 0,
  };
  reviewMessage: string = ''; // Separate variable for the review message
  BookingDetails: any[] = []; // Holds all booking details
  uniqueProfessionalNames: string[] = []; // Stores unique professional names

  ngOnInit(): void {
    this.ProfileName = localStorage.getItem('userName') || ''; // Fallback to empty string if null
    if (this.ProfileName) {
      this.getBookingDetails(this.ProfileName);
    }
  }

  // Method to fetch booking details
  getBookingDetails(userName: string) {
    this.http
      .get(`https://localhost:7025/api/booking/UserName/${userName}`)
      .subscribe((res: any) => {
        console.log(res);
        if (res.isSuccessful) {
          this.BookingDetails = res.result;
          console.log(this.BookingDetails);
          this.extractUniqueNames(this.BookingDetails);
        }
      });
  }

  // Extract unique professional names from booking details
  extractUniqueNames(BookingDetails: any[]) {
    const professionalNamesSet = new Set<string>();

    for (let booking of BookingDetails) {
      professionalNamesSet.add(booking.professionalName);
    }

    this.uniqueProfessionalNames = Array.from(professionalNamesSet);
    console.log(this.uniqueProfessionalNames);
  }

  // Handles review action
  Review(professionalName: string) {
    this.isVisible = true; // Show the right section
    this.reviewObj.professionalName = professionalName; // Assign professional name to review object
  }

  // Submits the review
  Submit() {
    this.reviewObj.userName = this.ProfileName;
    this.reviewObj.message = this.reviewMessage; // Assign review message

    console.log(this.reviewObj);

    this.http
      .post('https://localhost:7057/api/User/Reviews/AddReview', this.reviewObj)
      .subscribe((res: any) => {
        console.log(res);
        if (res.isSuccessful) {
          this.toastr.success('Review successfully submitted');
          this.isVisible = false; // Hide the right section after submission
          this.reviewMessage = ''; // Clear review message
          this.reviewObj.userRating = 0; // Reset rating
        }
      });
  }

  // Handles logout
  onLogOut() {
    localStorage.clear();
    this.toastr.info('Logged out successfully');
  }

  // Handles deletion (functionality not implemented yet)
  Delete() {
    this.toastr.warning('Delete functionality not implemented');
  }
}
