import { Link } from "react-router-dom"
import {Tooltip, Button} from 'antd'
import { BookOutlined, DeleteOutlined, EditOutlined, HomeOutlined } from '@ant-design/icons'
import {BookType} from '../types'
import moment from 'moment'
import styles from './Book.module.css'

interface BookProps extends BookType {

}

const Book = ({bookId, title, author, createdAt, url}: BookProps) => {
  return (
    <>
      <div className={styles.book}>
        <div className={styles.title}>
          <Link to={`/book/${bookId}`} className={styles.link_detail_title}>
            <BookOutlined /> {title}
          </Link>
        </div>
        <div className={styles.author}>
          <Link to={`/book/${bookId}`} className={styles.link_detail_author}>
            {author}
          </Link>
        </div>
        <div className={styles.created}>
          {moment(createdAt).format('MM-DD-YYYY hh:mm a')}
        </div>
        <div className={styles.tooltips}>
          <Tooltip title={url}>
            <a
              href={url}
              target="_BLANK"
              rel="noopener noreferrer"
              className={styles.link_url}
            >
              <Button
                size="small"
                type="primary"
                shape="circle"
                icon={<HomeOutlined />}
                className={styles.button_url}
              />
            </a>
          </Tooltip>
          <Tooltip title="Edit">
            <Button
              size="small"
              shape="circle"
              icon={<EditOutlined />}
              className={styles.button_edit}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              size="small"
              type="primary"
              shape="circle"
              danger
              icon={<DeleteOutlined />} 
            />
          </Tooltip>
        </div>
      </div>
    </>
    
  )
} 

export default Book