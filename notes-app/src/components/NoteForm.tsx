import React, { useState } from "react";
import type { Note } from "./type";
import TextInput from "./inputs/TextInput";
import SelectOption from "./inputs/SelectOption";
import TextAreaInput from "./inputs/TextAreaInput";

type NoteFormProps = {
  notes: Note[];
  setNotes:(notes: Note[]) => void;
}

const NoteForm = ({ notes, setNotes }: NoteFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Work',
    priority: 'Medium',
    description: ''
  })
  const [isFormVisiable, setIsFormVisiable] = useState(false);
  const priorityOptions: { value: string, label: string}[] = [
    { value: 'High', label: '🔴 High' },
    { value: 'Medium', label: '🟠 Medium' }, 
    { value: 'Low', label: '🟢 Low' }
  ]
  const categoryOptions: { value: string, label: string}[] = [
    { value: 'Work', label: '📂 Work' },
    { value: 'Personal', label: '🏠 Personal' }, 
    { value: 'Other', label: '📝 Other' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({...formData, [name]: value})
  }

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //Validation 
    if (!formData.title || !formData.description) return;

    const newNote = {...formData, id: Date.now() }
    console.log(newNote);

    // Add note to state
    setNotes([...notes, newNote]);

    setFormData({
      title: '',
      category: 'Work',
      priority: 'Medium',
      description: ''
    })
  }


  return ( 
    <>
      {/* Toggle Button */}

      <button className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-400 transition mb-4"
        onClick={() => setIsFormVisiable(!isFormVisiable)}>
        {isFormVisiable ? 'Hide Form ▲' : 'Add New Note ▼'}
      </button>

      {isFormVisiable && (
        // {/* Note Form Starts */}
        <form onSubmit={handleOnSubmit} className="mb-6">
          {/* Title */}
          <div className="mb-4">            
            <TextInput
              name="title"
              value={formData.title}
              onChange={handleChange}
              required={true}
              label="Title"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          {/* Priority */}
          <div className="mb-4">
            <SelectOption
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              required={true}
              label="Priority"
              optionList={priorityOptions}
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <SelectOption
              name='category'
              value={formData.category}
              onChange={handleChange}
              required={true}
              label="Category"
              optionList={categoryOptions}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <TextAreaInput
              name="description"
              value={formData.description}
              onChange={handleChange}
              required={true}
              label="Description"
              className="w-full p-2 border rounded-lg"
            />
          </div>

          {/* Add Note Button */}
          <button className="w-full bg-background text-white p-2 rounded-lg cursor-pointer hover: bg-purple-600">Add Note</button>
        </form >
        // {/* Note Form Ends */}
      )}
    </>
   );
}
 
export default NoteForm;