export function toPaths(map: string[], colors: Record<string, string>) {
    return Object.entries(colors).map(([letter, fill]) => ({
        fill,
        d: map
            .flatMap((row, y) =>
                [...row].map((cell, x) => (cell === letter ? `M${x} ${y}h1v1h-1z` : "")),
            )
            .join(""),
    }));
}
