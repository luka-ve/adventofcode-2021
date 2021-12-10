# Approach

For this puzzle I figured that keeping track of an array of fish would be extremely inefficient. However, the internal timers of fish don't need to be simulated for each fish. Since each fish behaves the same, depending on their internal timer, I could simply keep track of the *number of fish* for each timer value.


The `fishNumbers` array can be thought of as a series of buckets with fish in each. Every day, I move all fish one bucket down the line. At the end of the day, all fish in bucket `0` go into bucket `6` and I add the same number of fish to bucket `8`. This approach works equally well for part 2, in which `256` days of fish propagation needed to be simulated.