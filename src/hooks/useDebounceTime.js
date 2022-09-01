import { useEffect, useState } from "react"

const useDebounceTime = (ms, updateCallback) => {
    const [shouldPrevent, setshouldPrevent] = useState(false);
    const [prevTerm, setPrevTerm] = useState(undefined);
    const [current, setCurrent] = useState(undefined)

    const UpdateDebounedDistinct = (term) => {
        if (!shouldPrevent && term) {
            setTimeout(() =>
                setshouldPrevent(false)
                , ms);
            setshouldPrevent(true);
            setPrevTerm(term);
            setCurrent(term);
            updateCallback(term);
        }
        else {
            setCurrent(term);
        }
    }

    useEffect(() => {
        if (prevTerm != current) {
            updateCallback(current)
        }
    }, [shouldPrevent])


    return { UpdateDebounedDistinct }
}

export { useDebounceTime };