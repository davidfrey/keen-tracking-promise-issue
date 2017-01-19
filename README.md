# Keen Tracking in Javascript Promises

Using a keen-tracking client with promises has caused node process to hang without
returning a status code. This example's use case is a single test (using jest)
that simply resolves true. The jest framework resolves the promise but fails to
exit the process with a status code of 0 as expected.
