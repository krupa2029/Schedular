import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.js';

describe('Header component',() => {
    test('should renders title of application as a text', () => {
        render(<Header />);

        const titleElement = screen.getByText('WordCamp');

        expect(titleElement).toBeInTheDocument;
      });

    test("should render 'Upcoming Event' link", () => {
        render(<Header />);

        const upcomingEventElement = screen.getByTestId('upcoming');

        expect(upcomingEventElement).toBeInTheDocument;
      });

    test("should render 'Past Event' link", () => {
        render(<Header />);

        const pastEventElement = screen.getByTestId('past');

        expect(pastEventElement).toBeInTheDocument;
      });

      
});

