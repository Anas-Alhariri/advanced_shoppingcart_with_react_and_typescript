import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  //* The useState logic:
  const [value, setValue] = useState<T>(() => {
    //! Check if the localStorage has any data in it?
    const jsonValue = localStorage.getItem(key)
    //! If the localStorage has data in it, then return it as a JavaScript object.
    if (jsonValue != null) return JSON.parse(jsonValue)

    //! Check if the initialValue is a function:
    if (typeof initialValue === "function") {
      //! if it is a function, then return the result of calling that function:
      return (initialValue as () => T)()
    } else {
      //! Return the initialValue that was passed as it is.
      return initialValue
    }
  })

  //! spacer:

  //* What happens when we call this function, or the key or the initialValue changes:
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}
