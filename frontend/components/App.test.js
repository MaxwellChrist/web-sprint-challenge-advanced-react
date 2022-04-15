// Using codegrade_mvp.test.js as inspiration, write 5 tests inside frontend/components/App.test.js:
// From inside the test file, import a component of your choosing, either AppClass.js or AppFunctional.js.
// Test that the visible texts in headings, buttons, links... render on the screen.
// Test that typing on the input results in its value changing to the entered text.
import React from 'react'
import AppClass from './AppClass'
import { render, userEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
// Write your tests here
test('AppClass renders correctly', async () => {
  render(<AppClass />);
})

test('AppClass renders heading text correctly', async () => {
  render(<AppClass />);
  // const heading = screen.getByText(/welcome/i);
  // expect(heading).toBeInTheDocument()
  // expect(heading).toBeVisible()
})

test('AppClass renders buttons correctly', async () => {
  render(<AppClass />)
})

test('AppClass renders links correctly', async () => {
  render(<AppClass />)
})

test('AppClass renders user input to email text when typing in input', async () => {
  render(<AppClass />)
})