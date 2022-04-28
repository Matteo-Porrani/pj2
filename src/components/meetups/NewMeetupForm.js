import { useRef } from 'react';

import Card from '../ui/Card';

import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  // getting HTML elements with useRef() linked 'ref' attribute
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();


  function submitHandler(event) {
    event.preventDefault();

    const meetupData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    }

    // we create a new property of props, knowing that it will be a function
    props.onAddMeetup(meetupData);

  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>

        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea required id='description' ref={descriptionInputRef} rows='5'></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>

      </form>
    </Card >
  );

}

export default NewMeetupForm;