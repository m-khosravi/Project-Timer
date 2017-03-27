import moment from 'moment';

import * as actions from '../src/js/actions'

/** Test Actions */
describe('actions', () => {

    /** TIMER_ADD */
    it('should create an action to add a timer', () => {
        let id = moment.now();
        const timer = {
            id,
            title: 'New title',
            createdTime: id,
            started: false,
            duration: 0,
            plannedTime: '00:00:00',
        };

        const expectedAction = {
            type: 'TIMER_ADD',
            payload: timer
        };

        expect(actions.addTimer(timer)).toEqual(expectedAction);
    });

    /** TIMER_DESTROY */
    it('should create an action to destroy a timer', () => {
        let id = moment.now();

        const expectedAction = {
            type: 'TIMER_DESTROY',
            payload: id
        };

        expect(actions.destroyTimer(id)).toEqual(expectedAction);
    });

    /** TIMER_START */
    it('should create an action to start a timer', () => {
        let id = moment.now();

        const expectedAction = {
            type: 'TIMER_START',
            payload: id
        };

        expect(actions.startTimer(id)).toEqual(expectedAction);
    });

    /** TIMER_STOP */
    it('should create an action to stop a timer', () => {
        let id = moment.now();

        const expectedAction = {
            type: 'TIMER_STOP',
            payload: id
        };

        expect(actions.stopTimer(id)).toEqual(expectedAction);
    });

    /** TIMER_TOGGLE */
    it('should create an action to toggle a timer', () => {
        let id = moment.now();

        const expectedAction = {
            type: 'TIMER_TOGGLE',
            payload: id
        };

        expect(actions.toggleTimer(id)).toEqual(expectedAction);
    });

    /** TIMER_TITLE_CHANGE_OFF */
    it('should create an action to change a timer\'s title on', () => {
        let id = moment.now();

        const expectedAction = {
            type: 'TIMER_TITLE_CHANGE_ON',
            payload: id
        };

        expect(actions.toggleTitleChangeOn(id)).toEqual(expectedAction);
    });

    /** TIMER_TITLE_CHANGE_OFF */
    it('should create an action to change a timer\'s title off', () => {
        let id = moment.now();

        const expectedAction = {
            type: 'TIMER_TITLE_CHANGE_OFF',
            payload: id
        };

        expect(actions.toggleTitleChangeOff(id)).toEqual(expectedAction);
    });

    /** TIMER_TITLE_UPDATE */
    it('should create an action to update a timer\'s title', () => {
        let id = moment.now();
        let title = 'Timer title';

        const expectedAction = {
            type: 'TIMER_TITLE_UPDATE',
            payload: {id, title}
        };

        expect(actions.updateTitle(id, title)).toEqual(expectedAction);
    });

    /** TIMER_DURATION_ON */
    it('should create an action to update a timer\'s duration input on', () => {
      let id = moment.now();

      const expectedAction = {
          type: 'TIMER_DURATION_ON',
          payload: {id}
      };

      expect(actions.toggleDurationInputOn(id)).toEqual(expectedAction);
    });

    /** TIMER_DURATION_OFF */
    it('should create an action to update a timer\'s duration input off', () => {
      let id = moment.now();

      const expectedAction = {
          type: 'TIMER_DURATION_OFF',
          payload: {id}
      };

      expect(actions.toggleDurationInputOff(id)).toEqual(expectedAction);
    });

    /** TIMER_DURATION_UPDATE */
    it('should create an action to update a timer\'s duration', () => {
      let id = moment.now();
      let timeStr = '2:37:33';

      const expectedAction = {
          type: 'TIMER_DURATION_UPDATE',
          payload: {id, timeStr}
      };

      expect(actions.updateTimeDuration(id, timeStr)).toEqual(expectedAction);
    });

    /** TIMER_PLANNED_ON */
    it('should create an action to update a timer\'s planned input on', () => {
      let id = moment.now();

      const expectedAction = {
          type: 'TIMER_PLANNED_ON',
          payload: {id}
      };

      expect(actions.togglePlannedInputOn(id)).toEqual(expectedAction);
    });

    /** TIMER_PLANNED_OFF */
    it('should create an action to update a timer\'s planned input off', () => {
      let id = moment.now();

      const expectedAction = {
          type: 'TIMER_PLANNED_OFF',
          payload: {id}
      };

      expect(actions.togglePlannedInputOff(id)).toEqual(expectedAction);
    });

    /** TIMER_PLANNED_UPDATE */
    it('should create an action to update a timer\'s planned time', () => {
      let id = moment.now();
      let timeStr = '2:37:33';

      const expectedAction = {
          type: 'TIMER_PLANNED_UPDATE',
          payload: {id, timeStr}
      };

      expect(actions.updateTimePlanned(id, timeStr)).toEqual(expectedAction);
    });

    it('should create an action to reset the timer', () => {
        let id = moment.now();

        const expectedAction = {
            type: 'TIMER_RESET',
            payload: id
        };

        expect(actions.resetTimer(id)).toEqual(expectedAction);
    });
});
