import React from 'react'

type Action = {
  type: string
  payload?: string
}

type State = {
  isLoading: boolean
  isError: boolean
  data: string | undefined
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error('dataFetchReducer: unknown action type')
  }
}

type Body = {
  subject: string
  email: string
  message: string
  token: string
}

export const usePOST = (
  url: string,
): [State, React.Dispatch<React.SetStateAction<Body | undefined>>] => {
  const initialData = ''

  const [body, setBody] = React.useState<Body>()
  const [state, dispatch] = React.useReducer(reducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  })

  React.useEffect(() => {
    let didCancel = false
    const fetchData = async (): Promise<void> => {
      dispatch({ type: 'FETCH_INIT' })

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
        const json = await response.json()
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: json })
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' })
        }
      }
    }

    if (body) {
      fetchData()
    }
    return (): void => {
      didCancel = true
    }
  }, [body, url])
  return [state, setBody]
}
