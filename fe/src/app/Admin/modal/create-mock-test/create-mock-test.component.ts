import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-create-mock-test',
  templateUrl: './create-mock-test.component.html',
  styleUrls: ['./create-mock-test.component.css']
})
export class CreateMockTestComponent {
  selectedFile: File | null = null; // To store the selected file
  uploadProgress: number | null = null; // To track upload progress

  constructor(private uploadService: UploadService) {}

  // Method to handle file selection
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  // Method to upload the file using the service
  uploadFile(): void {
    if (!this.selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    this.uploadService.uploadFile(this.selectedFile).subscribe({
      next: (event: any) => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          this.uploadProgress = Math.round((100 * event.loaded) / event.total);
        } else if (event.type === HttpEventType.Response) {
          console.log('File uploaded successfully!', event.body);
          this.uploadProgress = null;
        }
      },
      error: (err) => {
        console.error('Error uploading file:', err);
        this.uploadProgress = null;
      }
    });
  }
}
