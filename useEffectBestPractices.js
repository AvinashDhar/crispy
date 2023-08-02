/*
Best Practices for avoiding issues related to useEffect
1. Check for any functions in the dep. array
2. Check for any array or Object in the dep. array
3. Use UseMemo and UseCallback if we need object, array or function to pass in the dep array
4. Check for race around condition (where the useEffect takes longer time to run and next cycle of useEffect starts 
    running before the previous finishes it's execution)
5. Always use dep. array
6. Always pass values to the dep. array which are getting used inside the UseEffect
7. Beware of depending values that we set inside the useEffect body.
8. Avoid using UseEffect
*/