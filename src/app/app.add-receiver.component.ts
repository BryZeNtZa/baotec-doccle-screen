import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'add-receiver',
  templateUrl: './app.add-receiver.component.html',
})
export class AddReceiverComponent {
  title = 'baotec-doccle-screens';

  // country list
  countries: any = [
    {
      full: "Belge",
      short: "BE"
    },
    {
      full: "Camerounaise",
      short: "CM"
    },
    {
      full: "Canadienne",
      short: "CA"
    }
  ];
  selectedCountry: string = "BE";
  
  selectedCountryControl = new FormControl(this.selectedCountry);

  // languages list
  languages: any = [
    {
      full: "Français",
      short: "FR"
    },
    {
      full: "Anglais",
      short: "EN"
    },
    {
      full: "Canadienne",
      short: "CA"
    }
  ];
  selectedLanguage: string = "FR";
  
  selectedLanguageControl = new FormControl(this.selectedLanguage);


  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

	saveReceiver() {

	}

	removeReceiver() {
		
	}

	backToListReceivers() {
		this.router.navigate(['/list-receivers']);
	}
}
