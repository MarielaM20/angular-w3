import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Note } from '../note';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-input-note',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './input-note-component.html',
    styleUrl: './input-note-component.css',
})
export class InputNoteComponent implements OnChanges {
    @Input() note: Note | null = null;
    @Output() noteAdded = new EventEmitter<Note>();
    @ViewChild('noteForm') noteForm!: NgForm;

    newNote: Note = { title: '', content: '' };

    ngOnChanges(changes: SimpleChanges) {

        if (changes['note'] && this.note) {
            this.newNote = { ...this.note };
        } else {
            this.resetNote();
        }
    }

    saveNote() {
        console.log('Form submitted', this.newNote);
        if (this.noteForm.valid) {
            this.noteAdded.emit(this.newNote);
            this.resetNote();
        }
    }

    resetNote() {
        this.newNote = { title: '', content: '' };
        this.noteForm.resetForm();
    }
}