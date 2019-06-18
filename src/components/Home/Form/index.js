import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Question from './Question';
import Snackbar from '@material-ui/core/Snackbar';



const Form = (props) => {
  
  const { handleSubmit, pristine, reset, submitting } = props
  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }
  return (
    <form onSubmit={handleSubmit} className="home-form">
    <div className="home-question-box">
        {props.questions.map((question) => (
            <div key={question.id}>
                {
                    <Question question={question} key={question.id} />
                }
            </div>
        ))}
      </div>
      <div className="home_additional-notes">
        <label className="home_additional-notes_field">Additional Notes</label>
        <div>
          <Field name="Additional Notes" component="textarea" />
        </div>
      </div>
      <div className="home_buttons">
        <button type="submit" onClick={handleClick} disabled={pristine || submitting}>
          Copy
        </button>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">Copied to Clipboard</span>}
          />
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(Form);