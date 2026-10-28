

// Create The Page Topics List
// 1. Target your containers
const mainBody = document.querySelector('#MainBody');
const topicsContainer = document.querySelector('#PageTopics'); // Change this selector to match your HTML sidebar container

if (mainBody && topicsContainer) {
    // 2. Query all h2 and h3 elements with class "title" inside #MainBody
    const headings = mainBody.querySelectorAll('h2.title, h3.title');

    headings.forEach((heading, index) => {
        // 3. Generate a clean URL-friendly ID if the element doesn't have one
        if (!heading.id) {
            heading.id = heading.textContent
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9 ]/g, '') // Remove punctuation
                .replace(/\s+/g, '-');      // Replace spaces with hyphens
        }

        // 4. Create the clickable anchor link wrapper
        const anchorLink = document.createElement('a');
        anchorLink.href = `#${heading.id}`;

        // 5. Create the h5 container element for the sidebar text
        const sidebarText = document.createElement('h5');
        sidebarText.textContent = heading.textContent;

        // 6. Apply your specific conditional styling rules
        if (heading.tagName.toLowerCase() === 'h2') {
            // h2 elements get a standard h5 container with no extra class
            anchorLink.appendChild(sidebarText);
        } else if (heading.tagName.toLowerCase() === 'h3') {
            // h3 elements get an h5 container with the .page-topic-indented class
            sidebarText.classList.add('page-topic-indented');
            anchorLink.appendChild(sidebarText);
        }

        // 7. Append the structured link into your sidebar topics list
        topicsContainer.appendChild(anchorLink);
    });
    const DecorativeTitleLine = document.createElement('div.decorative-title-line');
    topicsContainer.append(DecorativeTitleLine);
}

