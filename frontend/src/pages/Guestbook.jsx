import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

function Guestbook() {
    const { data, status } = useFetch('/api/guestbook')
    const [added, setAdded] = useState([])

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [sending, setSending] = useState('')
    const [errors, setErrors] = useState({})
    const [formError, setFormError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        setSending(true)
        setErrors({})
        setFormError('')

        try {
            const res = await fetch('/api/guestbook', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ name, message }),
            })
            const body = await res.json()

            if (res.status === 400) {
                setErrors(body.errors || {})
                return
            }
            if (!res.ok) throw new Error('Request failed')

            setAdded((prev) => [body, ...prev])
            setName('')
            setMessage('')
        } catch {
            setFormError("Couldn't send that. Try again after two shakes of a ducks tail.")
        } finally {
            setSending(false)
        }
    }
     
    const entries = [...added, ...data]

    return (
        <section className='page guestbook'>
            <h1>Guestbook</h1>
            <p className='guestbook-intro'>Leave a note. I read every one.</p>

            <form className='guestbook-form' onSubmit={handleSubmit}>
                <label htmlFor="gb-name">Name</label>
                <input 
                  id='gb-name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={40}
                  required
                />
                {errors.name && <p className='field-error'>{errors.name}</p>}

                <label htmlFor="gb-message">Message</label>
                <textarea 
                 id="gb-message"
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
                 maxLength={281}
                 rows={4}
                 required
                 />
                <p className='char-count'>{message.length}/281</p>
                {errors.message && <p className='field-error'>{errors.message}</p>}

                <button type='submit' className='gb-summit' disabled={sending}>
                    {sending ? 'sending...' : 'sign the questbook'}
                </button>
                 {formError && <p className='field-error'>{formError}</p>}
            </form>

            {status === 'loading' && <p className='load-note'>loading...</p>}
            {status === 'error' && <p className='load-note'>couldn't load the guestbook</p>}
            {status === 'ready' && entries.length === 0 && (
                <p className='load-note'>No messages yet. Care to be the first?</p>
            )}
            <ul className='gb-list'>
                {entries.map((entry) => (
                    <li key={entry.id} className='gb-entry'>
                        <p className='gb-message'>{entry.message}</p>
                        <p className='gb-meta'>
                            {entry.name} . {new Date(entry.createdAt).toLocaleDateString()}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Guestbook