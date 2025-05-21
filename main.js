document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    // 1. Event Listener:
    dropdownToggle.addEventListener('click', function() {
        // 2. Toggle 'active' class (for arrow rotation, but also useful as a state indicator)
        this.classList.toggle('active');

        // 3. Conditional Logic for Showing/Hiding:
        if (dropdownContent.style.maxHeight) {
            // If dropdownContent.style.maxHeight has a value (meaning it's currently open)
            dropdownContent.style.maxHeight = null; // Set it to null to collapse it
            this.setAttribute('aria-expanded', 'false'); // Update accessibility attribute
        } else {
            // If dropdownContent.style.maxHeight is empty (meaning it's currently closed)
            // Calculate the full height of the content, even if it's not visible
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
            this.setAttribute('aria-expanded', 'true'); // Update accessibility attribute
        }
    });
});