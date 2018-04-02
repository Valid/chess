# Chess
A very simple ReactJS-based chess game containing only a bishop and a ~~horse~~ rook.

This project serves as a code sample. The specifications are as follows:

 * Game UI powered by ReactJS
 * Game Logic powered by ES6
 * Gameboard has two set pieces: A knight and a bishop.
 * Each piece is individually selectable.
   * Upon selection, user may click another _valid_ tile to move piece
 * Pieces may only make legal moves
 * No chess-specific 3rd party libraries may be used
 * Pieces cannot occupy the same tile
 * Provide visual feedback for:
   * Piece selected
   * Valid move
   * Invalid move

#### Should be fun. Here goes!

# Online preview

For convenience, you can see the latest version online at:

### [playchess.netlify.com](https://playchess.netlify.com/)

# Local build

To build locally, first clone the repo:

### `git clone https://github.com/Valid/chess.git`

Then `cd chess` to get into the project directory.

In the project directory, you can start the project by running:

### `npm start` or `yarn start`

This should open a browser. If not, navigate to [http://localhost:3000](http://localhost:3000) to view it.

# Tests

Tests are integrated with Jest and Enzyme.

Start the rest runner with

### `npm test` or `yarn test`
