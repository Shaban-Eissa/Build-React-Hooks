# Recreate useState and useEffect from Scratch

This project is for developers who feel like they’re missing out on some potential due to a poor understanding of hooks. If you want to deepen your knowledge of hooks and gain another level of productivity, this demo is for you.

By the end of this demo, you'll know exactly how React hooks like `useState` and `useEffect` work under the hood, and you’ll be able to intuitively understand why the hooks rules exist.

## Motivation

We often use React hooks such as `useState` and `useEffect` without fully understanding how they work. While eslint-plugin-react-hooks can help you follow the rules, wouldn't it be better to know why the rules exist? This project helps you break through that barrier by building your own versions of these hooks from scratch.

The goal is to not just use hooks but to deeply understand how React manages state and side effects. After recreating `useState` and `useEffect`, you'll have a clearer picture of how React operates under the hood.

## What You'll Learn

- **Recreate useState**: You'll build your own version of `useState`. Through this process, you’ll gain insights into how hooks preserve state between renders and how React triggers component updates.
  
- **Support Multiple Hooks**: You'll learn why hooks must be called in a deterministic order and how React manages multiple hooks to ensure state and effects are correctly associated with each render.
  
- **Recreate useEffect**: You’ll create your own `useEffect` from scratch, discovering how React handles effect callbacks, dependency arrays, and cleaning up after effects. You'll see how React stores the callback functions and how it compares dependencies.

By the end of this demo, you'll understand the fundamental rules of hooks:

1. Only Call Hooks at the Top Level
2. Only Call Hooks from React Functions

You'll have an intuition for why these rules are enforced, and your understanding will be so clear that your brain will practically be its own eslint-plugin-react-hooks.

## Getting Started

To get started with this project:

1. Clone the repository:
```bash
git clone https://github.com/Shaban-Eissa/Build-React-Hooks
cd Build-React-Hooks
```
 
2. Install the necessary dependencies:


```bash
npm install
```
 
3. Run the project:


```bash
npm run dev
```

## How It Works 
The code in this project is a simplified version of how React hooks work. You'll recreate a basic hooks system that can handle `useState` and `useEffect`. While this won't be as robust as React's actual implementation, it will give you a clear understanding of the key concepts.`useState`
- You'll build a function that stores state in a way that persists across renders.

- You'll also see how React's rendering system triggers re-renders when state updates.

- You’ll recreate the logic behind `useEffect`, managing effect callbacks and dependency arrays.

- You’ll learn how to implement effect cleanup and dependency checking.

## Conclusion 
By building `useState` and `useEffect` from scratch, you'll have a much deeper understanding of React hooks. You'll see why the hooks rules are so important and how they enable React to efficiently manage state and effects in your components.

## Contributions 

Contributions are welcome! If you’d like to improve this project or add more hooks, feel free to open a pull request or submit an issue.
