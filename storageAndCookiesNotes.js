/**
 * Local Storage, Session Storage, and Cookies - Notes and Examples
 *
 * This file explains the differences between Local Storage, Session Storage, and Cookies,
 * their usage, and provides examples for each.
 */

// ---------------------- Local Storage ----------------------
/**
 * Local Storage stores data with no expiration time.
 * Data persists even after the browser is closed and reopened.
 */

// Setting an item in Local Storage
localStorage.setItem("username", "Rishi Sharma");

// Getting an item from Local Storage
let username = localStorage.getItem("username");
console.log("Username from Local Storage:", username);

// Removing an item from Local Storage
localStorage.removeItem("username");

// Clearing all Local Storage data
localStorage.clear();

// ---------------------- Session Storage ----------------------
/**
 * Session Storage stores data for the duration of a session.
 * Data is removed once the tab or browser is closed.
 */

// Setting an item in Session Storage
sessionStorage.setItem("sessionID", "12345");

// Getting an item from Session Storage
let sessionID = sessionStorage.getItem("sessionID");
console.log("Session ID from Session Storage:", sessionID);

// Removing an item from Session Storage
sessionStorage.removeItem("sessionID");

// Clearing all Session Storage data
sessionStorage.clear();

// ---------------------- Cookies ----------------------
/**
 * Cookies store small amounts of data with an expiration time.
 * They are sent with every HTTP request to the server.
 */

// Setting a cookie (name=value; expires; path)
document.cookie = "user=Rishi Sharma; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Getting all cookies
console.log("Cookies:", document.cookie);

// Function to get a specific cookie by name
function getCookie(name) {
    let cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split('=');
        if (cookie[0] === name) return cookie[1];
    }
    return null;
}

console.log("User Cookie:", getCookie("user"));

// Deleting a cookie (Set an expired date)
document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

/**
 * Notes:
 * - Local Storage: Large storage capacity, persists indefinitely, not sent with requests.
 * - Session Storage: Same as Local Storage but cleared when the session ends.
 * - Cookies: Small storage size, can have expiration, sent with HTTP requests.
 */
