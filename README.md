# Astro Expense Tracker

This is a test app for Astro 5.0 features. It focuses on Astro DB, routing and usage of query params.

## Styling

Tailwind is used for styling with a bit of basic css in global file. It uses dark and light mode.

## Features tested

There are three feartures that the app presents, and these are:

- **Dark Mode** - `ThemeBtn` component changes the mode from light to dark and script in `Layout` updates the \
  markup on eacch page re-render. [IMPORTANT] The Layout script utilizes `Astro lifecycle hooks` to eliminate flickering \
  on every new markaup render.
- **Astro DB** - Set up and connected to Turso thanks to variables set up in `example.env` file. \
  The db folder (outside of src) contains schemas and seeds for development. Database transactions are put into astro actions \
  whereas the queries for expenses are done directly in Astro component server code, in `ExpenseList` component.
- **Server-side rerenders** - The expenses in the Expense are server-rendered and require reload to re-fresh. \
  The refresh is done by `ExpenseForm` which is a React component and by the `Remove` which is Astro, server component.\
  This is made partially to show different strategies for data maniuplation on referesh (1) client, using React and \
  `location.reload()` vs (2) server with `Astro.redirect()`. Initialy both were planned to be server components, but the\
  refresh of an html form after form submition and redirects caused a lot of problems with POST request browser popups. \
  [IMPORTANT!] Form state in React componnt is preserved thanks to transition API with [transition:persist](https://docs.astro.build/en/guides/view-transitions/#maintaining-state) directive

## Deployment

The counter is deployed to Netlify using netlify adapter.
