# 🚀 DevStack --- Development Stack Builder

A modern and responsive Development Stack Builder built with React
and TypeScript.Users can explore different development technologies and create their own personalized technology stack by adding and removing technologies dynamically.

## 🛠️ Technologies Used

⚛️ React

🔷 TypeScript

🎨 Tailwind CSS

⚡ Vite

📦 React Icons

## 🌟 Features

## 1. 🔍 Explore Technologies

Users can browse different development technologies organized into
categories such as frontend, backend, database, and more.

## 2. 🧩 Build Your Own Stack

Users can select technologies and create their own personalized
development stack.

## 3. 📱 Responsive & Interactive UI

The application uses responsive Tailwind CSS classes and React state to
provide an interactive experience across different screen sizes.

##📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or
TypeScript. It makes React code easier to read and helps us create the UI structure more clearly.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.

State is used to store and manage data that can change inside a component.

For example, a parent can pass a technology object to a TechCard using
props, while the selected technologies can be stored in state.

### 3. What does the useState hook do, and where did you use it in this project?

useState lets a React component store and update changing data.

In this project, it is used to keep track of the technologies selected
by the user and update the stack when a technology is selected or
removed.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects after a component renders.
I used it to fetch the technology data from the data.json file when the application loads.

### 5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list.

It helps React understand which items were added, removed, or changed,
so it can update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it to show "Your stack is empty" when no technology is selected and to show the selected technologies when the stack is not empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data and functions are passed from a parent to a child through props. In this project, the parent passes technology data and functions like handleAddToStack to the child. The child can communicate with the parent by calling the function received through props.
