import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let ignore = false
    setStatus('loading')

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Bad response')
        return res.json()
      })
      .then((json) => {
        if (!ignore) {
          setData(json)
          setStatus('ready')
        }
      })
      .catch(() => {
        if (!ignore) setStatus('error')
      })

    return () => {
      ignore = true
    }
  }, [url])

  return { data, status }
}