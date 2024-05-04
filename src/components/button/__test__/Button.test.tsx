import { render, screen, fireEvent } from '@testing-library/react'
import Button from '..'
import { ButtonSize, ButtonState } from '../enum'
import { MdOutlineCloudDownload } from 'react-icons/md'

describe("Button", () => {
    describe('Render', () => {
        it('should render Button properly', async () => {
            render(<Button size={ButtonSize.lg}
                variant={ButtonState.PRIMARY}
                type="button" />) // ARRANGE


            const button = await screen.getByRole("button"); // ACT
            expect(button.className).toContain(ButtonState.PRIMARY); // ASSERT
            expect(button.className).toContain(ButtonSize.lg); // ASSERT
            expect(button.getAttribute("type")).toEqual("button"); // ASSERT
        })

        it("Variant === Primary", async () => {
            render(<Button size={ButtonSize.lg}
                variant={ButtonState.PRIMARY}
                type="button" />) // ARRANGE

            const button = await screen.getByRole("button"); // ACT
            expect(button.className).toContain(ButtonState.PRIMARY); // ASSERT
        });

        it("Size == Small", async () => {
            render(<Button type={"submit"} size={ButtonSize.sm} />); // ARRANGE

            const button = await screen.getByRole("button"); // ACT
            expect(button.className).toContain(ButtonSize.sm); // ASSERT
        });


        it("disabled should be truthy", async () => {
            render(<Button disabled={true} />); // ARRANGE

            const button = await screen.getByRole("button"); // ACT
            expect(button.getAttribute("disabled")).toBeDefined(); // ASSERT
            expect(button).toBeDisabled();
        });

        it("Button should have default value", async () => {
            render(<Button />);
            const button = await screen.getByRole("button"); // ACT
            expect(button.innerHTML).toContain("");
        });

        it("Button should have a default variant", async () => {
            render(<Button />);

            const button = await screen.getByRole("button"); // ACT
            expect(button.className).toContain(ButtonState.PRIMARY);
        });

        it("Button should have a default size", async () => {
            render(<Button />);

            const button = await screen.getByRole("button"); // ACT
            expect(button.className).toContain(ButtonSize.lg);
        });


        it("Button should display icon", async () => {
            render(<Button icon={<MdOutlineCloudDownload size={25} className='mr-4' />} />);
            const button = await screen.getByRole("button"); // ACT
            const icon = await screen.getByTestId("rob-icon");
            expect(button.children).toHaveLength(2);
            expect(icon).toBeInTheDocument();
        });

        it("Button shouldn't have icon", async () => {
            render(<Button />);
            const button = await screen.getByRole("button"); // ACT
            expect(button.children).toHaveLength(1);
        });
    })
})