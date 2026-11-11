import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-county-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './county-education.html',
  styleUrl: './county-education.css'
})
export class CountyEducation implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  loggedInCounty = 'Nairobi'; // Default, but will be overwritten by API

  dashboardData = {
    county: 'Nairobi',
    role: 'CDE',
    stats: { approved: 0, rejected: 0, pending: 0, appeals: 0, totalLearners: 0 },
    approvalBreakdown: { approved: 0, pending: 0, rejected: 0 },
    categories: {
      regular: { count: 0, percentage: 100.0 },
      integrated: { count: 0, percentage: 0.0 },
      sne: { count: 0, percentage: 0.0 }
    }
  };

  subCounty: string[] = [];
  selectedLevel = 'Primary School';
  selectedSubCounty = '';

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // 1. Fetch Profile to get the CDE's County
    this.http.get<any>('http://localhost:5215/api/county-education/profile').subscribe({
      next: (profile) => {
        this.dashboardData.county = profile.county;

        // 2. Populate Sub-Counties based on the fetched County
        this.populateSubCounties(profile.county);

        // 3. Fetch Schools to calculate stats
        this.fetchSchools(profile.county);
      },
      //
    });
  }

  fetchSchools(countyName: string) {
    this.http.get<any>(`http://localhost:5215/api/county-education/institutions?county=${countyName}`).subscribe({
      next: (res) => {
        const schools = res.schools || [];

        let approved = 0;
        let rejected = 0;
        let pending = 0;
        let totalLearners = 0;

        schools.forEach((school: any) => {
          if (school.status === 'approved') approved++;
          else if (school.status === 'rejected' || school.status === 'denied') rejected++;
          else if (school.status === 'pending' || school.status === 'under_review') pending++;

          totalLearners += (school.totalLearners || 0);
        });

        // Update UI
        this.dashboardData.stats = { approved, rejected, pending, appeals: 0, totalLearners };
        this.dashboardData.approvalBreakdown = { approved, pending, rejected };

        this.dashboardData.categories.regular = {
          count: schools.length,
          percentage: 100
        };

        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to fetch schools', err)
    });
  }

  // --- YOUR ORIGINAL SUB-COUNTY LOGIC ---
  populateSubCounties(countyName: string) {
    if (countyName === 'Baringo') {
      this.subCounty = ["Baringo central", "Baringo north", "Baringo south", "Eldama ravine", "Mogotio", "Tiaty"];
    }
    else if (countyName === 'Bomet') {
      this.subCounty = ["Bomet central", "Bomet east", "Chepalungu", "Konoin", "Sotik"];
    }
    else if (countyName === 'Bungoma') {
      this.subCounty = ["Bumula", "Kabuchai", "Kanduyi", "Kimilil", "Mt Elgon", "Sirisia", "Tongaren", "Webuye east", "Webuye west"];
    }
    else if (countyName === 'Busia') {
      this.subCounty = ["Budalangi", "Butula", "Funyula", "Nambele", "Teso North", "Teso South"];
    }
    else if (countyName === 'Elgeyo-Marakwet') {
      this.subCounty = ["Keiyo north", "Keiyo south", "Marakwet east", "Marakwet west"];
    }
    else if (countyName === 'Embu') {
      this.subCounty = ["Manyatta", "Mbeere north", "Mbeere south", "Runyenjes"];
    }
    else if (countyName === 'Garissa') {
      this.subCounty = ["Daadab", "Fafi", "Garissa", "Hulugho", "Ijara", "Lagdera balambala"];
    }
    else if (countyName === 'HomaBay') {
      this.subCounty = ["Homabay town", "Kabondo", "Karachwonyo", "Kasipul", "Mbita", "Ndhiwa", "Rangwe", "Suba"];
    }
    else if (countyName === 'Isiolo') {
      this.subCounty = ["Isiolo", "Garba tula", "Merit"];
    }
    else if (countyName === 'Kajiado') {
      this.subCounty = ["Isinya", "Kajiado Central", "Kajiado North", "Loitokitok", "Mashuuru"];
    }
    else if (countyName === 'Kakamega') {
      this.subCounty = ["Butere", "Kakamega central", "Kakamega east", "Kakamega north", "Kakamega south", "Khwisero", "Lugari", "Lukuyani", "Lurambi", "Matete", "Mumias", "Mutungu", "Navakholo"];
    }
    else if (countyName === 'Kericho') {
      this.subCounty = ["Ainamoi", "Belgut", "Bureti", "Kipkelion east", "Kipkelion west", "Soin sigowet"];
    }
    else if (countyName === 'Kiambu') {
      this.subCounty = ["Gatundu north", "Gatundu south", "Githunguri", "Juja", "Kabete", "Kiambaa", "Kiambu", "Kikuyu", "Limuru", "Ruiru", "Thika town", "lari"];
    }
    else if (countyName === 'Kilifi') {
      this.subCounty = ["Genzw", "Kaloleni", "Kilifi north", "Kilifi south", "Magarini", "Malindi", "Rabai"];
    }
    else if (countyName === 'Kirinyaga') {
      this.subCounty = ["Kirinyaga central", "Kirinyaga east", "Kirinyaga west", "Mwea east", "Mwea west"];
    }
    else if (countyName === 'Kisii') {
      this.subCounty = ['Etago', 'Gucha', 'Gucha South', 'Kenyenya', 'Kisii Central', 'Kisii South ', 'Kitutu Central', 'Marani', 'Masaba South', 'Nyamache', 'Sameta '];
    }
    else if (countyName === 'Kisumu') {
      this.subCounty = ["Kisumu central", "Kisumu east ", "Kisumu west", "Mohoroni", "Nyakach", "Nyando", "Seme"];
    }
    else if (countyName === 'Kitui') {
      this.subCounty = ["Ikutha", "Katulani", "Kisasi", "Kitui central", "Kitui west ", "Lower yatta", "Matiyani", "Migwani", "Mutitu", "Mutomo", "Muumonikyusu", "Mwingi central", "Mwingi east", "Nzambani", "Tseikuru"];
    }
    else if (countyName === 'Kwale') {
      this.subCounty = ["Kinango", "Lungalunga", "Msambweni", "Mutuga"];
    }
    else if (countyName === 'Laikipia') {
      this.subCounty = ["Laikipia central", "Laikipia east", "Laikipia north", "Laikipia west ", "Nyahururu"];
    }
    else if (countyName === 'Lamu') {
      this.subCounty = ["Lamu East", "Lamu West"];
    }
    else if (countyName === 'Machakos') {
      this.subCounty = ["Kathiani", "Machakos town", "Masinga", "Matungulu", "Mavoko", "Mwala", "Yatta"];
    }
    else if (countyName === 'Makueni') {
      this.subCounty = ["Kaiti", "Kibwei west", "Kibwezi east", "Kilome", "Makueni", "Mbooni"];
    }
    else if (countyName === 'Mandera') {
      this.subCounty = ["Banissa", "Lafey", "Mandera East", "Mandera North", "Mandera South", "Mandera West"];
    }
    else if (countyName === 'Marsabit') {
      this.subCounty = ["Laisamis", "Moyale", "North hor", "Saku"];
    }
    else if (countyName === 'Meru') {
      this.subCounty = ["Buuri", "Igembe central", "Igembe north", "Igembe south", "Imenti central", "Imenti north", "Imenti south", "Tigania east", "Tigania west"];
    }
    else if (countyName === 'Migori') {
      this.subCounty = ["Awendo", "Kuria east", "Kuria west", "Mabera", "Ntimaru", "Rongo", "Suna east", "Suna west", "Uriri"];
    }
    else if (countyName === 'Mombasa') {
      this.subCounty = ["Changamwe", "Jomvu", "Kisauni", "Likoni", "Mvita", "Nyali"];
    }
    else if (countyName === "Murang'a") {
      this.subCounty = ["Gatanga", "Kahuro", "Kandara", "Kangema", "Kigumo", "Kiharu", "Mathioya", "Murang’a south"];
    }
    else if (countyName === 'Nairobi') {
      this.subCounty = ["Dagoretti North Sub County", "Dagoretti South Sub County ", "Embakasi Central Sub Count", "Embakasi East Sub County", "Embakasi North Sub County ", "Embakasi South Sub County", "Embakasi West Sub County", "Kamukunji Sub County", "Kasarani Sub County ", "Kibra Sub County ", "Lang'ata Sub County ", "Makadara Sub County", "Mathare Sub County ", "Roysambu Sub County ", "Ruaraka Sub County ", "Starehe Sub County ", "Westlands Sub County "];
    }
    else if (countyName === 'Nakuru') {
      this.subCounty = ["Bahati", "Gilgil", "Kuresoi north", "Kuresoi south", "Molo", "Naivasha", "Nakuru town east", "Nakuru town west", "Njoro", "Rongai", "Subukia"];
    }
    else if (countyName === 'Nandi') {
      this.subCounty = ["Aldai", "Chesumei", "Emgwen", "Mosop", "Namdi hills", "Tindiret"];
    }
    else if (countyName === 'Narok') {
      this.subCounty = ["Narok east", "Narok north", "Narok south", "Narok west", "Transmara east", "Transmara west"];
    }
    else if (countyName === 'Nyamira') {
      this.subCounty = ["Borabu", "Manga", "Masaba north", "Nyamira north", "Nyamira south"];
    }
    else if (countyName === 'Nyandarua') {
      this.subCounty = ["Kinangop", "Kipipiri", "Ndaragwa", "Ol Kalou", "Ol joro orok"];
    }
    else if (countyName === 'Nyeri') {
      this.subCounty = ["Kieni east", "Kieni west", "Mathira east", "Mathira west", "Mkurweni", "Nyeri town", "Othaya", "Tetu"];
    }
    else if (countyName === 'Samburu') {
      this.subCounty = ["Samburu east", "Samburu north", "Samburu west"];
    }
    else if (countyName === 'Siaya') {
      this.subCounty = ["Alego usonga", "Bondo", "Gem", "Rarieda", "Ugenya", "Unguja"];
    }
    else if (countyName === 'Taita Taveta') {
      this.subCounty = ["Mwatate", "Taveta", "Voi", "Wundanyi"];
    }
    else if (countyName === 'Tana River') {
      this.subCounty = ["Bura", "Galole", "Garsen"];
    }
    else if (countyName === 'Tharaka Nithi') {
      this.subCounty = [];
    }
    else if (countyName === 'Trans Nzoia') {
      this.subCounty = ["Cherangany", "Endebess", "Kiminini", "Kwanza", "Saboti"];
    }
    else if (countyName === 'Turkana') {
      this.subCounty = ["Loima", "Turkana central", "Turkana east", "Turkana north", "Turkana south"];
    }
    else if (countyName === 'Uasin Gishu') {
      this.subCounty = [];
    }
    else if (countyName === 'Wajir') {
      this.subCounty = ["Eldas", "Tarbaj", "Wajir East", "Wajir North", "Wajir South", "Wajir West"];
    }
    else if (countyName === 'West Pokot') {
      this.subCounty = ["Central Pokot", "North Pokot", "Pokot South", "West Pokot"];
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
