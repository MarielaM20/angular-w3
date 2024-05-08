import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Note } from './note';
import { InputNoteComponent } from './input-note/input-note-component';
import { DisplayNoteComponent } from './display-note/display-note-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, InputNoteComponent, DisplayNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hw3';

  notes: Note[] = [];
  selectedNote: Note | null = null;

  addOrUpdateNote(note: Note) {
    if (this.selectedNote && this.notes.includes(this.selectedNote)) {
      const index = this.notes.indexOf(this.selectedNote);
      this.notes[index] = note;
    } else {
      this.notes.push(note);
    }
    this.selectedNote = null;
  }

  setSelectedNote(note: Note) {
    this.selectedNote = note;
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }
}
