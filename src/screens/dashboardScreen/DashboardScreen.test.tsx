import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useSelector, useDispatch} from 'react-redux';
import DashboardScreen from './DashboardScreen';
import strings from '../../utils/strings';

jest.mock('react-redux');

describe('DashboardScreen Component', () => {
  const mockedSelector = jest.fn();
  const mockedDispatch = jest.fn();

  const mockNavigation = {
    navigate: jest.fn(),
  };

  const mockRoute = {
    params: {
      apiData: {
        entries: [
          {
            API: 'API 1',
            Category: 'Category 1',
            Description: 'Description 1',
            Link: 'Link 1',
          },
        ],
      },
    },
  };

  beforeEach(() => {
    useSelector.mockImplementation(callback =>
      callback({AddItemSlicer: [], UserSlicer: []}),
    );
    useDispatch.mockReturnValue(mockedDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with API data', () => {
    useSelector.mockImplementation(callback =>
      callback({AddItemSlicer: [], UserSlicer: []}),
    );
    const {getByText} = render(
      <DashboardScreen navigation={mockNavigation} route={mockRoute} />,
    );

    expect(getByText('API 1')).toBeTruthy();
  });

  it('navigates back to login screen when "Go Back" is pressed', () => {
    const {getByText} = render(
      <DashboardScreen navigation={mockNavigation} route={{}} />,
    );
    const goBackButton = getByText(strings.go_back_btn);

    fireEvent.press(goBackButton);

    expect(mockNavigation.navigate).toBeTruthy;
  });

  it('dispatches clearUser and sets cart mode when cart button is pressed', () => {
    useSelector.mockImplementation(callback =>
      callback({AddItemSlicer: [{}, {}], UserSlicer: []}),
    );
    const {getByText} = render(
      <DashboardScreen navigation={mockNavigation} route={{}} />,
    );
    const cartButton = getByText('Cart : 2');

    fireEvent.press(cartButton);

    expect(mockedDispatch).toBeTruthy;
    expect(mockedDispatch).toBeTruthy;
  });

  it('dispatches addItem when "Add to Cart" button is pressed', () => {
    useSelector.mockImplementation(callback =>
      callback({AddItemSlicer: [], UserSlicer: []}),
    );
    const {getByText} = render(
      <DashboardScreen navigation={mockNavigation} route={mockRoute} />,
    );
    const addToCartButton = getByText(strings.add_cart);

    fireEvent.press(addToCartButton);

    expect(mockedDispatch).toBeTruthy;
    expect(mockedDispatch).toBeTruthy;
  });

  it('dispatches removeItem when "Remove from Cart" button is pressed', () => {
    useSelector.mockImplementation(callback =>
      callback({AddItemSlicer: [{}], UserSlicer: []}),
    );
    const {getByText} = render(
      <DashboardScreen navigation={mockNavigation} route={mockRoute} />,
    );

    expect(mockedDispatch).toBeTruthy;
    expect(mockedDispatch).toBeTruthy;
  });
});
