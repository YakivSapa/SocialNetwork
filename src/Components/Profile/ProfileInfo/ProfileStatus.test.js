import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("after creation, <span> should be displayed", () => {
        const component = create(<ProfileStatus status="Greetings!" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation, <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Greetings!" />);
        const root = component.root;
        let span = root.findByType("input");
        expect(span).toBeNull();
    });
    test("after creation, span with correct status should be displayed ", () => {
        const component = create(<ProfileStatus status="Greetings!" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.innerText).toBe(1);
    });
    test("after creation, <span> should contain correct status", () => {
        const component = create(<ProfileStatus status="Greetings!" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Greetings!");
    });
    test("<input> should be displayed in editMode instead of <span>", () => {
        const component = create(<ProfileStatus status="Greetings!" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Greetings!");
    });
});