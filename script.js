$(document).ready(function () {
    // Initial base font sizes
    const baseFontSizes = {
        'hebrew': 12 * 1.5, // Starting size for .hebrew
        'transliteration': 8 * 1.5, // Starting size for .transliteration
        'english': 6 * 1.5 // Starting size for .english
    };

    // Update font size with relative size adjustments for strong and large
    function updateFontSize(className, newSize) {
        if (className === 'hebrew') {
            $(`.${className}`).css('font-size', newSize + 'px');
            $(`.${className} strong`).css('font-size', (newSize * 1.14) + 'px');
            $(`.${className}-large`).css('font-size', (newSize * 1.75) + 'px');
        } else {
            $(`.${className}`).css('font-size', newSize + 'px');
        }
    }

    $('.font-btn').on('click', function () {
        const className = $(this).data('class');
        const increment = parseFloat($(this).data('increment'));
        const $input = $(`#${className}-font-size`);
        let currentSize = parseFloat($input.val());
        let newSize = currentSize + increment;

        if (newSize > 0) { // Ensure font size stays positive
            updateFontSize(className, newSize);
            $input.val(newSize);
        }
    });

    $('.font-size-input').on('change', function () {
        const className = $(this).data('class');
        let newSize = parseFloat($(this).val());

        if (newSize > 0) { // Ensure valid input
            updateFontSize(className, newSize);
        } else {
            alert('Font size must be greater than 0');
            $(this).val(baseFontSizes[className]);
        }
    });

    // Initialize the font size input fields with their base sizes
    Object.keys(baseFontSizes).forEach(className => {
        $(`#${className}-font-size`).val(baseFontSizes[className]);
    });

    // Reset button functionality
    $('#resetFonts').on('click', function () {
        Object.keys(baseFontSizes).forEach(className => {
            updateFontSize(className, baseFontSizes[className]);
            $(`#${className}-font-size`).val(baseFontSizes[className]);
        });
    });
});

document.getElementById('sidebarToggle').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    sidebar.classList.toggle('collapsed');
    console.log('Sidebar class list:', sidebar.classList);

    mainContent.classList.toggle('sidebar-collapsed');
    console.log('Main content class list:', mainContent.classList);
});
