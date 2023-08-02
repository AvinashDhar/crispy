/**
 * React Best practices
 * 1. it is very important that we should not call the functional component inside the jsx as a function call, 
 *      rather we should use it by calling it as a component.
 * 2. do not write a nested component inside a component (inside parent component's function),
 *      because this leads to re run of this nested component's code and change of reference after re run for which
 *      this parent component has no idea on what to do and how to react. and this nested component will unmount and then mount
 *      due to its reference change.
 * 3. do not write a nested component even in the parent component's file (outside parent component's function),
 *      as we have props, context to do this and not this way.
 * 4. always use setter for useState
 * 5. Always use dependency array on useEffect, useCallback and useMemo
 * 6. To run useEffect only once, use an empty array in the dependency
 * 7. Don't depend on the data you set
 * 8. Always make sure to have appropriate cleanups in the useEffects (use return block of the useEffect hook to do cleanups)
 * 
 */