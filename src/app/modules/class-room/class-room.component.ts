import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface ExcelData {
  Day: number;
  [key: string]: string | number;
}

@Component({
  selector: 'app-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.css']
})
export class ClassRoomComponent implements OnInit {
  classes: string[] = ["Class 1", "Class 2", "Class 3"];
  form: FormGroup;
  selectedSection: any;
  selectedClass: any;

  excelDataClass1: ExcelData[] = [
    { Day: 1, Quran: "https://youtu.be/2fUmBu_bdNE", Hadees: "https://youtu.be/ISKhKn83Pus", Fiqh: "https://youtu.be/9I9xLJHb-ho", Swarf: "https://youtu.be/0GVdanuajco", Nahv: "https://youtu.be/oxuPuR4JyZk" },
    { Day: 2, Quran: "https://youtu.be/_M3CqmqsTcw", Hadees: "https://youtu.be/xNjD7uhizCY", Fiqh: "https://youtu.be/17BCMXQueuo", Swarf: "https://youtu.be/5a2Ao-ejb-0", Nahv: "https://youtu.be/5KAO3bCnS6A" },
  ];

  excelDataClass2: ExcelData[] = [
    // Your data here
  ];

  excelDataClass3: ExcelData[] = [
    // Your data here
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      selectedClass: [''],
      selectedSection: [0],
      selectedSubsection: ['']
    });
  }

  ngOnInit() {
    // You can initialize default values or fetch data here if needed
  }

  onClassChange() {
    this.form.get('selectedSection').setValue(0);
    this.form.get('selectedSubsection').setValue('');
  }

  onSectionChange() {
    this.form.get('selectedSubsection').setValue('');
  }

  loadYouTubeVideo(videoUrl: string) {
    const videoId = this.extractVideoId(videoUrl);
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.frameborder = "0";
    iframe.allowfullscreen = true;

    // Set the iframe attributes
    if (window.innerWidth >= 768) {
      // Larger screens: Reduce width and center
      iframe.setAttribute("style", "width: 60%; margin: 0 auto; aspect-ratio: 16/9;");
    } else {
      // Smaller screens: Full width and height with 1px padding
      iframe.setAttribute("style", "width: 100%; height: 100%; aspect-ratio: 16/9;");
    }

    // Clear any previous content
    const videoContentContainer = document.getElementById("video-content");
    if (videoContentContainer) {
      videoContentContainer.innerHTML = "";
      videoContentContainer.appendChild(iframe);
    }
  }

  extractVideoId(url: string): string {
    const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regex);
    if (match && match[2].length === 11) {
      return match[2];
    } else {
      console.error("Invalid YouTube URL:", url);
      return "";
    }
  }

  getClassData(): ExcelData[] {
    switch (this.form.get('selectedClass')?.value) {
      case "Class 1":
        return this.excelDataClass1;
      case "Class 2":
        return this.excelDataClass2;
      case "Class 3":
        return this.excelDataClass3;
      default:
        return [];
    }
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
