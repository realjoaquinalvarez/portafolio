export default function Info() {
  const funcionRancia = () => {
    console.log("working from info.tsx");
  };
  return (
    <div>
      <h1>About Us</h1>

      <button onClick={funcionRancia}></button>
    </div>
  );
}
