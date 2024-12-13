import { useOptimistic } from 'react-dom';

function ChangeName({ currentName, onUpdateName }) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async (event) => {
    event.preventDefault();  // Prevent default form submission
    const formData = new FormData(event.target);
    const newName = formData.get("name");
    setOptimisticName(newName); // Optimistically set the new name
    try {
      const updatedName = await updateName(newName); // Simulate an API call
      onUpdateName(updatedName); // Notify parent of the update
    } catch (error) {
      setOptimisticName(currentName); // Revert if update fails
    }
  };

  return (
    <form onSubmit={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input
          type="text"
          name="name"
          defaultValue={optimisticName}
          disabled={currentName !== optimisticName} // Disable input if already updating
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

async function updateName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === 'error') {
        reject('Error updating name');
      } else {
        resolve(name);
      }
    }, 2000);
  });
}

export default ChangeName;
