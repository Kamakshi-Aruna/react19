import { useState, useTransition } from 'react';
function Action19() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition(); // Using useTransition
  const handleSubmit = () => {
    startTransition(async () => {  // Automatically manages the pending state
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
      redirect("/path");
    });
  };
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </div>
  );
}
async function updateName(name) {
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
export default Action19;