import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
})

type QueryKeys = {
  test: string
}

export const queryKeys: QueryKeys = {
  test: 'test'
}

export function filterObjectValues(
  obj: QueryKeys,
  excludeWords: string[]
): string[] {
  const result = Object.values(obj).flatMap((nestedObj) =>
    Object.values(nestedObj).filter((value) => !excludeWords.includes(value))
  )

  return result
}
