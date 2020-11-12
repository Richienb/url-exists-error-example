import { Component, OnInit } from '@angular/core'
import urlExist from 'url-exist'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

	ngOnInit() {
		console.log(urlExist("http://google.com") ? "Yes" : "No");
	}
}
