import { useRemoteService } from '../../custom-hooks/useRemoteService'
import { BookList } from './BookList'

export const BookListContainer = () => {
  const { data, loading, error } = useRemoteService('http://localhost:8080/books',[])
  return (
    <BookList books={data} loading={loading} error={error} />
  )
}
