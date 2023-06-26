function addButton(svg_link, text, X, Y, destination) {
    var containerElement = document.querySelector('.Header-Buttons'); // Get the container element
  
    // Create the anchor element
    var aElement = document.createElement("a");
    aElement.className = destination + "-button";
    aElement.href = destination;
  
    // Create the image element
    var imgElement = document.createElement("img");
    imgElement.src = svg_link;
    imgElement.alt = destination + " button";
    aElement.appendChild(imgElement);
  
    // Create the text element
    var textElement = document.createElement("p");
    textElement.innerText = text;
    textElement.className = "button-text";
  
    // Set the styles for the anchor element
    aElement.style.cssText = `
      position: absolute;
      left: ${X}px;
      top: ${Y}px;
      transition: box-shadow 0.3s ease-in-out;
      opacity: 1;
      color: red;
      z-index: 0;
      text-align: center;

    `;
  
    // Set the styles for the text element
    textElement.style.cssText = `
      position: absolute;
      opacity: 1;
      color: white;
      font-size: 20px;
      font-weight: bold;
      z-index: 1;
      text-align: center;
      top: 5%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;
    aElement.addEventListener('mouseover', function() {
      this.style.opacity = '1';
      this.style.filter=' invert(100%)';

    });
  
    aElement.addEventListener('mouseout', function() {
      this.style.boxShadow = '';
      this.style.opacity = '1';
      this.style.filter=' invert(0%)';

    });
  
  
    // Append the text element to the anchor element
    aElement.appendChild(textElement);
  
    // Append the anchor element to the container element
    containerElement.appendChild(aElement);
  
    return aElement;
  
  
  }