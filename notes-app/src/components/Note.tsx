import type { Notes } from "./type";
type NoteProps = {
  note: Notes;
  deleteNote: (id: number) => void;
}
const Note = ({ note, deleteNote }: NoteProps) => {
  return ( 
    <div key={note.id} className="p-4 bg-white rounded-lg shadow-md border-l-4"
      style={{borderLeftColor: note.priority === 'High' ? 'red' : note.priority === 'Medium' ? 'orange' : 'green'}}>
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600"><strong>Category: </strong>{note.category}</p>
      <p className="text-sm text-gray-600"><strong>Priority: </strong>{note.priority}</p>
      <p className="text-sm text-gray-600 mt-2"><strong>Description: </strong>{note.description}</p>
      <button className="mt-3 text-red-500 cursor-pointer hover:text-red-700" onClick={() => deleteNote(note.id)}> 🗑 Delete</button>
    </div>
   );
}
 
export default Note;