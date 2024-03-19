import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './Button';

describe('Button Component', () => {
  const onPressMock = jest.fn();

  it('renders correctly with provided text', () => {
    const {getByText} = render(
      <Button onPress={onPressMock} buttonText="Click Me" style={undefined} />,
    );

    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeTruthy();
  });

  it('calls onPress function when button is pressed', () => {
    const {getByText} = render(
      <Button onPress={onPressMock} buttonText="Click Me" style={undefined} />,
    );

    const buttonElement = getByText('Click Me');
    fireEvent.press(buttonElement);

    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies custom styles to the button', () => {
    const customStyles = {backgroundColor: 'red'};
    const {getByTestId} = render(
      <Button
        onPress={onPressMock}
        buttonText="Click Me"
        style={customStyles}
      />,
    );

    const buttonElement = getByTestId('button-container');
    expect(buttonElement).toBeTruthy();
  });
});
