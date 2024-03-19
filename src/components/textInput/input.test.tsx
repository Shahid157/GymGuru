import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import InputText from './input'; // Update the import path accordingly

describe('InputText Component', () => {
  const onChangeTextMock = jest.fn();
  const onEndEditingMock = jest.fn();
  const onFocusMock = jest.fn();

  const renderInputText = (props = {}) => {
    return render(
      <InputText
        onChangeText={onChangeTextMock}
        onEndEditing={onEndEditingMock}
        onFocus={onFocusMock}
        {...props}
      />,
    );
  };

  it('renders correctly with provided hint', () => {
    const {getByPlaceholderText} = renderInputText({hint: 'Enter text'});
    const inputElement = getByPlaceholderText('Enter text');
    expect(inputElement).toBeTruthy();
  });
});
