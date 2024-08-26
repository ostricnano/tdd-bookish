import { useRemoteService } from '../custom-hooks/useRemoteService'
import { BookList } from './book-list/BookList'

export const BookListContainer = () => {
  const { data, loading, error } = useRemoteService([])
  return (
    <BookList books={data} loading={loading} error={error} />
  )
}
