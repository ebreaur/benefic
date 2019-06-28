import { Component, OnInit } from '@angular/core';
import { SoundService} from '../sound.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'stomato';
  private _message = '';

  constructor(private soundService: SoundService) { }

  ngOnInit() {
  }

  get message(): string {
      return this._message;
  }

  set message(value: string) {
      if (this._message !== value) {
          this._message = value;
      }
  }

  private updateMessage() {
    this.message = 'Auuuuuusu!';
  }

  public onTap() {
    this.soundService.play('Tada');
    this.updateMessage();
  }
}
