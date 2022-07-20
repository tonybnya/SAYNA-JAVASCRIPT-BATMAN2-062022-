// Scrolling on Side Batman Buttons with jQuery
const log = arg => console.log(arg);

// Target the two batman arrows on the side scroll buttons
const links = document.querySelectorAll('.arrow-bat');
// Add an event listener to each of the two
links.forEach((element) => { 
  // Call the defined smoothScroll function on each element
  element.addEventListener('click', smoothScroll);
});

// Define the function smoothScroll
const smoothScroll = (e) => { 
  // Prevent the default behavior of the element
  e.preventDefault();
  // Get the href attribute of the link clicked
  const link = this.getAttribute('href');
  // Get the position of the target anchor
  const offSetTop = document.querySelector(link).offsetTop;
  // Scroll to the target
  scroll({
    top: offSetTop,
    behavior: 'smooth'
  });
};
