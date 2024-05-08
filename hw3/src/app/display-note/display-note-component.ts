import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../note';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-display-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-note-component.html',
  styleUrl: './display-note-component.css'
})
export class DisplayNoteComponent {
  @Input() notes: Note[] = [];
  @Output() noteEdited = new EventEmitter<Note>();
  @Output() noteDeleted = new EventEmitter<number>();
  selectedIndex: number | null = null;

  selectNote(note: Note, index: number) {
    this.selectedIndex = index;
  }

  editNote() {
    if (this.selectedIndex !== null) {
      this.noteEdited.emit(this.notes[this.selectedIndex]);
    }
  }

  deleteNote(index: number) {
    this.noteDeleted.emit(index);    
  }

}