import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(false)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      // prevEvents - points to the previous values
      return [...prevEvents, event]
    })
  }
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((ev) => {
        return ev.id !== id
      })
    })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const displayModal = () => {
    setShowModal(true)
  }

  const subtitle = 'All the latest events in mario kingdom'
  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />
      <div>
        {console.log(showEvents)}
        {showEvents && (
          <button
            onClick={() => {
              setShowEvents(false)
            }}
          >
            Hide Events
          </button>
        )}
      </div>
      <div>
        {!showEvents && (
          <button
            onClick={() => {
              setShowEvents(true)
            }}
          >
            Show Events
          </button>
        )}
      </div>
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <NewEventForm addEvent={addEvent} handleClose={handleClose} />
        </Modal>
      )}
      <br />
      <br />
      <button onClick={displayModal}>Add New Events</button>
    </div>
  )
}

export default App
