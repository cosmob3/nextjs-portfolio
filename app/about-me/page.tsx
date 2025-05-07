import Image from "next/image";
export default function aboutPage() {
  return (
    <div>
      <main>
        <div className="grid grid-cols-7">
          <div className="text-center col-start-2 col-end-5">
            <h1 className="flex justify-center text-5xl">Hi,I am Bryan </h1>

            <p className="text-2xl p-5">
              I am Bryan Velasco, a Computer Science student with a strong
              interest in cybersecurity, ethical hacking, and the future
              implications of quantum computing. My academic focus is
              complemented by hands-on experience in Python, HTML, and CSS, as
              well as a disciplined approach to self-learning and continuous
              improvement.
            </p>
            <p className="text-2xl p-5">
              Currently pursuing a degree in Computer Science with plans to
              minor in Data Science, I am particularly drawn to the practical
              and ethical dimensions of cybersecurity. I aim to deepen my
              expertise through certifications and project-based learning, with
              a long-term goal of contributing to secure, innovative
              technological solutions.
            </p>
            <p className="text-2xl p-5">
              My background includes professional experience in customer-facing
              roles, where I developed strong communication, time management,
              and problem-solving skills. Outside of academics and work, I am
              committed to personal development—maintaining a consistent fitness
              routine, building healthy habits, and exploring creative outlets
              such as music mixing. I bring a growth mindset, resilience, and a
              genuine passion for technology to every opportunity I pursue.
            </p>
          </div>
          <div className="col-start-5 col-end-8 content-center">
            <div className="flex flex-col items-center">
              <Image
                src="/Selfie_BryanVelasco.jpeg"
                width={500}
                height={700}
                alt="Picture of the author"
                className="rounded-4xl"
              ></Image>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
