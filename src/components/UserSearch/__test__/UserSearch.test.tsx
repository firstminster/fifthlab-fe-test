import { render, screen } from '@testing-library/react'
import UserSearch from '@/components/UserSearch/UserSearch'
import { Provider } from 'react-redux'
import { store } from '@/store'

describe('UserSearch', () => {


    it('should have a heading', () => {
        render(<Provider store={store}>
            <UserSearch />
        </Provider>) // ARRANGE

        const myElem = screen.getByRole('heading', {
            name: 'Hello, Emerald'
        }) // ACT

        expect(myElem).toBeInTheDocument() // ASSERT
    })



})






// it('should have Hello text', () => {
//     render(<Provider store={store}>
//         <UserSearch />
//     </Provider>) // ARRANGE

//     const myElem = screen.getByText(/Hello/) // ACT

//     expect(myElem).toBeInTheDocument() // ASSERT
// })