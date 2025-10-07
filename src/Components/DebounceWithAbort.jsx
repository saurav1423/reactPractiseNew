import { useEffect, useState } from 'react'

//write code to fetch github users with debounce and abort previous request if new request is made

function DebounceWithAbort() {
  const [search, setSearch] = useState('')

  useEffect(() => {
    // console.log('Search term:', search);
    const controller = new AbortController();
    const signal = controller.signal;
    const timer =  setTimeout(() => {
      fetch(`https://api.github.com/search/users?q=${search}`, { signal })
        .then(res => res.json())
        .then(data => {
          console.log('Data:', data);
        }).catch(err => {
          if (err.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            console.error('Fetch error:', err);
          }
        })
    }, 1000)

    return () => {
      clearTimeout(timer);
      controller.abort();
      // console.log('Cleanup for search term:', search);
    }
  }, [search])

  return (
    <>
      <input
       onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder='Search...'
       type="text" />
    </>
  )
}

export default DebounceWithAbort
