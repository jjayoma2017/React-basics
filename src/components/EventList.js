import React from 'react'
import styles from './EventList.module.css'
export default function EventList({ events, handleClick }) {
  return events.map((ev, idx) => (
    <div className={styles.card} key={ev.id}>
      <h2>
        {idx}-{ev.title}
      </h2>
      <p>
        {ev.location} - {ev.date}
      </p>
      <button
        onClick={() => {
          handleClick(ev.id)
        }}
      >
        Delete
      </button>
    </div>
  ))
}
