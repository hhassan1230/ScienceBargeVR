export default house = {
  Entry: {
    roomName: 'Entry',
    info: `
      * Add
      * Text
      * Here`,
    img: 'Entry.jpg',
    adjacentRooms: ['Main_Deck'],
  },
  Main_Deck: {
    roomName: 'Main_Deck' ,
    info: `
      * Add Text For.
      * Areas for Main Deck.
      * Beautiful acrylic Hudson View with lights.
      * Hall closet storage.
      * Classic painted floors.`,
    img: 'Main_Deck.jpg',
    adjacentRooms: ['Entry', 'Greenhouse_1', 'Compose', 'Roof', 'Starboard_Patio']
  },
  Greenhouse_1: {
    roomName: 'Greenhouse_1',
    info:`
      * Elegant chandelier with LED lights.
      * Tiered high ceilings.
      * Wrought iron window for added security.
      * Direct acces to kitchen for convenience.
      * Beautiful tile floor.`,
    img: 'Greenhouse_1.jpg',
    adjacentRooms: ['Main_Deck', 'Greenhouse_2']
  },
  Greenhouse_2: {
    roomName: 'Greenhouse_2',
    info: `
      * Granite counter tops and backsplash.
      * Custom-made island.
      * Samsung stainless steel appliances.
      * Birchwood crown molding.
      * Stainless steel 9" extra deep double sinks with pullout.
      * Under cabinet and top of cabinet LED lights.`,
    img: 'Greenhouse_2.jpg',
    adjacentRooms: ['Greenhouse_1','Back_Patio']
  },
  Back_Patio: {
    roomName: 'Back_Patio',
    info: `
      * Granite top custom-made cabinet
      * Custom wine rack display and storage.
      * Modern chandelier with LED lights.
      * Easy access to backyard when entertaining.
      * Open and spacious.
    `,
    img: 'Back_Patio.jpg',
    adjacentRooms: ['Greenhouse_2', 'Compose']
  },
  Compose: {
    roomName: 'Compose',
    info: `
      * Extra large back yard for playground or future pool.
      * Sprinkler system.
      * Beautiful fencing.
      * Mature trees:
        shade: oak, pecan, fresno, acacia, royal poinciana, ficus, ceiba
        fruit: papaya, mango, limes.
      * Entertaining and eating area for Compose barbeques.
    `,
    img: 'Compose.jpg',
    adjacentRooms: ['Main_Deck','Back_Patio']
  },
  Roof: {
    roomName: 'Roof',
    info: `
    * Extra large bedroom, allows for sitting area.
    * Tiered cieling or architecture.
    * Quiet ceiling fan and light fixture.
    * Plush neutral taupe carpet.
    * Sliding door for easy access to backyard.`,
    img: 'Roof.jpg',
    adjacentRooms: ['Main_Deck','Starboard_Patio']
  },
  Starboard_Patio:  {
    roomName: 'Starboard_Patio',
    info: `
      * Custom Text Here .
      * Porcelain Awesome Sause.
      * Privacy Patio.
      * Relaxing garden View.
      * Seperate storage.
      * I'm just making stuff unp now.`,
    img: 'Starboard_Patio.jpg',
    adjacentRooms: ['Main_Deck', 'Roof']
  }
}