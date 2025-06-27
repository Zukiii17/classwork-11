fetch("search.json")
  .then((result) => result.json())
  .then((data) => {
    const gallery = document.querySelector("#gallery");
    data.forEach((cat) => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = cat.url;
      img.alt = `Cat ID: ${cat.id}`;

      card.appendChild(img);
      gallery.appendChild(card);
    });
  })
  .catch((err) =>
    console.error(
      "Seems like you have an error in your code, errod code: ",
      err
    )
  );
