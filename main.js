class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `         
            <header>
                <h3><a href="index.html" onMouseOver="this.style.color='#d9e4fa'" onMouseOut="this.style.color='#fff'">Jack Morse</a></h3>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="essays-page.html">Essays</a></li>
                        <li><a href="projects-page.html">Projects</a></li>
                        <li><a href="reading-page.html">Reading</a></li>
                    </ul>
                </nav>
            </header>        
      `;
    }
  }

  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `         
        <footer>
            <h3 style="color: black;">Jack Morse</h3>
                <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="essays-page.html">Essays</a></li>
                    <li><a href="projects-page.html">Projects</a></li>
                    <li><a href="reading-page.html">Reading</a></li>
                </ul>
                <div id="content">
                    <!-- The custom paragraph will be displayed here -->
                </div>
                <p>Copyright &copy; 2024. jmorse2020.github.io</p>
                </nav>
        </footer>       
      `;
      // Get the last modified date of the HTML file
      var lastModifiedDate = new Date(document.lastModified);

      // Format the date as a string
      var formattedDate = new Intl.DateTimeFormat('en-US', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false, // Use a 24-hour clock
          timeZoneName: 'short'
      }).format(lastModifiedDate);

      // Create your custom paragraph with the formatted date
      var customParagraph = '<p style="text-align:left">Last updated: ' + formattedDate + '</p>';

      // Display the custom paragraph on the page
      var contentContainer = this.querySelector('#content');
      contentContainer.innerHTML = customParagraph;
    }
  }

  
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);