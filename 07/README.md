# Approach

## Part 1

The solution for part 1 was straight forward. Each crab submarine must go as few steps as possible. This position simply equals the median of crab sumbarine positions. Calculating the absolute difference between each crab's position and the median, then summing the differences gives the puzzle result.

## Part 2

For part 2 I adopted a brute force solution, since the search space was manageable. The search space for the optimal position is bounded by the Min and Max of the crab positions. I loop over all viable positions, keep track of total fuel expenditure and then simply pick the lowest one.