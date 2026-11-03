import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-county-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './county-education.html',
  styleUrl: './county-education.css'
})
export class CountyEducation implements OnInit {
  
  dashboardData = {
    county: 'Nairobi', // This will eventually come from the logged-in user
    role: 'CDE',
    stats: { approved: 0, rejected: 0, pending: 1, appeals: 0, totalLearners: 0 },
    approvalBreakdown: { approved: 0, pending: 1, rejected: 0 },
    categories: {
      regular: { count: 0, percentage: 0.0 },
      integrated: { count: 0, percentage: 0.0 },
      sne: { count: 0, percentage: 0.0 }
    }
  };

  // Dynamic arrays for dropdowns
  subCounty: string[] = [];
  selectedLevel = 'Primary School';
  selectedSubCounty = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // All the 47 counties and respective subCounties
    
    //1. Baringo
    if (this.dashboardData.county === 'Baringo') {
      this.subCounty = [
        "Baringo central",
        "Baringo north",
        "Baringo south",
        "Eldama ravine",
        "Mogotio",
        "Tiaty"
      ];
    }
    //2. Bomet
    else if (this.dashboardData.county === 'Bomet') {
      this.subCounty = [
        "Bomet central",
        "Bomet east",
        "Chepalungu",
        "Konoin",
        "Sotik"
      ];
    }
    //3. Bungoma
    else if (this.dashboardData.county === 'Bungoma') {
      this.subCounty = [
        "Bumula",
        "Kabuchai",
        "Kanduyi",
        "Kimilil",
        "Mt Elgon",
        "Sirisia",
        "Tongaren",
        "Webuye east",
        "Webuye west"
      ]
    }
    //4. Busia
    else if (this.dashboardData.county === 'Busia') {
      this.subCounty = [
         "Budalangi",
        "Butula",
        "Funyula",
        "Nambele",
        "Teso North",
        "Teso South"
      ]
    }
    //5. Elgeyo-Marakwet
    else if (this.dashboardData.county === 'Elgeyo-Marakwet') {
      this.subCounty = [
         "Keiyo north",
        "Keiyo south",
        "Marakwet east",
        "Marakwet west"
      ]
    }
    //6. Embu
    else if (this.dashboardData.county === 'Embu') {
      this.subCounty = [
         "Manyatta",
        "Mbeere north",
        "Mbeere south",
        "Runyenjes"
      ]
    }
    //7. Garissa
    else if (this.dashboardData.county === 'Garissa') {
      this.subCounty = [
         "Daadab",
        "Fafi",
        "Garissa",
        "Hulugho",
        "Ijara",
        "Lagdera balambala"
      ]
    }
    //8. Homa Bay
    else if (this.dashboardData.county === 'HomaBay') {
      this.subCounty = [
         "Homabay town",
        "Kabondo",
        "Karachwonyo",
        "Kasipul",
        "Mbita",
        "Ndhiwa",
        "Rangwe",
        "Suba"
      ]
    }
    //9. Isiolo
    else if (this.dashboardData.county === 'Isiolo') {
      this.subCounty = [
        "Isiolo",
        "Garba tula",
        "Merit"
      ]
    }
    //10. Kajiado
    else if (this.dashboardData.county === 'Kajiado') {
      this.subCounty = [
        "Isinya",
        "Kajiado Central",
        "Kajiado North",
        "Loitokitok",
        "Mashuuru"
      ]
    }
    //11. Kakamega
    else if (this.dashboardData.county === 'Kakamega') {
      this.subCounty = [
        "Butere",
        "Kakamega central",
        "Kakamega east",
        "Kakamega north",
        "Kakamega south",
        "Khwisero",
        "Lugari",
        "Lukuyani",
        "Lurambi",
        "Matete",
        "Mumias",
        "Mutungu",
        "Navakholo"
        
      ]
    }
    //12. Kericho
    else if (this.dashboardData.county === 'Kericho') {
      this.subCounty = [
       "Ainamoi",
        "Belgut",
        "Bureti",
        "Kipkelion east",
        "Kipkelion west",
        "Soin sigowet"        
      ]
    }
    //13. Kiambu
    else if (this.dashboardData.county === 'Kiambu') {
      this.subCounty = [
        "Gatundu north",
        "Gatundu south",
        "Githunguri",
        "Juja",
        "Kabete",
        "Kiambaa",
        "Kiambu",
        "Kikuyu",
        "Limuru",
        "Ruiru",
        "Thika town",
        "lari"
      ]
    }
    //14. Kilifi
    else if (this.dashboardData.county === 'Kilifi') {
      this.subCounty = [
        "Genzw",
        "Kaloleni",
        "Kilifi north",
        "Kilifi south",
        "Magarini",
        "Malindi",
        "Rabai"
      ]
    }
    //15. Kirinyaga
    else if (this.dashboardData.county === 'Kirinyaga') {
      this.subCounty = [
        "Kirinyaga central",
        "Kirinyaga east",
        "Kirinyaga west",
        "Mwea east",
        "Mwea west"
      ]
    }
    //16. Kisii
    else if (this.dashboardData.county === 'Kisii') {
      this.subCounty = [
        'Etago',
        'Gucha',
        'Gucha South',
        'Kenyenya',
        'Kisii Central',
        'Kisii South ',
        'Kitutu Central', 
        'Marani',
        'Masaba South',
        'Nyamache',
        'Sameta '
      ]
    }
    //17. Kisumu
    else if (this.dashboardData.county === 'Kisumu') {
      this.subCounty = [
        "Kisumu central",
        "Kisumu east ",
        "Kisumu west",
        "Mohoroni",
        "Nyakach",
        "Nyando",
        "Seme"
      ]
    }
    //18. Kitui
    else if (this.dashboardData.county === 'Kitui') {
      this.subCounty = [
        "Ikutha",
        "Katulani",
        "Kisasi",
        "Kitui central",
        "Kitui west ",
        "Lower yatta",
        "Matiyani",
        "Migwani",
        "Mutitu",
        "Mutomo",
        "Muumonikyusu",
        "Mwingi central",
        "Mwingi east",
        "Nzambani",
        "Tseikuru"
      ]
    }
    //19. Kwale
    else if (this.dashboardData.county === 'Kwale') {
      this.subCounty = [
        "Kinango",
        "Lungalunga",
        "Msambweni",
        "Mutuga"
      ]
    }
    //20. Laikipia
    else if (this.dashboardData.county === 'Laikipia') {
      this.subCounty = [
        "Laikipia central",
        "Laikipia east",
        "Laikipia north",
        "Laikipia west ",
        "Nyahururu"
      ]
    }
    //21. Lamu
    else if (this.dashboardData.county === 'Lamu') {
      this.subCounty = [
        "Lamu East",
        "Lamu West"
      ]
    }
    //22. Machakos
    else if (this.dashboardData.county === 'Machakos') {
      this.subCounty = [

        "Kathiani",
        "Machakos town",
        "Masinga",
        "Matungulu",
        "Mavoko",
        "Mwala",
        "Yatta" 
      ]
    }
    //23. Makueni
    else if (this.dashboardData.county === 'Makueni') {
      this.subCounty = [
        "Kaiti",
        "Kibwei west",
        "Kibwezi east",
        "Kilome",
        "Makueni",
        "Mbooni"
      ]
    }
    //24. Mandera
    else if (this.dashboardData.county === 'Mandera') {
      this.subCounty = [
        "Banissa",
        "Lafey",
        "Mandera East",
        "Mandera North",
        "Mandera South",
        "Mandera West"
      ]
    }
    //25. Marsabit
    else if (this.dashboardData.county === 'Marsabit') {
      this.subCounty = [
        "Laisamis",
        "Moyale",
        "North hor",
        "Saku"
      ]
    }
    //26. Meru
    else if (this.dashboardData.county === 'Meru') {
      this.subCounty = [
         "Buuri",
        "Igembe central",
        "Igembe north",
        "Igembe south",
        "Imenti central",
        "Imenti north",
        "Imenti south",
        "Tigania east",
        "Tigania west"
      ]
    }
    //27. Migori
    else if (this.dashboardData.county === 'Migori') {
      this.subCounty = [
        "Awendo",
        "Kuria east",
        "Kuria west",
        "Mabera",
        "Ntimaru",
        "Rongo",
        "Suna east",
        "Suna west",
        "Uriri"
      ]
    }
    //28. Mombasa
    else if (this.dashboardData.county === 'Mombasa') {
      this.subCounty = [
        "Changamwe",
        "Jomvu",
        "Kisauni",
        "Likoni",
        "Mvita",
        "Nyali"
      ]
    }
    //29. Murang'a
    else if (this.dashboardData.county === "Murang'a" ){
      this.subCounty = [
        "Gatanga",
        "Kahuro",
        "Kandara",
        "Kangema",
        "Kigumo",
        "Kiharu",
        "Mathioya",
        "Murang’a south"
      ]
    }
    //30. Nairobi
    else if (this.dashboardData.county === 'Nairobi') {
      this.subCounty = [
        "Dagoretti North Sub County",
        "Dagoretti South Sub County ",
        "Embakasi Central Sub Count",
        "Embakasi East Sub County",
        "Embakasi North Sub County ",
        "Embakasi South Sub County",
        "Embakasi West Sub County",
        "Kamukunji Sub County",
        "Kasarani Sub County ",
        "Kibra Sub County ",
        "Lang'ata Sub County ",
        "Makadara Sub County",
        "Mathare Sub County ",
        "Roysambu Sub County ",
        "Ruaraka Sub County ",
        "Starehe Sub County ",
        "Westlands Sub County "
      ]
    }
    //31. Nakuru
    else if (this.dashboardData.county === 'Nakuru') {
      this.subCounty = [
        "Bahati",
        "Gilgil",
        "Kuresoi north",
        "Kuresoi south",
        "Molo",
        "Naivasha",
        "Nakuru town east",
        "Nakuru town west",
        "Njoro",
        "Rongai",
        "Subukia"
      ]
    }
    //32. Nandi
    else if (this.dashboardData.county === 'Nandi') {
      this.subCounty = [
         "Aldai",
        "Chesumei",
        "Emgwen",
        "Mosop",
        "Namdi hills",
        "Tindiret"
      ]
    }
    //33. Narok
    else if (this.dashboardData.county === 'Narok') {
      this.subCounty = [
        "Narok east",
        "Narok north",
        "Narok south",
        "Narok west",
        "Transmara east",
        "Transmara west"
      ]
    }
    //34. Nyamira
    else if (this.dashboardData.county === 'Nyamira') {
      this.subCounty = [
        "Borabu",
        "Manga",
        "Masaba north",
        "Nyamira north",
        "Nyamira south"
      ]
    }
    //35. Nyandarua
    else if (this.dashboardData.county === 'Nyandarua') {
      this.subCounty = [
        "Kinangop",
        "Kipipiri",
        "Ndaragwa",
        "Ol Kalou",
        "Ol joro orok"
      ]
    }
    //36. Nyeri 
    else if (this.dashboardData.county === 'Nyeri') {
      this.subCounty = [
        "Kieni east",
        "Kieni west",
        "Mathira east",
        "Mathira west",
        "Mkurweni",
        "Nyeri town",
        "Othaya",
        "Tetu"
      ]
    }
    //37. Samburu
    else if (this.dashboardData.county === 'Samburu') {
      this.subCounty = [
        "Samburu east",
        "Samburu north",
        "Samburu west"
      ]
    }
   //38. Siaya
   else if (this.dashboardData.county === 'Siaya') {
      this.subCounty = [
        "Alego usonga",
        "Bondo",
        "Gem",
        "Rarieda",
        "Ugenya",
        "Unguja"
      ]
    }
    //39. Taita Taveta
    else if (this.dashboardData.county === 'Taita Taveta') {
      this.subCounty = [
        "Mwatate",
        "Taveta",
        "Voi",
        "Wundanyi"
      ]
    }
    //40. Tana River
    else if (this.dashboardData.county === 'Tana River') {
      this.subCounty = [
        "Bura",
        "Galole",
        "Garsen"
      ]
    }
    //41. Tharaka Nithi
    else if (this.dashboardData.county === 'Tharaka Nithi') {
      this.subCounty = [
        
      ]
    }
    //42.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //43.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //44. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //45. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //46. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //47. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }

}


  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}