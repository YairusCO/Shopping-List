import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HelpDialog from './HelpDialog'

describe('<HelpDialog />', () => {
	const translateMock = jest.fn((text) => text)
	const userDetails = {
		fullName: 'avi',
		userEmail: 'avi@gmail.com',
		messageBody: '',
		isCedent: null,
		role: {
			name: 'Investor',
		},
	}
	test('it should mount', () => {
		render(<HelpDialog t={translateMock} userDetails={userDetails} />)
		const helpDialog = screen.getByTestId('HelpDialog')
		expect(helpDialog).toBeInTheDocument()
	})
	test('Button should be disabled', () => {
		render(<HelpDialog t={translateMock} userDetails={userDetails} />)
		const button = screen.getByTestId('mainBtn')
		expect(button).toBeEnabled()
	})
})
