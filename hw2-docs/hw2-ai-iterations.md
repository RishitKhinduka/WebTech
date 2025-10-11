# Round 1:

### **Prompt Used**
- “Using my original conten plan, generate the following pages: Index,
Projects, Contact and a style.css sheet where you maintain the purple-gold luxury theme, use semantic HTML5 structure, and improve Flexbox/Grid for layout. But make sure to have consistency between all the pages." 

# Results :
- Chatgpt created all 3 HTML files with a consistent header, navigation bar, and footer.  
- It also added a gradient background for the hero section.   
- Improved the contact form to look much cleaner than the original.  

# Evaluation :
- For the first version, it was quiet good, clean looking and the gradient background fully changed the appeal of the site even with the same content. 

# Code Snippets :
```html
<header class="hero">
  <h1 class="brand">Rishit Khinduka</h1>
  <p class="tagline">Crafting Digital Luxury</p>
</header>
css
Copy code
body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #6a1b9a, #ffd700);
  margin: 0;
  color: #333;
}

# Round 2: 

- Prompt : Now, refine the the generated HTML pages by improving white space, working on the fonts, margins and the color tones of the pages." 

# Results :
- It reduced the font sizes for all headings and body text, changed the gold in the background and also improved the spacing in the footer. 

# Evaluation :
- I believe the footer was still too close to the main content, specifically on the index page, so needed to work on that. Apart from that, the site was looking refined. 

# Code Snippets :

.hero {
  background: linear-gradient(90deg, #6a1b9a, #e0c060);
  padding: 60px 20px;
  text-align: center;
}

# Round 3: 

- Prompt: Add hover effects and other responsive elements like animation to make the website feel like a highend website. Plus improve the spacing in the footer, it feels too close to the main content, especially on the index page."

# Results : 
- Changed the styles sheet by adding the transition element, also it gave shadow lift (seeing first time) and also changed button color to invert from purple to gold. Finally fixed the issue with footer by changing padding. 

# Evaluation : The website was feeling really nice. Just one small thing that needed to be changed was that I felt that the hovering shadows were a bit to strong given the light appeal of the page. 

# Code Snippets : 

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(106, 27, 154, 0.25);
}

button {
  background: #ffd700;
  color: #6a1b9a;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  transition: all 0.3s ease;
}

# Round 4: 
Prompt: "Reduce the hovering shadow coloring and improve or add anythig else that I might have missed to point out."

# Results : it had alt element for all images, fixed the hovering color and also improved color contrast for readibility. 

# Evaluation : Did great work by changing small details like alt attribute for images. 

# Round 5: 
Prompt: "The styles.css sheet has alot of code in it. is there any way you can reduce it while maintaining the current look of all the three HTML pages?"

# Results : Cut down the the code lines from 382 to 344 and refined other lines of code to be shorter. 

# Evaluation : The final version was looking very good and extactly how I pictured it to be. 


# Code Snippets : 
h1, h2, h3 {
  color: var(--primary);
}

