export const addTimer = (timer) => {
    return {
        type: 'TIMER_ADD',
        payload: timer
    };
};

export const destroyTimer = (id) => {
    return {
        type: 'TIMER_DESTROY',
        payload: id
    };
};

export const startTimer = (id) => {
    return {
        type: 'TIMER_START',
        payload: id
    };
};

export const stopTimer = (id) => {
    return {
        type: 'TIMER_STOP',
        payload: id
    };
};

export const toggleTimer = (id) => {
    return {
        type: 'TIMER_TOGGLE',
        payload: id
    };
};

export const updateTimer = (id) => {
    return {
        type: 'TIMER_UPDATE',
        payload: id
    };
};

export const toggleTitleChange = (id) => {
    return {
        type: 'TIMER_TITLE_CHANGE_TOGGLE',
        payload: id
    };
};

export const updateTitle = (id, title) => {
    return {
        type: 'TIMER_TITLE_UPDATE',
        payload: {id, title}
    };
};