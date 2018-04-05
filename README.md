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

# Tech used

* CSS Grid for the chessboard
* ~~SCSS CSS Preprocessor~~
* ~~BEM Methodology~~
* `styled-components` for CSS. BEM is useful, but the application wasn't right for this app.

# Product Considerations

### Product should work across browsers
Tested across any browser that has > 2% usage for target demo

### Product should work across devices
Mobile browsing has overtaken desktops, and the trend isn't stopping. This app should work when viewed on any modern device.

# Code Considerations

### Code should be modular
Devs should be able to add new pieces easily as well as include the board using a separate configuration with the same codebase.

### Code should be clean, readable, and standardized
Spaghetti code is no fun. While opinions differ on specific implementations, the most important thing is that all code follows the same guidelines! This also means that when there are multiple ways of doing something with roughly the same performance, the _most readable_ should be preferred.

For this project, all code is linted with `eslint` using the Airbnb base with the following modifications:
1. `react/jsx-filename-extension` to allow .js to include JSX code (instead of .jsx)
2. `max-len` because I prefer a max-length of 120
3. `object-curly-newline` because stateless components look better on a single line

### Code shouldn't break
It's easy to tweak one area of a project and break another, which makes automated testing very important.

Tests are integrated into this project with Jest and Enzyme.

Start the test runner with:

### `npm test` or `yarn test`


# Thoughts & Notes

The CSS Grid is nice and makes the code cleaner, ~~but the styling is too specific, so different board sizes will cause the 'black' tiles to be misaligned.~~ _I fixed this by using a simple modulo operator to correctly colorize the tiles._

~~In addition, the width of the rows are set in the CSS, which is suboptimal.~~ _I fixed this by converting from BEM to `styled-components` which can take a JS variable as a CSS property. Works great!_

The best solution would be to separate each row into a parent element, then you can :odd and :even on those to their children tiles to ensure a consistent grid. ~~Will likely implement later.~~

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


#### Icons

Icons courtesy of `Those Icons` CC 3.0 BY
