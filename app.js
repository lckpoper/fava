const movies = [
  {
    id: "dune",
    title: "Dune",
    year: 2021,
    rating: 8.0,
    genres: ["Sci-Fi", "Adventure"],
    description:
      "Paul Atreides embraces his destiny among the Fremen while an ancient prophecy ignites a galactic war.",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/iopYFB1b6Bh7FWZh3onQhph1sih.jpg",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Oscar Isaac"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/rcUcYzGGicDvhDs58uM44tJ5z9o.jpg",
      "https://image.tmdb.org/t/p/w780/1i1N0AVRb54H6ZFPYYoL1GllAVV.jpg",
      "https://image.tmdb.org/t/p/w780/9V1l5IlmV2lZMnz6gY1l0T39dFj.jpg"
    ]
  },
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.1,
    genres: ["Sci-Fi", "Neo-Noir"],
    description:
      "Officer K unearths a secret that could plunge what’s left of society into chaos.",
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fI4MGG3ZTSuPWHz89Rse4tYH9PB.jpg",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas", "Jared Leto"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/3gkY9bY8rsY9k5v5Js9h6d0nC8B.jpg",
      "https://image.tmdb.org/t/p/w780/8bhNhq6NzbEFMwhQvRx5cbfL8nP.jpg",
      "https://image.tmdb.org/t/p/w780/a0rCcFSz5PE0uZrM07ZfC8nY9q2.jpg"
    ]
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    year: 2023,
    rating: 8.5,
    genres: ["Drama", "History"],
    description:
      "The visionary behind the atomic bomb wrestles with ambition, power, and the weight of history.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    cast: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr.", "Matt Damon"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/1diM5YwYo3d49m5FiM4uVto8vOm.jpg",
      "https://image.tmdb.org/t/p/w780/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
      "https://image.tmdb.org/t/p/w780/8lG7OTdB5R9Q4wNoihpGzJKZgO0.jpg"
    ]
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genres: ["Sci-Fi", "Drama"],
    description:
      "Explorers travel through a wormhole in search of a new home for humanity.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
      "https://image.tmdb.org/t/p/w780/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
      "https://image.tmdb.org/t/p/w780/ifB3L2r2dJbXl0dCDtU4Uqyy1tB.jpg"
    ]
  },
  {
    id: "joker",
    title: "Joker",
    year: 2019,
    rating: 8.2,
    genres: ["Drama", "Thriller"],
    description:
      "Arthur Fleck descends into madness and becomes Gotham’s symbol of chaos.",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/2m1drlG1tHc4zS5iZvUIZP0uK6Q.jpg",
      "https://image.tmdb.org/t/p/w780/ud70s5RkK9Z1St4GqZ3IbmV4xM5.jpg",
      "https://image.tmdb.org/t/p/w780/6E5sjFJqU2sjS0p6a1Xxv0TtZsY.jpg"
    ]
  },
  {
    id: "the-batman",
    title: "The Batman",
    year: 2022,
    rating: 7.9,
    genres: ["Action", "Crime"],
    description:
      "Batman uncovers a web of corruption in Gotham while facing the Riddler.",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano", "Jeffrey Wright"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
      "https://image.tmdb.org/t/p/w780/ewUqXnwiRLhgmGhuksOdLgh49Ch.jpg",
      "https://image.tmdb.org/t/p/w780/2uDT9Xqq0GX9n6n7OEYJ1o98yRV.jpg"
    ]
  },
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    rating: 8.4,
    genres: ["Sci-Fi", "Action"],
    description:
      "A master thief manipulates dreams to pull off the ultimate impossible heist.",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Marion Cotillard"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/aej69mQZrUEFbd5cQ9GvG2Pz1MP.jpg",
      "https://image.tmdb.org/t/p/w780/tXQvtRWfkU6b0C16k2pGv6jzVbM.jpg",
      "https://image.tmdb.org/t/p/w780/hQZk3F2sYjQ1P2vGyo1z0GxMUxF.jpg"
    ]
  },
  {
    id: "matrix",
    title: "The Matrix",
    year: 1999,
    rating: 8.2,
    genres: ["Sci-Fi", "Action"],
    description:
      "Neo discovers the truth about reality and his role in the war against its controllers.",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/9tg3RBe9YV4B4bUdZX9T9y1mLAI.jpg",
    cast: ["Keanu Reeves", "Carrie-Anne Moss", "Laurence Fishburne", "Hugo Weaving"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/q4qV5Jx9RtwA0lG1v5jQ6xyNl5J.jpg",
      "https://image.tmdb.org/t/p/w780/xi2fLqOycZq4fM8W5g8G5HGM11g.jpg",
      "https://image.tmdb.org/t/p/w780/9dKCdP90v1fHbb8S0A4iK9z4o3Z.jpg"
    ]
  },
  {
    id: "john-wick",
    title: "John Wick",
    year: 2014,
    rating: 7.4,
    genres: ["Action", "Thriller"],
    description:
      "An ex-hitman comes out of retirement to track down the gangsters who wronged him.",
    poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
    cast: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Willem Dafoe"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/o8u0NyEigCEaZz3ZzI0Hf3JDqG1.jpg",
      "https://image.tmdb.org/t/p/w780/8vQZ4d4Z1IuFVmY89xDS6hB9w4Z.jpg",
      "https://image.tmdb.org/t/p/w780/5vT2eJ0OBs4j4Qv5hSW4H8C8sZw.jpg"
    ]
  },
  {
    id: "fight-club",
    title: "Fight Club",
    year: 1999,
    rating: 8.4,
    genres: ["Drama", "Thriller"],
    description:
      "An office worker and a soap maker form an underground fight club that spirals out of control.",
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter", "Jared Leto"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/8kU5D8qNB8FJ4m8xG1Bf15y0W9d.jpg",
      "https://image.tmdb.org/t/p/w780/2lECpi35Hnbpa4y46JX0aY3Qre0.jpg",
      "https://image.tmdb.org/t/p/w780/5o7GxO5JHctLciKysI5sPzz6fA2.jpg"
    ]
  },
  {
    id: "the-godfather",
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genres: ["Crime", "Drama"],
    description:
      "The Corleone family’s power struggles set the gold standard for crime cinema.",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/paJdZx1C9KXQTrg1kzGxN6yNfp3.jpg",
      "https://image.tmdb.org/t/p/w780/b5Zf4w0H6tFvYB1lt6nt0VxR1eR.jpg",
      "https://image.tmdb.org/t/p/w780/4XoG7Qw1G3W9gUJnQ8j4BrrtLm0.jpg"
    ]
  },
  {
    id: "parasite",
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    genres: ["Thriller", "Drama"],
    description:
      "A working-class family infiltrates the lives of a wealthy household with unexpected consequences.",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/4x5G0v7B5g5IHzLToJK5Y0r8Cfh.jpg",
      "https://image.tmdb.org/t/p/w780/6z8XmxQ7z9Z9yM54q9WlH0I1Gt2.jpg",
      "https://image.tmdb.org/t/p/w780/d3JbY1Y2trvFb8Jw1sZTSd5SmCG.jpg"
    ]
  },
  {
    id: "mad-max-fury-road",
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    genres: ["Action", "Adventure"],
    description:
      "In a post-apocalyptic wasteland, Max teams up with Furiosa for a high-octane escape.",
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYPbtEMH1nu.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult", "Rosie Huntington-Whiteley"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
      "https://image.tmdb.org/t/p/w780/2lDeyK0YdGJxg5BTtPlqvGjUFu8.jpg",
      "https://image.tmdb.org/t/p/w780/5dV8gkDC4foD5NGRm1yJ5uZkW9H.jpg"
    ]
  },
  {
    id: "the-dark-knight",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genres: ["Action", "Crime"],
    description:
      "Batman faces the Joker in a battle for Gotham’s soul.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Gary Oldman"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/8QDQExnfNFOtabLDKqfDQuHDsIg.jpg",
      "https://image.tmdb.org/t/p/w780/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      "https://image.tmdb.org/t/p/w780/cGHrWk95DRE5SAwS2iVnJ8wT2yv.jpg"
    ]
  },
  {
    id: "avatar",
    title: "Avatar",
    year: 2009,
    rating: 7.6,
    genres: ["Sci-Fi", "Adventure"],
    description:
      "A marine on an alien world becomes torn between duty and the planet’s people.",
    poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/bIh56F8O0pVdV1m1X0I4x1o1t4i.jpg",
    cast: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver", "Stephen Lang"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/nh91vQpHl3U1IG85XgXx0r6aU7n.jpg",
      "https://image.tmdb.org/t/p/w780/9PK9L4Gf8jRMTf7d2JqPIj3yq6S.jpg",
      "https://image.tmdb.org/t/p/w780/7wFh19YW9z2dIMGRlSQuq8uS4jk.jpg"
    ]
  },
  {
    id: "gladiator",
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    genres: ["Action", "Drama"],
    description:
      "A betrayed Roman general rises as a gladiator to seek justice.",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/9BqLSo9Yq5b5l8wE0bgmQ9cYwI2.jpg",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed"],
    gallery: [
      "https://image.tmdb.org/t/p/w780/9A3w1c4R2l98lNb3Wn1qfI9q4MZ.jpg",
      "https://image.tmdb.org/t/p/w780/2cP5Yy2a6Wb1sZ1oV1zGx2mZxJ0.jpg",
      "https://image.tmdb.org/t/p/w780/7gW5dW6hZXzvL7lVYwG9Vn2D6vB.jpg"
    ]
  }
];

const rowConfig = [
  { key: "trending", filter: (movie) => movie.rating >= 8 },
  { key: "top", filter: (movie) => movie.rating >= 8.5 },
  { key: "sci-fi", filter: (movie) => movie.genres.includes("Sci-Fi") },
  { key: "action", filter: (movie) => movie.genres.includes("Action") }
];

const watchlistIds = ["dune", "the-batman", "oppenheimer", "interstellar"];
const continueIds = ["john-wick", "parasite", "mad-max-fury-road"];

const heroState = {
  index: 0,
  timer: null
};

const slugToMovie = Object.fromEntries(movies.map((movie) => [movie.id, movie]));

const createMovieCard = (movie, cardClass = "movie-card") => {
  const card = document.createElement("a");
  card.href = `movie.html?id=${movie.id}`;
  card.className = `${cardClass} loading reveal`;
  card.innerHTML = `
    <img class="movie-poster" src="${movie.poster}" alt="${movie.title} poster" />
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <span>${movie.year} • ${movie.genres.join(" · ")}</span>
    </div>
  `;

  const img = card.querySelector("img");
  img.addEventListener("load", () => card.classList.remove("loading"));

  return card;
};

const initHero = () => {
  const heroCarousel = document.getElementById("heroCarousel");
  if (!heroCarousel) return;

  heroCarousel.innerHTML = movies.slice(0, 5).map((movie, index) => `
      <article class="hero-slide ${index === 0 ? "active" : ""}">
        <img class="hero-media" src="${movie.backdrop}" alt="${movie.title} backdrop" />
        <div class="hero-content">
          <p class="eyebrow">Featured Premiere</p>
          <h1>${movie.title}</h1>
          <div class="hero-meta">
            <span class="badge">${movie.rating.toFixed(1)}</span>
            <span>${movie.year}</span>
            <span>${movie.genres.join(" · ")}</span>
          </div>
          <p class="subhead">${movie.description}</p>
          <div class="hero-actions">
            <a class="primary" href="movie.html?id=${movie.id}">Watch Now</a>
            <a class="secondary" href="movie.html?id=${movie.id}">Trailer</a>
          </div>
        </div>
      </article>
    `).join("");

  const setSlide = (index) => {
    const slides = heroCarousel.querySelectorAll(".hero-slide");
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    heroState.index = index;
  };

  const cycle = (direction = 1) => {
    const nextIndex = (heroState.index + direction + 5) % 5;
    setSlide(nextIndex);
  };

  document.getElementById("heroPrev")?.addEventListener("click", () => cycle(-1));
  document.getElementById("heroNext")?.addEventListener("click", () => cycle(1));

  heroState.timer = setInterval(() => cycle(1), 7000);
};

const initRows = () => {
  document.querySelectorAll(".row").forEach((row) => {
    const key = row.dataset.row;
    let rowMovies = movies;

    const config = rowConfig.find((item) => item.key === key);
    if (config) {
      rowMovies = movies.filter(config.filter);
    }

    if (key === "watchlist") {
      rowMovies = watchlistIds.map((id) => slugToMovie[id]);
    }
    if (key === "continue") {
      rowMovies = continueIds.map((id) => slugToMovie[id]);
    }

    row.innerHTML = "";
    rowMovies.forEach((movie) => row.appendChild(createMovieCard(movie)));
  });
};

const initCatalog = () => {
  const catalogGrid = document.getElementById("catalogGrid");
  if (!catalogGrid) return;

  const filterContainer = document.getElementById("catalogFilters");
  const genres = ["All", ...new Set(movies.flatMap((movie) => movie.genres))];
  let activeGenre = "All";

  const renderFilters = () => {
    filterContainer.innerHTML = "";
    genres.forEach((genre) => {
      const chip = document.createElement("button");
      chip.className = `filter-chip ${genre === activeGenre ? "active" : ""}`;
      chip.textContent = genre;
      chip.addEventListener("click", () => {
        activeGenre = genre;
        renderFilters();
        renderGrid();
      });
      filterContainer.appendChild(chip);
    });
  };

  const renderGrid = () => {
    catalogGrid.innerHTML = "";
    const filtered = activeGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genres.includes(activeGenre));

    filtered.forEach((movie) => {
      const card = document.createElement("a");
      card.href = `movie.html?id=${movie.id}`;
      card.className = "catalog-card loading reveal";
      card.innerHTML = `
        <img class="movie-poster" src="${movie.poster}" alt="${movie.title} poster" />
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <span>${movie.year} • ${movie.genres.join(" · ")}</span>
        </div>
        <div class="hover-preview">
          <strong>${movie.rating.toFixed(1)} Rating</strong>
          <p>${movie.description}</p>
        </div>
      `;
      card.querySelector("img").addEventListener("load", () => card.classList.remove("loading"));
      catalogGrid.appendChild(card);
    });
  };

  renderFilters();
  renderGrid();
};

const initSearch = () => {
  const searchResults = document.getElementById("searchResults");
  const searchInput = document.getElementById("searchInput");
  if (!searchResults || !searchInput) return;

  const renderResults = (query = "") => {
    const normalized = query.trim().toLowerCase();
    const filtered = normalized
      ? movies.filter((movie) =>
          `${movie.title} ${movie.genres.join(" ")} ${movie.year}`
            .toLowerCase()
            .includes(normalized)
        )
      : movies;

    searchResults.innerHTML = "";
    filtered.forEach((movie) => {
      const card = document.createElement("a");
      card.href = `movie.html?id=${movie.id}`;
      card.className = "search-card loading reveal";
      card.innerHTML = `
        <img class="movie-poster" src="${movie.poster}" alt="${movie.title} poster" />
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <span>${movie.year} • ${movie.genres.join(" · ")}</span>
        </div>
        <div class="hover-preview">
          <strong>${movie.rating.toFixed(1)} Rating</strong>
          <p>${movie.description}</p>
        </div>
      `;
      card.querySelector("img").addEventListener("load", () => card.classList.remove("loading"));
      searchResults.appendChild(card);
    });
  };

  searchInput.addEventListener("input", (event) => renderResults(event.target.value));
  renderResults();
};

const initMoviePage = () => {
  const moviePage = document.getElementById("moviePage");
  if (!moviePage) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "dune";
  const movie = slugToMovie[id] || movies[0];

  moviePage.innerHTML = `
    <section class="movie-hero">
      <img src="${movie.backdrop}" alt="${movie.title} backdrop" />
      <div class="movie-hero-content">
        <p class="eyebrow">Cinematic Spotlight</p>
        <h1>${movie.title}</h1>
        <div class="movie-meta">
          <span class="badge">${movie.rating.toFixed(1)}</span>
          <span>${movie.year}</span>
          <span>${movie.genres.join(" · ")}</span>
        </div>
        <p class="subhead">${movie.description}</p>
        <div class="movie-actions">
          <button class="primary">Watch</button>
          <button class="secondary">Trailer</button>
        </div>
      </div>
    </section>
    <section class="movie-section reveal">
      <h2>Cast</h2>
      <div class="cast-grid">
        ${movie.cast
          .map(
            (member) => `
              <div class="cast-card">
                <strong>${member}</strong>
                <span>Role: Featured</span>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
    <section class="movie-section reveal">
      <h2>Gallery</h2>
      <div class="gallery-grid">
        ${movie.gallery
          .map((image) => `<img src="${image}" alt="${movie.title} still" />`)
          .join("")}
      </div>
    </section>
    <section class="movie-section reveal">
      <h2>More like this</h2>
      <div class="row">
        ${movies
          .filter((item) => item.id !== movie.id)
          .slice(0, 8)
          .map(
            (item) => `
              <a class="movie-card" href="movie.html?id=${item.id}">
                <img class="movie-poster" src="${item.poster}" alt="${item.title} poster" />
                <div class="movie-info">
                  <h3>${item.title}</h3>
                  <span>${item.year} • ${item.genres.join(" · ")}</span>
                </div>
              </a>
            `
          )
          .join("")}
      </div>
    </section>
  `;
};

const initReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
};

const initSmoothScroll = () => {
  document.documentElement.style.scrollBehavior = "smooth";
};

const init = () => {
  initSmoothScroll();
  initHero();
  initRows();
  initCatalog();
  initSearch();
  initMoviePage();
  initReveal();
};

document.addEventListener("DOMContentLoaded", init);
