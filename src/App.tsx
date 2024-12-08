const links = [
  {
    category: "dev",
    items: [
      { name: "github", url: "https://github.com/" },
      { name: "udemy", url: "https://www.udemy.com/" },
      { name: "dribble", url: "https://dribbble.com/" },
      { name: "gitlab", url: "https://gitlab.com/" },
      { name: "leetcode", url: "https://leetcode.com/" },
    ],
  },
  {
    category: "UAM",
    items: [
      { name: "SIIPI", url: "https://siipi.izt.uam.mx/login" },
      {
        name: "SIIUAM",
        url: "https://zacatlan.rec.uam.mx:8443/rec/izt/aewbf001.omuestraframes?mod=1",
      },
      { name: "titlani", url: "https://titlani.uam.mx/" },
    ],
  },
  {
    category: "Google",
    items: [
      { name: "gmail", url: "https://mail.google.com/mail/u/0/" },
      { name: "classroom", url: "https://classroom.google.com/u/0/" },
      { name: "drive", url: "https://drive.google.com/drive/u/0/" },
    ],
  },
  {
    category: "ai",
    items: [
      { name: "chatGPT", url: "https://chat.openai.com/chat" },
      { name: "colab", url: "https://colab.research.google.com/" },
      { name: "claude", url: "https://claude.ai/chats" },
    ],
  },
  {
    category: "others",
    items: [
      { name: "youtube", url: "https://www.youtube.com/" },
      { name: "reddit", url: "https://www.reddit.com/" },
      { name: "epic games", url: "https://store.epicgames.com/es-MX/" },
    ],
  },
];

function App() {
  return (
    <main className="flex min-h-screen bg-[#11111b] text-white justify-center items-center">
      <section className="flex justify-center items-center">
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWt1cjk1bzE0NWZyNGlld2gxeXFzYWo0eXF1OWx6dnhvdWhnNG52MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cFdHXXm5GhJsc/giphy.webp"
          alt="Donatello Ninja Turtle GIF"
          className="w-1/3 h-1/3"
        />

        <div className="grid grid-cols-3">
          {links.map((group) => {
            return (
              <div
                key={group.category}
                className={`m-4 p-4 ${
                  group.category == "dev" ? "col-span-2" : ""
                }`}
              >
                <h2 className="font-bold text-lg text-teal-400">
                  {group.category}
                </h2>
                <ul
                  className={`${
                    group.category == "dev" ? "grid grid-cols-2" : ""
                  }`}
                >
                  {group.items.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url}>{item.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
