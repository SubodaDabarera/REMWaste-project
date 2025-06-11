## 🛠️ Skip Selection UI Update – Feature Description

### ✨ UI/UX Improvements

- **Redesigned Product Cards**  
  I updated the product card styles to better capture user attention. Previously, the cards included repetitive buttons like **"Select this skip"** and **"Selected"**, which felt intrusive and overly forceful. These have been removed for a cleaner, more intuitive experience.

- **Card Interaction Behavior**  
  Initially, the UI displayed a list of skip cards with a simple layout and no continue button. Now, when a user clicks on a card, it dynamically updates its visual style to reflect selection. This helps the user clearly identify their chosen skip without extra steps. The selected skip’s price is also displayed in the **Action Bar** below.

- **Action Bar Enhancements**  
  The Action Bar has been redesigned to provide clear navigation and pricing details. It includes a back button, a continue button, and displays the total price for the selected skip. This total includes the skip base price, VAT, and transportation costs. A small arrow next to the total reveals a detailed price breakdown, allowing users to see exactly what they're being charged — promoting transparency and user trust.

### 🖼️ Visual & Content Improvements

- **Sample Skipper Image**  
  Since the retrieved data didn’t include images for skippers, I added a static placeholder image. The background was removed to create a cleaner, more visually appealing presentation of the skipper.

- **Color Theme**  
  An **orange color scheme** was chosen to reflect an industrial feel. As many construction-related tools and equipment feature yellow or orange tones, this theme aligns well with user expectations and enhances visual coherence.

### 📱 Responsive Design

- The layout is fully responsive and optimized for all screen sizes — from desktop monitors to mobile devices — ensuring a smooth and consistent user experience across platforms.

### 🧰 Tech Stack

- **Frontend**: React.js with TypeScript  
- **Styling**: TailwindCSS  
- **Data Fetching**: Axios  
- **Build Tool**: Vite  
- **Architecture**: Functional React components
