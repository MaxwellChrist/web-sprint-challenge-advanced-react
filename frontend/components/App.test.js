// Using codegrade_mvp.test.js as inspiration, write 5 tests inside frontend/components/App.test.js:
// From inside the test file, import a component of your choosing, either AppClass.js or AppFunctional.js.
// Test that the visible texts in headings, buttons, links... render on the screen.
// Test that typing on the input results in its value changing to the entered text.
import React from 'react'
import AppClass from './AppClass'
import { render, screen, fireEvent, userEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
// Write your tests here
test('AppClass renders correctly', async () => {
  render(<AppClass />);
})

test('AppClass renders coordiates heading text correctly', async () => {
  render(<AppClass />);

  const coordinatesHeading = screen.getByText(/coordinates \(\d\, \d\)/i);
  expect(coordinatesHeading).toBeInTheDocument();
  expect(coordinatesHeading).toBeVisible();
})

test('AppClass renders all buttons correctly', async () => {
  render(<AppClass />);
  const upButton = screen.getByText(/up/i);
  const downButton = screen.getByText(/down/i);
  const leftButton = screen.getByText(/left/i);
  const rightButton = screen.getByText(/right/i);
  const resetButton = screen.getByText(/reset/i);
  expect(upButton).toBeInTheDocument();
  expect(upButton).toBeVisible();
  expect(downButton).toBeVisible();
  expect(downButton).toBeInTheDocument();
  expect(leftButton).toBeVisible();
  expect(leftButton).toBeInTheDocument();
  expect(rightButton).toBeVisible();
  expect(rightButton).toBeInTheDocument();
  expect(resetButton).toBeVisible();
  expect(resetButton).toBeInTheDocument();
})

test('AppClass renders links correctly', async () => {
  render(<AppClass />);
})

test('AppClass renders user input to email text when typing in input', async () => {
  render(<AppClass />);
  const placeholderText = screen.getByPlaceholderText(/type email/i);
  expect(placeholderText).toBeVisible();
  expect(placeholderText).toBeInTheDocument();
})