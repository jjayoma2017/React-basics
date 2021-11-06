import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ addEvent, handleClose }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('Machester')
  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title,
      date,
      id: Math.floor(Math.random() * 1000),
      location,
    }
    addEvent(event)
    resetForm()
    handleClose()
  }
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
      </label>
      <label>
        <span>Event date</span>
        <input
          value={date}
          type="date"
          onChange={(e) => {
            setDate(e.target.value)
          }}
        />
      </label>
      <label>
        <span>Location</span>
        <select
          onChange={(e) => {
            setLocation(e.target.value)
          }}
        >
          <option value="Machester">Machester</option>
          <option value="London">London</option>
          <option value="Cardiff">Cardiff</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}
