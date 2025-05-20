'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1) 
  }
  
  return (
    <div>
      <main>
        <h1>Hey, babe.</h1>
        <Button onClick={handleClick}>
          Count: {count}
        </Button>
      </main>
      <footer>
        <span className="text-xs">Copyright | {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
