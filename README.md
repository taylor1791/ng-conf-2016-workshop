# Isolating and Improving performance in Angular 1 Applications
### Winning SPARS with Angular

```
git clone https://github.com/taylor1791/ng-conf-2016-workshop.git
cd ng-conf-2016-workshop
npm install
npm start
# open 127.0.0.1:8080 # in your browser
```

## Notes
 * Always profile in Incognito or Private Browsing Mode
When profiling an application, chrome extensions can create unnecessary noise
and memory leaks themselves. By reducing the number of external factors, it
allow more consistent results.
 * For more consistent results, it is valuable to record Ajax requests with
a proxy and replay them with the same latency.
 * `console.log` prevents objects from begin garbage collected. Disable or
remove all logging of structured objects to prevent false positives.
 * There are two ways to improve performance. Reduce the digest time and
reduce the number of digests.

## Activities
 * Open the developer tools and learn about the timeline and profile tabs
 * Open the timeline and refresh the page. See how route stabilization timing
compares to the timeline when starting from the DOM Content Loaded.
 * Did you see 3 ajax requests run digests nearly back to back? Can you
squash them with `$httpProvider.useApplyAsync`.
 * Try composing an email. Slow... Try profiling it. Did you see two digests
for every character? Can you remove the second? (hint: read the docs for
`$timeout`)
 * Try clicking the select all button. Unacceptable. Profile it. See the number
of digests is proportional to the number emails? Can you fix that? (hint:
create a new service that will group digests that are called in 25 ms of
each other)
 * How long is that digest? Can we make it faster? (Pretend this was an
expensive realistic watcher)
 * How many polling ajax requests are being made after a few page transitions?
A few? Can you find the cause?
 * A client comes to you and says that they page slows down and toggling
select all and select none a few times. They are running on a really old
netbook. (hint: popover)
 * The client is happy, but says that the problem moved to switching from
the compose to inbox. (hint: compose preview creates scopes)
 * The client says it didn't help. (hint: RestoreDefaultTemplate)
 * Client learned about the advanced search and says it slows down after a
while.

