// ChirpJS Website Logic
let notificationId = 0;
let loadingProgress = 0;
let loadingInterval = null;

const notificationMessages = {
    error: {
        title: "Error",
        description: "Something went wrong. Please try again.",
        icon: "x-circle"
    },
    warning: {
        title: "Warning",
        description: "Please check your input and try again.",
        icon: "alert-triangle"
    },
    info: {
        title: "Information",
        description: "Here's some helpful information for you.",
        icon: "info"
    },
    success: {
        title: "Success",
        description: "Operation completed successfully!",
        icon: "check-circle"
    },
    loading: {
        title: "Loading",
        description: "Please wait while we process your request...",
        icon: null // Will use spinner
    },
    default: {
        title: "Notification",
        description: "This is a default notification message.",
        icon: "message-circle"
    },
    custom: {
        title: "Custom Style",
        description: "This is a custom notification with special styling! 🎉",
        icon: "heart"
    },
    persistent: {
        title: "Persistent Notice",
        description: "This notification won't auto-dismiss. Click X to close.",
        icon: "clock"
    },
    action: {
        title: "Action Required",
        description: "Click the action button to proceed.",
        icon: "zap"
    }
};

// Current notification position
let currentPosition = 'top-right';

// Show notification function
function showNotification(type, position = null) {
    const container = document.getElementById('notification-container');
    const id = `notification-${++notificationId}`;
    const config = notificationMessages[type];

    // Update container position if specified, otherwise use current position
    if (position) {
        updateNotificationPosition(position);
    } else {
        // Ensure container is positioned correctly for current position
        updateNotificationPosition(currentPosition);
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.id = id;

    const iconHTML = type === 'loading'
        ? '<div class="loading-spinner"></div>'
        : `<i class="notification-icon" data-feather="${config.icon}"></i>`;

    const progressHTML = type === 'loading'
        ? `<div class="notification-progress">
             <div class="notification-progress-bar" id="progress-${id}" style="width: 0%"></div>
           </div>`
        : '';

    const actionHTML = type === 'action'
        ? `<button class="notification-action" onclick="handleActionClick('${id}')">Take Action</button>`
        : '';

    notification.innerHTML = `
        <div class="notification-content">
            ${iconHTML}
            <div class="notification-body">
                <div class="notification-title">${config.title}</div>
                <div class="notification-description">${config.description}</div>
                ${progressHTML}
                ${actionHTML}
            </div>
        </div>
        <button class="notification-close" onclick="hideNotification('${id}')">&times;</button>
    `;

    container.appendChild(notification);

    // Initialize Feather icons for this notification
    feather.replace();

    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Handle different notification types
    if (type === 'loading') {
        handleLoadingNotification(id);
    } else if (type === 'persistent') {
        // Don't auto-hide persistent notifications
        return;
    } else {
        // Auto-hide after 5 seconds
        setTimeout(() => {
            hideNotification(id);
        }, 5000);
    }
}

// Handle loading notification with progress
function handleLoadingNotification(id) {
    loadingProgress = 0;
    const progressBar = document.getElementById(`progress-${id}`);

    if (!progressBar) return;

    loadingInterval = setInterval(() => {
        loadingProgress += Math.random() * 15;
        if (loadingProgress >= 100) {
            loadingProgress = 100;
            progressBar.style.width = '100%';
            clearInterval(loadingInterval);

            // Convert to success after completion
            setTimeout(() => {
                hideNotification(id);
                setTimeout(() => showNotification('success'), 300);
            }, 500);
            return;
        }
        progressBar.style.width = loadingProgress + '%';
    }, 200);
}

// Hide notification function
function hideNotification(id) {
    const notification = document.getElementById(id);
    if (notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // Clear loading interval if it exists
    if (loadingInterval) {
        clearInterval(loadingInterval);
        loadingInterval = null;
    }
}

// Handle action button click
function handleActionClick(id) {
    console.log('Action clicked for notification:', id);
    hideNotification(id);
    showNotification('success');
}

// Update notification container position
function updateNotificationPosition(position) {
    const container = document.getElementById('notification-container');
    currentPosition = position;

    // Remove all position classes
    container.classList.remove('top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right');

    // Reset styles
    container.style.top = '';
    container.style.bottom = '';
    container.style.left = '';
    container.style.right = '';
    container.style.transform = '';

    // Apply new position
    switch (position) {
        case 'top-left':
            container.style.top = '1rem';
            container.style.left = '1rem';
            container.style.right = 'auto';
            break;
        case 'top-center':
            container.style.top = '1rem';
            container.style.left = '50%';
            container.style.right = 'auto';
            container.style.transform = 'translateX(-50%)';
            break;
        case 'top-right':
            container.style.top = '1rem';
            container.style.right = '1rem';
            container.style.left = 'auto';
            break;
        case 'bottom-left':
            container.style.bottom = '1rem';
            container.style.left = '1rem';
            container.style.right = 'auto';
            container.style.top = 'auto';
            break;
        case 'bottom-center':
            container.style.bottom = '1rem';
            container.style.left = '50%';
            container.style.right = 'auto';
            container.style.top = 'auto';
            container.style.transform = 'translateX(-50%)';
            break;
        case 'bottom-right':
            container.style.bottom = '1rem';
            container.style.right = '1rem';
            container.style.left = 'auto';
            container.style.top = 'auto';
            break;
    }
}

// Show sequence of all notification types
function showSequence() {
    const types = ['info', 'warning', 'error', 'loading', 'custom'];
    let delay = 0;

    types.forEach((type) => {
        setTimeout(() => {
            showNotification(type);
        }, delay);
        delay += 800;
    });
}

// Clear all notifications
function clearAll() {
    const container = document.getElementById('notification-container');
    const notifications = container.querySelectorAll('.notification');

    notifications.forEach(notification => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });

    // Clear any loading intervals
    if (loadingInterval) {
        clearInterval(loadingInterval);
        loadingInterval = null;
    }
}

// Tab switching functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;

            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            document.querySelector(`[data-tab="${targetTab}"].tab-panel`).classList.add('active');
        });
    });
}

// Copy to clipboard functionality
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const textToCopy = button.dataset.copy;

            try {
                await navigator.clipboard.writeText(textToCopy);

                // Show success notification
                showNotification('success');

                // Temporarily change button text
                const icon = button.querySelector('i');
                const originalIcon = icon.getAttribute('data-feather');
                icon.setAttribute('data-feather', 'check');
                feather.replace();

                setTimeout(() => {
                    icon.setAttribute('data-feather', originalIcon);
                    feather.replace();
                }, 2000);

            } catch (err) {
                console.error('Failed to copy text: ', err);
                showNotification('error');
            }
        });
    });
}

// Initialize all event listeners
function initEventListeners() {
    // Demo button event listeners
    const demoButtons = document.querySelectorAll('.demo-btn');
    demoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.dataset.type;
            showNotification(type);
        });
    });

    // Position button event listeners
    const positionButtons = document.querySelectorAll('.position-btn');
    positionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const position = button.dataset.position;

            // Remove active class from all position buttons
            positionButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Update the current position (this will persist for all future notifications)
            updateNotificationPosition(position);
        });
    });

    // Bulk action buttons
    const showSequenceBtn = document.getElementById('show-sequence');
    const clearAllBtn = document.getElementById('clear-all');

    if (showSequenceBtn) {
        showSequenceBtn.addEventListener('click', showSequence);
    }

    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', clearAll);
    }

    // Initialize tabs and copy buttons
    initTabs();
    initCopyButtons();
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Clean up any existing notifications
    const container = document.getElementById('notification-container');
    if (container) {
        container.innerHTML = '';
    }

    // Initialize Feather icons
    feather.replace();

    // Set default active position button
    const defaultPositionBtn = document.querySelector(`[data-position="${currentPosition}"]`);
    if (defaultPositionBtn) {
        defaultPositionBtn.classList.add('active');
    }

    // Initialize all functionality
    initEventListeners();
    initSmoothScrolling();
    initNavbarScroll();

    console.log('ChirpJS website initialized successfully!');
});

// Handle page load
window.addEventListener('load', () => {
    // Re-initialize Feather icons after everything is loaded
    feather.replace();
});