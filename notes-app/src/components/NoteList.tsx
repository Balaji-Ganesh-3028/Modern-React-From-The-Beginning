import Note from "./Note";
import type { Notes } from "./type";

type NoteListProps = {
  notes: Notes[];
  deleteNote: (id: number) => void;
}

const NoteList = ({ notes, deleteNote }: NoteListProps) => {
  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-500">No Notes Yet</p>
    )
  }
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}
export default NoteList;
