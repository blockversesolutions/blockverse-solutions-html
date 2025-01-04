function handleTabClick(evt, groupId, contentId) {
    // Handle tab button activation for the specific group
    const group = document.getElementById(groupId);
    const tablinks = group.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    evt.currentTarget.classList.add("active");

    // Handle tab content visibility for the specific group
    const contentElements = document.querySelectorAll(`.${groupId}Content`);
    contentElements.forEach((element) => element.classList.remove("active"));
    document.getElementById(contentId).classList.add("active");
}
// Initialize default tabs
document.getElementById("defaultOpen-coin").classList.add("active");
document.getElementById("all-coin").classList.add("active");
document.getElementById("defaultOpen-tab2").classList.add("active");
document.getElementById("Forex").classList.add("active");

// Add group-specific content class
document.getElementById("all-coin").classList.add("group1Content");
document.getElementById("new-coin").classList.add("group1Content");
document.getElementById("Forex").classList.add("group2Content");
document.getElementById("Commodites").classList.add("group2Content");