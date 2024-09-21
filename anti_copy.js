(function () {
    "use strict";

    function systemDetails(){
        return {
            'name': 'anticopy',
            'version': '1.0.0'
        }
    }

    function showWarning(message) {
        return message;
    }

    // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        showWarning("Right-click is disabled.");
    });

    // Disable text selection
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    // Disable copy shortcut
    document.addEventListener('copy', function (e) {
        e.preventDefault();
        showWarning("Copying content is disabled.");
    });

    // Disable cut shortcut
    document.addEventListener('cut', function (e) {
        e.preventDefault();
        showWarning("Cutting content is disabled.");
    });

    // Disable paste shortcut
    document.addEventListener('paste', function (e) {
        e.preventDefault();
        showWarning("Pasting content is disabled.");
    });

    // Disable save shortcut
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
            e.preventDefault();
            showWarning("Saving is disabled.");
        }
    });

    // Disable view source shortcut
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 85) {
            e.preventDefault();
            showWarning("Viewing page source is disabled.");
        }
    });

    // Disable print shortcut
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 80) {
            e.preventDefault();
            showWarning("Printing is disabled.");
        }
    });

    // Disable developer tools shortcut
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            showWarning("Developer tools are disabled.");
        }
    });

    // Disable Safari reader mode shortcut
    window.addEventListener('keydown', function (e) {
        if ((e.metaKey && e.shiftKey && e.keyCode === 82) || (e.ctrlKey && e.shiftKey && e.keyCode === 82)) {
            e.preventDefault();
            showWarning("Safari reader mode is disabled.");
        }
    });

    // Disable Ctrl+A/⌘+A (Select All)
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 65) {
            e.preventDefault();
            showWarning("Select All is disabled.");
        }
    });

    // Disable Ctrl+C/⌘+C (Copy)
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 67) {
            e.preventDefault();
            showWarning("Copy is disabled.");
        }
    });

    // Disable Ctrl+X/⌘+X (Cut)
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 88) {
            e.preventDefault();
            showWarning("Cut is disabled.");
        }
    });

    // Disable Ctrl+V/⌘+V (Paste)
    window.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 86) {
            e.preventDefault();
            showWarning("Paste is disabled.");
        }
    });

    // Disable image dragging
    document.addEventListener('dragstart', function (e) {
        e.preventDefault();
    });

    // Disable image dragging by mouse
    document.addEventListener('mousedown', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    // Disable opening Developer Tools with Ctrl + Shift + J
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            e.stopPropagation();
        }
    });
})();