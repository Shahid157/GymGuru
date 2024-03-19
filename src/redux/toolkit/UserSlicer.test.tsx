import userReducer, {addUser, clearUser} from './UserSlicer';

describe('userSlice Reducers', () => {
  it('should handle addUser', () => {
    const initialState: any = [];
    const userToAdd: object = {id: 1, name: 'John Doe'};

    const newState = userReducer(initialState, addUser(userToAdd));

    expect(newState).toEqual(userToAdd);
  });

  it('should handle clearUser', () => {
    const initialState: object = {id: 1, name: 'John Doe'};

    const newState = userReducer(initialState, clearUser());

    expect(newState).toEqual([]); // Assuming you clear the user to null
  });

  it('should not modify state on clearUser if already empty', () => {
    const initialState: any = [];

    const newState = userReducer(initialState, clearUser());

    expect(newState).toEqual(initialState); // State should remain unchanged
  });
});
