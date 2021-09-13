import Layout from './Layout'
import { Button, Input, PageHeader, message as messageDialog } from 'antd'
import React from 'react'
import TextArea from 'antd/lib/input/TextArea'
import TextAreaType from 'rc-textarea'
import { FormOutlined } from '@ant-design/icons'
import styles from './Add.module.css'
import { BookReqType } from '../types'

interface AddProps {
  loading: boolean
  back: () => void
  logout: () => void
  add: (book: BookReqType) => void
}

const Add = (props: AddProps) => {
  const { loading, back, logout, add } = props

  const titleRef = React.useRef<Input>(null)
  const messageRef = React.useRef<TextAreaType>(null)
  const authorRef = React.useRef<Input>(null)
  const urlRef = React.useRef<Input>(null)

  return (
    <Layout>
      <PageHeader
        onBack={back}
        title={
          <div>
            <FormOutlined /> Add Book
          </div>
        }
        subTitle="Add Your Book"
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={logout}
            className={styles.button_logout}
          >
            Logout
          </Button>
        ]}
      />

      <img src="/bg_list.png" className={styles.bg} alt="books" />

      <div className={styles.add}>
        <div className={styles.input_title}>
          Title
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input placeholder="Title" className={styles.input} ref={titleRef} />
        </div>
        <div className={styles.input_comment}>
          Comment
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <TextArea
            rows={4}
            placeholder="Comment"
            className={styles.input}
            ref={messageRef}
          />
        </div>
        <div className={styles.input_author}>
          Author
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input
            placeholder="Author"
            className={styles.input}
            ref={authorRef}
          />
        </div>
        <div className={styles.input_url}>
          URL
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input placeholder="URL" className={styles.input} ref={urlRef} />
        </div>
        <div className={styles.button_area}>
          <Button
            size="large"
            loading={loading}
            onClick={click}
            className={styles.button}
          >
            Add
          </Button>
        </div>
      </div>
    </Layout>
  )

  function click() {
    const title = titleRef.current!.state.value
    const message = messageRef.current!.resizableTextArea.props.value as string
    const author = authorRef.current!.state.value
    const url = urlRef.current!.state.value

    if (
      title === undefined ||
      message === undefined ||
      author === undefined ||
      url === undefined
    ) {
      messageDialog.error('Please fill out all inputs')
      return
    }

    add({
      title,
      message,
      author,
      url
    })
  }
}

export default Add
