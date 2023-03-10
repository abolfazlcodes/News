const videosWrapper = document.querySelector(".videos__wrapper");

// Songs info
const videos = [
  {
    id: "1",
    title: "Else Paris",
    artist: "Abolbache",
    link: "http://youtube.com",
    coverPath: "../src/data/covers/cover1.jpg",
  },
  {
    id: "2",
    title: "Else Paris",
    artist: "Abolbache",
    link: "http://youtube.com",
    coverPath: "../src/data/covers/cover1.jpg",
  },
  {
    id: "3",
    title: "Else Paris",
    artist: "Abolbache",
    link: "http://youtube.com",
    coverPath: "../src/data/covers/cover1.jpg",
  },
];

// generate the markup for podcasts
const generateVideoMarkup = () => {
  const markup = videos.map((video) => {
    return `
     <a href=${video.link} target="_blank">
        <article class="video">
            <img
              src=${video.coverPath}
              alt="${video.title}"
              class="video__cover"
            />
            <div class="video__details">
              <div class="video__credits">
                <span class="video__details--episode">${video.title}</span>
                <span class="video__details--author">${video.artist}</span>
              </div>
            </div>
        </article>
    </a>`;
  });

  return markup;
};

const renderVideos = () => {
  const videosMarkup = generateVideoMarkup().join(" ");
  videosWrapper.innerHTML = "";
  videosWrapper.insertAdjacentHTML("afterbegin", videosMarkup);
};

renderVideos();
