import { Button, PageHeader, Table } from 'antd'
import Layout from './Layout'
import { BookType } from '../types'
import { useEffect } from 'react'
import Book from './Book'
import styles from './List.module.css'

interface ListProps {
  books: BookType[] | null
  loading: boolean
  getBooks: () => void
  error: Error | null
  logout: () => void
  goAdd: () => void
  deleteBook: (bookId: number) => void
}

const List: React.FC<ListProps> = ({
  books,
  loading,
  getBooks,
  error,
  logout,
  goAdd,
  deleteBook
}) => {
  useEffect(() => {
    getBooks()
  }, [getBooks])

  useEffect(() => {
    if (error) logout()
  }, [error, logout])

  return (
    <Layout>
      <PageHeader
        title={<div>Book List</div>}
        extra={[
          <Button
            key="add"
            type="primary"
            onClick={goAdd}
            className={styles.button}
          >
            Add Book
          </Button>,
          <Button
            key="logout"
            type="primary"
            onClick={logout}
            className={styles.button}
          >
            Logout
          </Button>
        ]}
      />
      <Table
        className={styles.table}
        dataSource={books || []}
        columns={[
          {
            title: 'Book',
            dataIndex: 'book',
            key: 'book',
            render: (text, record) => {
              return <Book deleteBook={deleteBook} {...record} />
            }
          }
        ]}
        loading={books === null || loading}
        showHeader={false}
        rowKey="bookId"
        pagination={false}
      />
    </Layout>
  )
}

export default List
