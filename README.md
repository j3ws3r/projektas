# projektas

## About

This app is being built with [Claude](https://claude.ai), the AI assistant made by Anthropic. Claude helps write and improve the code, plan the architecture and draft the documentation, while a person makes the final decisions and reviews the code.

## Structure

- `index.html` the public page with a crochet pattern for kids' socks and recommended supplies
- `content.js` all page content: text, sizes, pattern steps and supplies
- `admin.html` the content manager

## Content management

Open `admin.html`, edit the text, sizes, steps or supplies and click "Preview" to see the result before publishing.

Saving requires a GitHub fine-grained access token with "Contents: Read and write" permission for this repository only. Create one in GitHub settings (Settings → Developer settings → Personal access tokens → Fine-grained tokens) and enter it in the GitHub section of the admin page. The token is kept only in the open browser tab. Clicking "Save to GitHub" updates `content.js` with a separate commit.

You can use variables such as `{n}` in the pattern text. Their values for each size are set in the "Variables" section.
