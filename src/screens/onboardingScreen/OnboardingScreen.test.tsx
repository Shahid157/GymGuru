import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import OnboardingScreen from './OnboardingScreen';
import strings from '../../utils/strings';

const mockNavigation = {
  navigate: jest.fn(),
};

describe('OnboardingScreen Component', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <OnboardingScreen navigation={mockNavigation} />,
    );

    expect(getByText(strings.env)).toBeTruthy();
    expect(getByText(strings.onboarding_note)).toBeTruthy();
    expect(getByText(strings.get_started_btn_txt)).toBeTruthy();
  });

  it('navigates to login screen when button is pressed', () => {
    const {getByText} = render(
      <OnboardingScreen navigation={mockNavigation} />,
    );
    const button = getByText(strings.get_started_btn_txt);

    fireEvent.press(button);

    expect(mockNavigation.navigate).toHaveBeenCalledWith(strings.login_screen);
  });
});
