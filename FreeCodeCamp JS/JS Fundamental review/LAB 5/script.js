function pyramid(pattern, rows, upsideDown) {

    // This will store the complete pyramid.
    // Start with "\n" because the output must begin with a newline.
    let result = "\n";

    // Loop once for every row.
    // If rows = 4, i will be 0, 1, 2, 3.
    for (let i = 0; i < rows; i++) {

        // This variable will store the current row.
        let row;

        // If upsideDown is false,
        // create a normal pyramid where the vertex is at the top.
        if (upsideDown === false) {

            // Calculate how many spaces should come before the pattern.
            // For 4 rows: 3, 2, 1, 0
            const spaces = rows - 1 - i;

            // Calculate how many pattern characters are needed.
            // The values become: 1, 3, 5, 7
            const characters = 2 * i + 1;

            // Create the row:
            // spaces first + pattern characters after them.
            row = " ".repeat(spaces) + pattern.repeat(characters);

        } else {

            // For a downward pyramid, spaces increase:
            // 0, 1, 2, 3...
            const spaces = i;

            // Pattern characters decrease:
            // 7, 5, 3, 1 for 4 rows.
            const characters = 2 * (rows - i) - 1;

            // Create the row using the calculated spaces
            // and pattern characters.
            row = " ".repeat(spaces) + pattern.repeat(characters);
        }

        // Add the current row to the complete result.
        // "\n" moves us to the next line.
        result += row + "\n";
    }

    // Return the complete pyramid.
    return result;
}