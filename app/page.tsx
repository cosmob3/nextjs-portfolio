import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/navBar/navBar";
export default function Home() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <article className="text-center">
          <h1>Welcome to page!</h1>
          <p>
            I hope you enjoy what you see and hopefully want to hire me! lol
          </p>
        </article>
      </main>
      <footer></footer>
    </div>
  );
}
