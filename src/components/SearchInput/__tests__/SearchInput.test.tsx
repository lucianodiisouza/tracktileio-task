import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import TextSearch from "../index";

describe("SearchInput", () => {
    test("should render the SearchInput", () => {
        const setSearchMock = jest.fn();
        const search = "initial search";

        const { getByPlaceholderText } = render(
            <TextSearch setSearch={setSearchMock} search={search} />
        );

        const inputEl = getByPlaceholderText(
            "Search across title and description..."
        );
        expect(inputEl).toBeDefined();
        expect(inputEl.props.value).toBe(search);
    });

    test("should trigger setSearch fn when user changes the text", async () => {
        const setSearchMock = jest.fn();
        const search = "initialSearch";

        const { getByPlaceholderText } = render(
            <TextSearch setSearch={setSearchMock} search={search} />
        );

        const inputEl = getByPlaceholderText(
            "Search across title and description..."
        );

        fireEvent.changeText(inputEl, "newSearch");

        await waitFor(() => {
            expect(setSearchMock).toHaveBeenCalledWith("newSearch");
        });
    });
});
