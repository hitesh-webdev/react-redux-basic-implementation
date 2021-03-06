/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up

export default function courseReducer(state = [], action) {

    switch(action.type) {

        case 'CREATE_COURSE':
            return [...state,
                Object.assign({}, action.course)
            ];

        default: 
            return state;

    }
    
}