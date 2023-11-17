---
title: "Learning Regex"
date: 2023-11-16T02:20:39-06:00
draft: true
---

A quick search on YouTube about regexes showed me a video tutorial of it from the beloved **Web Dev Simplified**! I am viewing this video: [https://www.youtube.com/watch?v=rhzKDrUiJVk](https://www.youtube.com/watch?v=rhzKDrUiJVk)

Also, I noticed on my assignment that I can choose a regex I want to explain, so I am choosing a regex that selects a string that matches an IPV4 IP address such as `192.168.1.255`. Could be useful to determine if what a user enters for the IP address is correctly formatted as such.

A quick Google search lead me to the [O'Reilly](https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html) page that shows the appropriate regex for matching a IPV4 address:

{{<code-window>}}^(?:[0-9]{1,3}\.){3}[0-9]{1,3}${{</code-window>}}

Glady after watching the video, I gained a much better understanding of the basics of regex. So I can proceed to put the regex into the Gist with a short summary.

I went ahead and included a use case for using this regex as the introduction. Then, I will briefly explain how the pattern of an IP address is broken down so that its pieces can be futher explained.

To note, I am using [RegExr](https://regexr.com/) to test the regex and to get detailed explanation for each regex component.