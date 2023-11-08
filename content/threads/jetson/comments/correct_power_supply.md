---
title: "Correct Power Supply"
date: 2023-11-07T18:00:01-06:00
draft: true
---

I got to mention that I tried powering the the board using the TV's USB power. However, that caused it to throttle badly, and it displays a warning everytime that happens.

Luckily, I had a microUSB power supply that came with Rapaberry PI Zero package back when I purchased a few months ago.

Sure enough, using this power supply to power the board allowed it to use full power and to not be throttled. This is because it is capable of delivering 2A at 5V which is was the board requires. Now I am able to use this board with no throttling issues.