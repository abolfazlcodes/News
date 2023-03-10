const podcastsWrapper = document.querySelector(".podcasts__wrapper");
const podcastsElements = document.querySelectorAll(".podcasts");

// Songs info
const podcasts = [
  {
    id: "1",
    title: "Else Paris",
    artist: "Abolbache",
    coverPath: "../src/data/covers/cover1.jpg",
    discPath: "../src/data/music/music1.mp3",
    duration: "3:29",
    isPlaying: false,
  },
  {
    id: "2",
    title: "Else Paris",
    artist: "Abolbache",
    coverPath: "../src/data/covers/cover1.jpg",
    discPath: "../src/data/music/music1.mp3",
    duration: "3:29",
    isPlaying: false,
  },
  {
    id: "3",
    title: "Else Paris",
    artist: "Abolbache",
    coverPath: "../src/data/covers/cover1.jpg",
    discPath: "../src/data/music/music1.mp3",
    duration: "3:29",
    isPlaying: false,
  },
];

// generate the markup for podcasts
const generatePodcastMarkup = () => {
  const markup = podcasts.map((podcast) => {
    return `
     <article class="podcast" data-id=${podcast.id} id=${podcast.id}>
        <img
          src=${podcast.coverPath}
          alt=${podcast.title}
          class="podcast__cover"
        />
        <div class="podcast__details">
          <div class="podcast__credits">
            <span class="podcast__details--episode">${podcast.title}</span>
            <span class="podcast__details--author">${podcast.artist}</span>
          </div>
          <span class="podcast__actions">
            <i class="fa-regular fa-circle-play play-btn"></i>
          </span>
        </div>
    </article> `;
  });

  return markup;
};

const playAudioHandler = (podcastId, element) => {
  allAudios.forEach((audio) => audio.pause());

  const selectedPodcast = podcasts.find((item) => item.id === podcastId);

  selectedPodcast.isPlaying = !selectedPodcast.isPlaying;

  const audio = new Audio(selectedPodcast.discPath);

  // check to see if the audio is already playing or not
  if (selectedPodcast.isPlaying) {
    // play the audio
    audio.play();
    // replace the play and pause class
    const playBtn = element.querySelector(".play-btn");
    playBtn.className = "fa-regular fa-circle-pause pause-btn";
  } else {
    audio.pause();
    const playBtn = element.querySelector(".pause-btn");
    playBtn.className = "fa-regular fa-circle-play play-btn";
  }
};

const renderPodcasts = () => {
  const podcastMarkup = generatePodcastMarkup().join(" ");
  podcastsWrapper.innerHTML = "";
  podcastsWrapper.insertAdjacentHTML("afterbegin", podcastMarkup);
};

renderPodcasts();

document.addEventListener("DOMContentLoaded", () => {
  const podcastPlayBtn = document.querySelectorAll(".play-btn");
  const podcastPauseBtn = document.querySelectorAll(".pause-btn");

  // looping through all the items
  podcastPlayBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      const clicked = e.target.closest(".podcast");

      // setting the id
      podcastIndex = clicked.getAttribute("data-id");

      playAudioHandler(podcastIndex, clicked);
    });
  });

  podcastPauseBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      const clicked = e.target.closest(".podcast");

      // setting the id
      podcastIndex = clicked.getAttribute("data-id");

      playAudioHandler(podcastIndex, clicked);
    });
  });
});
