import addItemReducer, {addItem, removeItem} from './AddItemSlicer';

describe('addItemSlice Reducers', () => {
  it('should handle addItem', () => {
    const initialState: any = [];
    const newItem = {id: 1, name: 'Item 1'};

    const newState = addItemReducer(initialState, addItem(newItem));

    expect(newState).toEqual([newItem]);
  });

  it('should handle removeItem', () => {
    const initialState: any = [
      {id: 1, name: 'Item 1'},
      {id: 2, name: 'Item 2'},
      {id: 3, name: 'Item 3'},
    ];
    const indexToRemove: number = 1;

    const newState = addItemReducer(initialState, removeItem(indexToRemove));

    expect(newState).toEqual([
      {id: 1, name: 'Item 1'},
      {id: 3, name: 'Item 3'},
    ]);
  });

  it('should not modify state on removeItem if index is out of bounds', () => {
    const initialState: any = [
      {id: 1, name: 'Item 1'},
      {id: 2, name: 'Item 2'},
    ];
    const invalidIndex = 10; // Index that is out of bounds

    const newState = addItemReducer(initialState, removeItem(invalidIndex));

    expect(newState).toEqual(initialState); // State should remain unchanged
  });
});
