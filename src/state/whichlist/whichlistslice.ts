import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    participants: [],
    size: 0,
};

export const participantSlice = createSlice({
    name: 'participant',
    initialState,
    reducers: {
        addToparticipant: (state, action) => {
            const participantToAdd = action.payload;
            if (!state.participants.some(p => p === participantToAdd)) {
                state.participants.push(participantToAdd);
                state.size++;
            }
        },
    },
});

export const { addToparticipant } = participantSlice.actions;

export default participantSlice.reducer;