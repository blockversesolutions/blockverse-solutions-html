document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    let currentIndex = 0;

    function toggleAccordion(index) {
        // Collapse all items
        accordionItems.forEach((item, i) => {
            const content = item.querySelector('.accordion-content');
            if (i === index) {
                // Toggle the clicked item
                item.classList.toggle('active');
                content.style.maxHeight = item.classList.contains('active') ? content.scrollHeight + 'px' : null;
            } else {
                // Collapse all other items
                item.classList.remove('active');
                content.style.maxHeight = null;
            }
        });
    }
    function scrollAccordion(event) {
        event.preventDefault(); // Prevent default scroll behavior
        event.stopPropagation(); // Stop event from propagating further

        // Collapse the current section
        const currentItem = accordionItems[currentIndex];
        const currentContent = currentItem.querySelector('.accordion-content');
        currentContent.style.maxHeight = null;
        currentItem.classList.remove('active');

        // Calculate the direction of the scroll
        const delta = Math.sign(event.deltaY);

        // Update the index
        currentIndex += delta;
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex >= accordionItems.length) currentIndex = accordionItems.length - 1;
        // Expand the new section
        toggleAccordion(currentIndex);
    }
    // Initialize the first accordion item
    toggleAccordion(currentIndex);
    // Attach the scroll event to the accordion
    const accordionContainer = document.querySelector('.accordion');
    accordionContainer.addEventListener('wheel', scrollAccordion);
    // Attach click event to each accordion header
    accordionItems.forEach((item, index) => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            currentIndex = index;
            toggleAccordion(index);
        });
    });
});
