LOGIN REDIRECT TEST - V2

Use:
Email: testuser@example.com
Password: Test@123

Flow:
original index.html -> Login -> index2.html

This version contains NO consent popup/window and NO consent-management code.
Consent code can be added later directly to index2.html.

IMPORTANT:
Run through a local web server, not by opening the HTML with a file:// URL.

From this folder:
    python -m http.server 8000

Then open:
    http://localhost:8000/original%20index.html
