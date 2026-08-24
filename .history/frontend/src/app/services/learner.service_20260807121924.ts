import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassificationData, RegistrationDetails } from '../models/registration.model';

// Shape expected by your .NET C# model
export interface LearnerApiPayload {
  category: string;
  subCategory: string;
  subSubCategory: string;
  fullName: string;
  email: string;
  specialty: string;
}

@Injectable({
  providedIn: 'root'
})
export class LearnerService {
  private http = inject(HttpClient);
  
  // Update port to match your local .NET API URL (e.g. http://localhost:5000 or https://localhost:7000)
  private apiUrl = 'http://localhost:5000/api/learners';

  registerLearner(
    classification: ClassificationData,
    details: Partial<RegistrationDetails>
  ): Observable<LearnerApiPayload> {
    
    // Map Angular form state into the .NET payload format
    const payload: LearnerApiPayload = {
      category: classification.category,
      subCategory: classification.subCategory,
      subSubCategory: classification.subSubCategory,
      fullName: details.fullName ?? '',
      email: details.email ?? '',
      specialty: details.specialty ?? ''
    };

    return this.http.post<LearnerApiPayload>(this.apiUrl, payload);
  }
}