export default function Home() {

  return (
    <div>
      <main className="page-container">
        <h1>Hey, babe.</h1>
      </main>
      <footer className="page-container">
        <span className="text-xs">Copyright | {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
