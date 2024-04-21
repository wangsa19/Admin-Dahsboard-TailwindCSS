/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "select-arrow":
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0icmdiYSgxNTYsMTYzLDE3NSwxKSI+PHBhdGggZD0iTTExLjk5OTkgMTMuMTcxNEwxNi45NDk3IDguMjIxNjhMMTguMzYzOSA5LjYzNTg5TDExLjk5OTkgMTUuOTk5OUw1LjYzNTk5IDkuNjM1ODlMNy4wNTAyIDguMjIxNjhMMTEuOTk5OSAxMy4xNzE0WiI+PC9wYXRoPjwvc3ZnPg==")',
      },
    },
  },
  plugins: [],
};
