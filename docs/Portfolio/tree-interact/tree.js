

  let currentSlideIndex = 0;
  function buttonAdd(buttonID,title) {
    const openModalBtn = document.getElementById(buttonID);
    const modal = document.getElementById(title+"modal");


    openModalBtn.addEventListener("click", function() {
      modal.classList.add("open");
      showSlide(0,title+"modal");
    });



    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.classList.remove("open");
      }
    });
};

  function changeSlide(n,modalID) {
    const slideshowImages = document.querySelectorAll(`#${modalID}.modal .slideshow-image`);

    currentSlideIndex += n;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slideshowImages.length - 1;
    } else if (currentSlideIndex >= slideshowImages.length) {
      currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex,modalID);
  }

  function showSlide(index,modalID) {
    
    const slideshowImages = document.querySelectorAll(`#${modalID}.modal .slideshow-image`);
    const slideshowHeaders = document.querySelectorAll(`#${modalID}.modal .slideshow-header`);
    const slideshowCaptions = document.querySelectorAll(`#${modalID}.modal .slideshow-caption`);
    for (let i = 0; i < slideshowImages.length; i++) {
      slideshowImages[i].classList.remove("active");
      slideshowHeaders[i].style.display = "none";
      slideshowCaptions[i].style.display = "none";
    }
    slideshowImages[index].classList.add("active");
    slideshowHeaders[index].style.display = "block";
    slideshowCaptions[index].style.display = "block";
  }
  

  
  function createModal(title,link1, link2, link3, caption1, caption2, caption3, header1, header2, header3,url) {
    var links = [link1, link2, link3];
    var captions = [caption1, caption2, caption3];
    var headers = [header1, header2, header3];
  
    // Rest of the code remains the same as before...
    // ...
    var modalContainer = document.createElement('div');
    modalContainer.classList.add('modal');
    modalContainer.id = title +'modal';
  
    // Create the modal content element
    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    // Create the slideshow container element
    var slideshowContainer = document.createElement('div');
    slideshowContainer.classList.add('slideshow-container');
  
    // Create the slideshow images, headers, and captions
    for (var i = 0; i < links.length; i++) {
      // Create the image element
      var image = document.createElement('img');
      image.classList.add('slideshow-image');
      if (i === 0) {
        image.classList.add('active');
      }
      image.src = links[i];
      image.alt = 'Image ' + (i + 1);
  
      // Create the header element
      var header = document.createElement('div');
      header.classList.add('slideshow-header');
      header.textContent = headers[i];
  
      // Create the caption element
      var caption = document.createElement('div');
      caption.classList.add('slideshow-caption');
      caption.textContent = captions[i];

  
      // Append the image, header, and caption to the slideshow container
      slideshowContainer.appendChild(image);
      slideshowContainer.appendChild(header);
      slideshowContainer.appendChild(caption);
    }
    var gitlink = document.createElement('div');
    gitlink.classList.add('url');
    gitlink.textContent = url;
    slideshowContainer.appendChild(gitlink);



    // Create the previous and next buttons
    var prevButton = document.createElement('a');
    prevButton.classList.add('prev');
        prevButton.setAttribute('onclick', `changeSlide(-1, '${title}modal')`);
    prevButton.innerHTML = '&#10094;';
  
    var nextButton = document.createElement('a');
    nextButton.classList.add('next');
    nextButton.setAttribute('onclick', `changeSlide(1, '${title}modal')`);
    nextButton.innerHTML = '&#10095;';
  
    // Append the slideshow container and buttons to the modal content
    modalContent.appendChild(slideshowContainer);
    modalContent.appendChild(prevButton);
    modalContent.appendChild(nextButton);
  
    // Create the close modal button

  
    // Append the modal content and close button to the modal container
    modalContainer.appendChild(modalContent);
  
    // Append the modal container to the body
    document.body.appendChild(modalContainer);
  
  }
  function addNode(svg_link, X, Y, title, link1, link2, link3, caption1,caption2,caption3,header1,header2,header3,url) {

    var containerElement = document.querySelector('.button-container'); // Get the container element
  
    // Create the input element
    var inputElement = document.createElement("input");
    inputElement.className = title + "-button";
    inputElement.type = "image";
    inputElement.src = svg_link;
    inputElement.alt = title + " button";
    inputElement.id = title + "-modal";
  
    inputElement.style.cssText = `
      position: absolute;
      top: ${Y-40}px;
      left: ${X+15}px;
      width: 40px;

      transition: box-shadow 0.3s ease-in-out;
      border-radius: 50%;
      opacity: 1;

    `;
    if (inputElement.className == "Scraper-button"){
      inputElement.style.cssText = `
      position: absolute;
      top: ${Y-40}px;
      left: ${X+15}px;
      width: 40px;

      border-radius: 50%;
      opacity: 1;
      animation:buttonflicker 3s infinite;

    `;
    }
    if (inputElement.className != "Scraper-button"){
      inputElement.addEventListener('mouseover', function() {

        this.style.boxShadow = '0px 0px 25px 8px #FFF961, inset 0px 0px 10px 0px #FFE500';
    
  
        this.style.borderRadius = '50%';
        this.style.opacity = '1';
      });
    
      inputElement.addEventListener('mouseout', function() {
  
        this.style.boxShadow = '';
        this.style.borderRadius = '50%';
        this.style.opacity = '1';
      });
    }
    else{


      inputElement.addEventListener('click', function() {
        console.log('1');
        this.addEventListener('mouseover', function() {
          this.style.boxShadow = '0px 0px 25px 8px #FFF961, inset 0px 0px 10px 0px #FFE500';
      
    
          this.style.borderRadius = '50%';
          this.style.opacity = '1';
          this.style.transition ="box-shadow 0.3s ease-in-out";
  
          this.style.animation='none';
        });

          this.addEventListener('mouseout', function() {
  
            this.style.boxShadow = '';
            this.style.borderRadius = '50%';
            this.style.opacity = '1';
            this.style.transition ="box-shadow 0.3s ease-in-out";
    
            this.style.animation='none';
    
        });
      });
    

    }
  
 
  
    // Append the input element to the container element
    containerElement.appendChild(inputElement);
  
    // Append the modal content to the container element
    //The modal functions 
 

    // JavaScript code to handle modal and slideshow functionality
    createModal(
      title,
      link1,
      link2,
      link3,
      caption1,
      caption2,
      caption3,
      header1,
      header2,
      header3,
      url,
    );
  buttonAdd(title + "-modal",title);


  }



function updateVariable() {

  const inputX = document.getElementById("variableInputX");
  const myVariableX = inputX.value;
  const inputY = document.getElementById("variableInputY");
  const myVariableY = inputY.value;
  inputElement.style.top = `
    ${myVariableY}px;
  `;
  inputElement.style.left=`
  ${myVariableX}px;
  `;
}