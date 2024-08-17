# N8work

**N8work** is an open-source web-based application that visualizes relationships between various entities in the form of a dynamic network. Each entity is represented as a bubble, and the size of the bubble indicates how closely it is related to the focused entity. The app allows users to explore complex networks and understand connections intuitively.

## Features

- **Dynamic Network Visualization**: Display entities as nodes connected by lines, representing relationships.
- **Interactive Exploration**: Zoom, pan, and click on nodes to explore the network.
- **Scalable Graphs**: Efficiently handle large datasets with optimized rendering.
- **Customizable Visuals**: Modify node sizes, colors, and connection lines based on various parameters.
- **Responsive Design**: Works seamlessly across devices, including desktops, tablets, and smartphones.

### Deployment
**[Netlify](https://www.netlify.com/)**:

## Installation

1. **Clone the repository:**
   - git clone https://github.com/your-username/N8work.git
   - cd N8work

2. **Install Dependencies:**
   - `npm install`

3. **Run The Application:**
   - `npm run dev`
   - to run in the console `node main.js`

4. **Usage:**
  - Navigate the Network: Click on nodes to focus on them, and explore how other entities are connected.
  - Zoom and Pan: Use the mouse or touch gestures to zoom in and out, and to pan across the network.
  - Customize the View: Use available settings to change the appearance of the network.

5. **Contributing:**
   We welcome contributions! If you'd like to help improve N8work, please follow these steps:

   - Fork the repository.
   - Create a new branch (`git checkout -b feature/your-feature`).
   - Commit your changes (`git commit -m 'Add some feature'`).
   - Push to the branch (`git push origin feature/your-feature`).
   - Open a Pull Request.

5. **License:**
   - This project is licensed under the MIT License - see the [LICENSE]() file for details.
query structure example : https://www.wikidata.org/w/api.php?action=wbsearchentities&search=Elon+Musk&language=en&limit=30&continue=0&format=json&uselang=en&type=item
