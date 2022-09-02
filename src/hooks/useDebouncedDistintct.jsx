import { useEffect, useState } from 'react'

const useDebouncedDistintct = (ms, updateCallback) => {
  const [shouldPrevent, setshouldPrevent] = useState(false)
  const [prevTerm, setPrevTerm] = useState(undefined)
  const [count, setCount] = useState(0)
  const [current, setCurrent] = useState(undefined)

  const UpdateDebounedDistinct = (term) => {
    if (!shouldPrevent && term) {
      setTimeout(() => setshouldPrevent(false), ms)
      setshouldPrevent(true)
      setPrevTerm(term)
      setCurrent(term)
      updateCallback(term)
      setCount((prev) => prev + 1)
    } else {
      setCurrent(term)
    }
  }

  useEffect(() => {
    if (prevTerm != current) {
      updateCallback(current)
      setCount((prev) => prev + 1)
    }
  }, [shouldPrevent])

  useEffect(() => {
    console.log(count)
  }, [count])

  return { UpdateDebounedDistinct }
}

export { useDebouncedDistintct }
