import { BookList } from './BookList'
import { useRemoteService } from '../custom-hooks/useRemoteService'

export const BookListContainer = () => {
  const { data, loading, error } = useRemoteService([])
  return (
    <BookList books={data} loading={loading} error={error} />
  )
}
