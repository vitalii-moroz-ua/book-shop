fetch("./books.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createCatalog(data);
  });

function createCatalog(books) {
  const bookCounter = document.createElement("p");

  // header section start
  const header = document.createElement("header");
  document.body.append(header);

  const banner = document.createElement("div");
  banner.className = "banner";
  header.append(banner);

  const bannerHeading = document.createElement("h1");
  bannerHeading.className = "banner-heading";
  bannerHeading.innerHTML = "Welcome to amazing book shop!";
  banner.append(bannerHeading);

  const bagIconContainer = document.createElement("div");
  bagIconContainer.className = "bag-icon-container";
  banner.append(bagIconContainer);

  const bagIcon = document.createElement("img");
  bagIcon.src = "./images/icon-bag.png";
  bagIcon.className = "bag-icon";
  bagIconContainer.append(bagIcon);

  const circle = document.createElement("div");
  circle.className = "circle";
  bagIconContainer.append(circle);

  bookCounter.className = "book-counter";
  bookCounter.innerHTML = "0";
  circle.append(bookCounter);

  const bagContainer = document.createElement("div");
  bagContainer.className = "bag-container";
  banner.append(bagContainer);

  const bag = document.createElement("div");
  bag.className = "bag";
  bagContainer.append(bag);

  const bagFooter = document.createElement("div");
  bagFooter.className = "bag-footer";
  bagContainer.append(bagFooter);

  const totalPriceContainer = document.createElement("div");
  totalPriceContainer.className = "total-price-container";
  bagFooter.append(totalPriceContainer);

  const totalPriceTitle = document.createElement("p");
  totalPriceTitle.className = "total-price-title";
  totalPriceTitle.innerHTML = "Total: $";
  totalPriceContainer.append(totalPriceTitle);

  const totalPrice = document.createElement("p");
  totalPrice.className = "total-price";
  totalPrice.innerHTML = "0";
  totalPriceContainer.append(totalPrice);

  const confirmOrderBtn = document.createElement("a");
  confirmOrderBtn.className = "confirm-order-btn";
  confirmOrderBtn.innerHTML = "Confirm order";
  confirmOrderBtn.href = "";
  confirmOrderBtn.addEventListener("click", () => {
    if (parseInt(bookCounter.innerHTML) === 0) {
      alert("Please add a book to your bag");
    } else {
      confirmOrderBtn.href = "./order_form/order.html";
    }
  });
  bagFooter.append(confirmOrderBtn);
  // hide and show shopping bag
  bagIconContainer.addEventListener("click", (event) => {
    if (bagContainer.style.display === "none") {
      bagContainer.style.display = "block";
    } else {
      bagContainer.style.display = "none";
    }
  });

  // header section end

  const main = document.createElement("main");
  document.body.append(main);

  const catalogHeading = document.createElement("h2");
  catalogHeading.className = "catalog-heading";
  catalogHeading.innerHTML = "Book Catalog";
  main.append(catalogHeading);

  const catalog = document.createElement("section");
  catalog.className = "catalog";
  main.append(catalog);

  for (let i = 0; i < books.length; i++) {
    const bookContainer = document.createElement("div");
    bookContainer.className = "book-container";
    catalog.append(bookContainer);

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

    // increment bag counter and add books to bag
    bagBtn.addEventListener("click", (event) => {
      event.preventDefault();
      bookCounter.innerHTML = `${parseInt(bookCounter.innerHTML) + 1}`;

      const bookInBagContainer = document.createElement("div");
      bookInBagContainer.className = "book-in-bag-container";

      const removeBook = document.createElement("p");
      removeBook.className = "remove-book";
      removeBook.innerHTML = "X";
      bookInBagContainer.append(removeBook);

      const bookInBag = document.createElement("div");
      bookInBag.className = "book-in-bag";
      bookInBagContainer.append(bookInBag);

      const price = event.target.previousElementSibling.innerHTML.replace(
        /[^0-9]/g,
        ""
      );
      // increment total price by the book's price
      totalPrice.innerHTML = `${
        parseInt(totalPrice.innerHTML) + parseInt(price)
      }`;

      const author = document.createElement("p");
      author.className = "bag-author";
      author.innerHTML =
        event.target.parentElement.previousElementSibling.firstElementChild.innerHTML;
      const title = document.createElement("h3");
      title.className = "bag-title";
      title.innerHTML =
        event.target.parentElement.previousElementSibling.lastElementChild.innerHTML;
      bookInBag.append(title);
      bookInBag.append(author);
      bag.append(bookInBagContainer);

      // remove book from bag and decriment book counter
      removeBook.addEventListener("click", (event) => {
        bookCounter.innerHTML = `${parseInt(bookCounter.innerHTML) - 1}`;
        event.target.parentElement.remove();
        totalPrice.innerHTML = `${
          parseInt(totalPrice.innerHTML) - parseInt(price)
        }`;
      });
    });

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
