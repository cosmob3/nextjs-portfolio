import NavBar from "../components/navBar/navBar";

export default function aboutPage() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="text-center">
          <h1 className="flex justify-center text-5xl">Hi, my name is </h1>
          <h2 className="text-6xl">Bryan Velasco</h2>

          <p className="flex justify-center text-2xl">
            I am a Data Science student looking to jump into the world of tech!
          </p>
          <p className="flex justify-center text-2xl">
            I have loved computers since I can remember and cannot wait to
            continue my learning journey in this world of 11001010!
          </p>
        </div>
      </main>
    </div>
  );
}
