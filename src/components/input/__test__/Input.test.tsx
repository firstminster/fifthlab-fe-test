import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '..'

const mockSetTodos = jest.fn()

describe('Input', () => {
    describe('Render', () => {
        it('should render the input', () => {
            render(<Input name='user' type='text' placeholder='Find a user' />) // ARRANGE

            const input = screen.getByPlaceholderText('Find a user') //ACT

            expect(input).toBeInTheDocument()// ASSERT
        })

        it('should have input type as text', () => {
            render(<Input name='user' type='text' placeholder='Find a user' />) // ARRANGE

            const input = screen.getByPlaceholderText('Find a user') //ACT
            expect(input).toHaveProperty("type", "text"); // ASSERT
        })

        it('should have input expected', () => {
            render(<Input name='user' type='text' placeholder='Find a user' />) // ARRANGE

            const input = screen.getByPlaceholderText('Find a user') //ACT
            fireEvent.change(input, { target: { value: "John Doe" } });
            expect(input).toHaveProperty("value", "John Doe"); // ASSERT
        })

        it('should display an input icon', () => {
            render(<Input name='user' type='text' placeholder='Find a user' />) // ARRANGE

            const icon = screen.getByTestId("rob-input-info"); //ACT
            expect(icon).toBeInTheDocument(); // ASSERT
        })

    })
}
)   
