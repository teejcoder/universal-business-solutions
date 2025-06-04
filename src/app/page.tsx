export default function Home() {

  return (
    <div className="page-container">
      <main>
        <h1>Hey, babe. Main page</h1>
      </main>
      <footer className="">
        <span className="text-xs">Copyright | {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
