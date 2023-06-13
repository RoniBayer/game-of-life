import { changeGridState, nextMove } from './game';
import {describe, expect} from '@jest/globals';


describe('App', () => {
    describe('runSimulation', () => {
        const setGridMock = jest.fn();
        const startRefMock = { current: true };

        // it('should return undefiend and not call setGrid if the startRef current is false', () => {
        //     // arrange
        //     const startRefFalseMock = { current: false }
        //     // act
        //     const result = runSimulation(startRefFalseMock, setGridMock)
        //     // assertion
        //     expect(result).toBeUndefined();
        //     expect(setGridMock).not.toHaveBeenCalled();
        // });

        // it('should call setGrid if the startRef current is true', () => {
        //     // act
        //     runSimulation(startRefMock, setGridMock)
        //     // assertion
        //     expect(setGridMock).toHaveBeenCalled();
        // });

        // it('should call setGrid with the function', () => {
        //     // act
        //     runSimulation(startRefMock, setGridMock)
        //     // assertion
        //     expect(setGridMock).toHaveBeenCalledWith(expect.any(Function));
        // });

        describe('changeGridState', () => {
            it('with zero grid should return zero grid', () => {
                // arrange
                const gridMock = [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ];
                // act
                const result = changeGridState(gridMock);
                // assert
                expect(result).toEqual([
                    [0,0,0],
                    [0,0,0],
                    [0,0,0],
                ])
            })

            it('with only 1 grid should return zero grid', () => {
                // arrange
                const gridMock = [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ];
                // act
                const result = changeGridState(gridMock);
                // assert
                expect(result).toEqual([
                    [1,0,1],
                    [0,0,0],
                    [1,0,1],
                ])
            })
        });
    });
})