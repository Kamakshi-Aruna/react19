import { useState } from 'react';

function MyForm18() {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate an API call
      await submitName(name);
      setIsSubmitting(false);
      setName(''); // Reset the form
    } catch (err) {
      setIsSubmitting(false);
      setError('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isSubmitting}
      />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

async function submitName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === 'error') {
        reject('Error submitting name');
      } else {
        resolve();
      }
    }, 2000);
  });
}
 
export default MyForm18;