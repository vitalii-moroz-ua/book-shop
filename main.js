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

  const bannerHeading = document.createElement("h1");
  bannerHeading.className = "banner-heading";
  bannerHeading.innerHTML = "Welcome to amazing book shop!";
  banner.append(bannerHeading);

  const bagIcon = document.createElement("img");
  bagIcon.src = "./images/icon-bag.png";
  bagIcon.className = "bag-icon";
  banner.append(bagIcon);
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
    bookDetails.className = "book-details";
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

    const showMore = document.createElement("div");
    showMore.className = "show-more";
    bookDetails.append(showMore);

    const price = document.createElement("p");
    price.className = "price";
    price.innerHTML = "Price: $" + books[i].price;
    showMore.append(price);

    const bagBtn = document.createElement("button");
    bagBtn.className = "bag-btn";
    bagBtn.innerHTML = "Add to bag";
    showMore.append(bagBtn);

    const more = document.createElement("div");
    more.className = "more";
    more.innerHTML = "Show more";
    showMore.append(more);
    more.addEventListener("click", () => {
      descriptionContainer.style.display = "block";
    });

    // description pop-up start
    const descriptionContainer = document.createElement("div");
    descriptionContainer.className = "description-container";
    bookContainer.append(descriptionContainer);

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
