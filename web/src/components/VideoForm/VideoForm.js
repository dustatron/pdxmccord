import { useState } from 'react'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import imgHelper from './imgHelper'

const VideoForm = (props) => {
  const [linkState, setLinkState] = useState(props.video?.link)
  const [imgState, setImgState] = useState(props.video?.img)

  const onLinkChange = (e) => {
    setLinkState(e.target.value)
    imgHelper(e.target.value)

  }

  const onImageChange = (e) => {
    setImgState(e.target.value)
    console.log('ImgState', imgState)
  }

  const onSubmit = (data) => {
    props.onSave(data, props?.video?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.video?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="link"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Link
        </Label>
        <TextField
          name="link"
          value={linkState}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          onChange={onLinkChange}
        />
        <FieldError name="link" className="rw-field-error" />

        <Label
          name="img"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>
        <TextField
          name="img"
          value={imgState}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          onChange={onImageChange}
          validation={{ required: true }}
        />
        <FieldError name="img" className="rw-field-error" />
        <div>
          <img src="" alt="" />
        </div>

        <Label
          name="year"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Year
        </Label>
        <TextField
          name="year"
          defaultValue={props.video?.year}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="year" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>
        <TextField
          name="type"
          defaultValue={props.video?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="type" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>
        <TextField
          name="body"
          defaultValue={props.video?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="body" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default VideoForm
