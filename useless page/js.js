document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (event) => {
        // Create a new "Meow" element
        const meow = document.createElement("div");
        meow.textContent = "Meow";

        // Style the "Meow" element
        meow.style.position = "absolute";
        meow.style.fontSize = "2rem";
        meow.style.fontFamily = "Arial, sans-serif";
        meow.style.color = "black";
        meow.style.cursor = "pointer";
        meow.style.left = `${event.clientX}px`; // Place at the click X-coordinate
        meow.style.top = `${event.clientY}px`; // Place at click Y-coordinate

        // Add the "Meow" element to the body
        document.body.appendChild(meow);

        // Add a click event to remove the "Meow" when clicked
        meow.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent triggering body click!!
            meow.remove();
        });
    });
});
