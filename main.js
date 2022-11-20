fetch("./books.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createCatalog(data);
  });

createHeader();

function createHeader() {
  const header = document.createElement("header");
  document.body.append(header);

  const banner = document.createElement("div");
  banner.className = "banner";
  header.append(banner);

  // const bannerHeadingContainer = document.createElement("div");
  // bannerHeadingContainer.className = "banner-heading-container";
  // banner.append(bannerHeadingContainer);

  const bannerHeading = document.createElement("h1");
  bannerHeading.className = "banner-heading";
  bannerHeading.innerHTML = "Welcome to amazing book shop!";
  banner.append(bannerHeading);

  // const bannerButton = document.createElement("button");
  // bannerButton.innerHTML = "Check our books";
  // bannerHeadingContainer.append(bannerButton);
}

function createCatalog(booksData) {
  const main = document.createElement("main");
  document.body.append(main);

  const catalogHeading = document.createElement("h2");
  catalogHeading.className = "catalog-heading";
  catalogHeading.innerHTML = "Book Catalog";
  main.append(catalogHeading);

  const catalog = document.createElement("section");
  catalog.className = "catalog";
  main.append(catalog);

  // fill catalog with books
  createBook(catalog, booksData);
}

function createBook(element, books) {
  for (let i = 0; i < books.length; i++) {
    const bookContainer = document.createElement("div");
    bookContainer.className = "book-container";
    element.append(bookContainer);

    const bookImg = document.createElement("img");
    bookImg.className = "book-img";
    bookImg.src = books[i].imageLink;
    bookContainer.append(bookImg);

    const bookDetails = document.createElement("div");
    bookImg.className = "book-details";
    bookContainer.append(bookDetails);

    const bookOverview = document.createElement("div");
    bookOverview.className = "book-overview";
    bookDetails.append(bookOverview);

    const author = document.createElement("p");
    author.className = "author";
    author.innerHTML = books[i].author;
    bookOverview.append(author);

    const title = document.createElement("h3");
    title.className = "title";
    title.innerHTML = books[i].title;
    bookOverview.append(title);

    const price = document.createElement("p");
    price.className = "price";
    price.innerHTML = "Price: " + books[i].price;
    bookOverview.append(price);

    const showMore = document.createElement("div");
    showMore.className = "show-more";
    bookDetails.append(showMore);

    const more = document.createElement("div");
    more.className = "more";
    more.innerHTML = "Show more";
    showMore.append(more);
    more.addEventListener("click", () => {
      descriptionContainer.style.display = "block";
    });

    const bagBtn = document.createElement("button");
    bagBtn.className = "bag-btn";
    bagBtn.innerHTML = "Add to bag";
    showMore.append(bagBtn);

    // description pop-up start
    const descriptionContainer = document.createElement("div");
    descriptionContainer.className = "description-container";
    bookContainer.append(descriptionContainer);

    const descriptionTitle = document.createElement("h3");
    descriptionTitle.className = "description-title";
    descriptionTitle.innerHTML = books[i].title;
    descriptionContainer.append(descriptionTitle);

    const description = document.createElement("p");
    description.className = "description";
    description.innerHTML = books[i].description;
    descriptionContainer.append(description);

    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.innerHTML = "close";
    descriptionContainer.append(closeBtn);
    closeBtn.addEventListener("click", () => {
      descriptionContainer.style.display = "none";
    });
    // description pop-up end
  }
}
