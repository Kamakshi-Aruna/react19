import { useState } from 'react';
function Action18() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false); // Manually managing the pending state
  const handleSubmit = async () => {
    setIsPending(true); // Set isPending to true before starting async operation
    try {
      const error = await updateName(name);
      setIsPending(false); // Set isPending to false after async operation
      if (error) {
        setError(error); // Handle the error
        return;
      }
      redirect("/path");
    } catch (e) {
      setIsPending(false);
      setError("An unexpected error occurred"); // Error handling
    }
  };
 return (
    <div>
      <h3>--------react 18---------</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </div>
  );
}
async function updateName(name) {
  // Simulating an async operation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "error") {
        reject("Error updating name");
      } else {
        resolve(null);
      }
    }, 2000);
  });
}
function redirect(path) {
  console.log("Redirecting to:", path);
}
export default Action18;