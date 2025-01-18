document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    let currentIndex = 0;

    function scrollAccordion(event) {
        event.preventDefault();

        // Collapse the current section and remove the active class
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

        // Expand the new section and add the active class
        const nextItem = accordionItems[currentIndex];
        const nextContent = nextItem.querySelector('.accordion-content');
        nextContent.style.maxHeight = nextContent.scrollHeight + 'px';
        nextItem.classList.add('active');
    }

    // Initialize the first accordion item
    accordionItems[currentIndex].classList.add('active');
    accordionItems[currentIndex].querySelector('.accordion-content').style.maxHeight =
        accordionItems[currentIndex].querySelector('.accordion-content').scrollHeight + 'px';

    // Attach the scroll event to the accordion
    document.querySelector('.accordion').addEventListener('wheel', scrollAccordion);
});
