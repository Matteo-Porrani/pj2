import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-getting-started-861ab-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    ).then(() => {

      // we use a 'history' method and pass a path
      history.replace('/');
    });


  }

  return (
    <section>
      <h1>Add New Meetup</h1>

      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

/**
 * By default Fetch() sends a GET request
 */