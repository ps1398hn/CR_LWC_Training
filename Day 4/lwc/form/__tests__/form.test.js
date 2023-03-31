import { createElement } from 'lwc';
import Form from 'c/form';

describe('c-form', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-form', {
            is: Form
        });

        // Act
        document.body.appendChild(element);

        // Assert
         const p = element.shadowRoot.querySelectorAll('lightning-input');
        expect(p.value).toBe(/^[a-zA-Z ]+$/);;
    });
});
