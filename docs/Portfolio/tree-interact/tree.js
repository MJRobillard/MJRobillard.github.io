

  
    function buttonAdd(buttonID, title) {
      const openModalBtn = document.getElementById(buttonID);
      const modal = document.getElementById(title + "modal");

      openModalBtn.addEventListener("click", function() {
        modal.classList.add("open");
      });

      modal.addEventListener("click", function(event) {
        if (event.target === modal) {
          modal.classList.remove("open");
        }
      });
    }

    function createCarousel(title,svg_link,slideData,url){
      let field = ''
      let projectName = ''

      if (title.includes('Soft')){
        field = 'Software Development';
        projectName = title.replace('Soft','');


      }
      else if(title.includes('Data')){
        field = 'Data Science';
        projectName = title.replace('Data','');



      }
      else if(title.includes ('Web')){
        field = "Web Development";
        projectName = title.replace('Web','');

      }
      projectName = projectName.replaceAll('-',' ');

      //name for the Header
      // Create the carousel container element
      const carouselContainer = document.createElement("div");
      carouselContainer.id = title + "modal";
      carouselContainer.classList.add("carousel", "slide");

      const Iconimg = document.createElement("img");
      Iconimg.src = svg_link;
      Iconimg.classList.add("b-block", "w-45", 'Iconic');
      Iconimg.alt = 'icon';
      const fieldHeader = document.createElement("h1");
      fieldHeader.classList.add('field');
      console.log(field);
      fieldHeader.textContent = field;
      var projectHeader = document.createElement("p");

      if (url != ''){
        projectHeader = document.createElement("a");
        projectHeader.href = url;
        projectHeader.target="_blank" ;
        projectHeader.rel="noopener noreferrer";
      }



      projectHeader.classList.add('fieldHeader');
      projectHeader.textContent = projectName;
      // Create the indicators container
      const indicatorsContainer = document.createElement("div");
      indicatorsContainer.classList.add("carousel-indicators");

      // Create the inner carousel content container
      const carouselInner = document.createElement("div");
      carouselInner.classList.add("carousel-inner");

      // Create the controls
      const prevButton = document.createElement("button");
      prevButton.classList.add("carousel-control-prev");
      prevButton.type = "button";
      prevButton.dataset.bsTarget = `#${carouselContainer.id}`; // Use the dynamic carouselContainer ID
      prevButton.dataset.bsSlide = "prev";

      const prevIcon = document.createElement("span");
      prevIcon.classList.add("carousel-control-prev-icon");
      prevIcon.setAttribute("aria-hidden", "true");
      prevButton.appendChild(prevIcon);

      const prevLabel = document.createElement("span");
      prevLabel.classList.add("visually-hidden");
      prevLabel.textContent = "Previous";
      prevButton.appendChild(prevLabel);

      const nextButton = document.createElement("button");
      nextButton.classList.add("carousel-control-next");
      nextButton.type = "button";
      nextButton.dataset.bsTarget = `#${carouselContainer.id}`; // Use the dynamic carouselContainer ID
      nextButton.dataset.bsSlide = "next";

      const nextIcon = document.createElement("span");
      nextIcon.classList.add("carousel-control-next-icon");
      nextIcon.setAttribute("aria-hidden", "true");
      nextButton.appendChild(nextIcon);

      const nextLabel = document.createElement("span");
      nextLabel.classList.add("visually-hidden");
      nextLabel.textContent = "Next";
      nextButton.appendChild(nextLabel);

      // Append the controls to the carousel container
      carouselContainer.appendChild(prevButton);
      carouselContainer.appendChild(nextButton);

      // Loop through the slide data and create corresponding elements
      slideData.forEach((slide, index) => {
        // Create the indicator button
        const indicator = document.createElement("button");
        indicator.type = "button";
        indicator.dataset.bsTarget = `#${carouselContainer.id}`;
        indicator.dataset.bsSlideTo = index;
        if (index === 0) {
          indicator.classList.add("active");
          indicator.setAttribute("aria-current", "true");
        }
        indicator.setAttribute("aria-label", `Slide ${index + 1}`);
        indicatorsContainer.appendChild(indicator);

        // Create the carousel item
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) {
          carouselItem.classList.add("active");
        }

        // Create the image element
        const img = document.createElement("img");
        img.src = slide.imageSrc;
        img.classList.add("d-block", "w-100");
        img.alt = slide.altText;
        carouselItem.appendChild(img);

        // Create the carousel caption (optional)
        if (slide.caption) {
          const caption = document.createElement("div");
          caption.classList.add("carousel-caption", "d-none", "d-md-block",'captionOveride');

          const h5 = document.createElement("h5");
          h5.textContent = slide.caption.title;
          caption.appendChild(h5);

          const p = document.createElement("p");
          p.classList.add("P_Overide" );

          p.textContent = slide.caption.description;
          caption.appendChild(p);

          carouselItem.appendChild(caption);
        }

        // Append the carousel item to the inner container
        carouselInner.appendChild(carouselItem);
      });

      // Append the indicators and inner container to the carousel container
      carouselContainer.appendChild(fieldHeader);
      carouselContainer.appendChild(projectHeader);
      carouselContainer.appendChild(Iconimg);
      carouselContainer.appendChild(carouselInner);
      carouselContainer.appendChild(indicatorsContainer);


      

      // Append the generated carousel to the desired element in the DOM
      document.getElementById("courselContainer").appendChild(carouselContainer);
    }

    // Sample data for the slides


    // Call the function with the sample data to create the carousel
    function addNode(svg_link, X, Y, title, links,headers,captions,url) {
      
      const slideData = [];

      for (let i = 0; i < links.length; i++) {
        const slide = {
          imageSrc: links[i],
          altText: headers[i],
          caption: {
            title: captions[i],
            description: headers[i],
          },
        };
    
        slideData.push(slide);
      }
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
        animation: buttonflicker 2s infinite ;
        
  
      `;
      }
      if (inputElement.className != "Scraper-button"){
        inputElement.addEventListener('mouseover', function() {
  
          this.style.boxShadow = '0px 0px 25px 8px #01f8f8, inset 0px 0px 10px 0px #FFE500';
      
    
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
            this.style.boxShadow = '0px 0px 20px 7px #01f8f8, inset 0px 0px 10px 0px #FFE500';
        
      
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
      createCarousel(title, svg_link,slideData,url);

      buttonAdd(title + "-modal",title);
  
  
    }
