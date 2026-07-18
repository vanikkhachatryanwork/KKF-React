import { useEffect, useState } from 'react'

export function useApi<T>(loader: (signal: AbortSignal) => Promise<T>, dependencies: unknown[] = []) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const controller = new AbortController()
    Promise.resolve().then(() => { if (!controller.signal.aborted) { setLoading(true); setError(undefined) } })
    loader(controller.signal).then(setData).catch((reason) => {
      if (reason?.name !== 'AbortError') setError(reason instanceof Error ? reason : new Error(String(reason)))
    }).finally(() => { if (!controller.signal.aborted) setLoading(false) })
    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
  return { data, error, loading }
}
