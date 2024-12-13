import { useState } from 'react';

function MyForm19() {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const actionFunction = async () => {
    try {
      await submitName(name);
      setName(''); // Automatically reset the form after submission
    } catch (err) {
      setError('Submission failed');
    }
  };

  return (
    <form action={actionFunction}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
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


export default MyForm19;