---
title: "IPv4 Address Regex Tutorial"
date: 2023-11-17T10:23:13-06:00
draft: false
---

# IPV4 Address Regex Explanation/Tutorial

There are applications that gets input from the user prompting for an IP address such as `192.168.1.255`. However, if the user inputs an incorrectly formatted IP address, then the application can crash if it tries to connect to a boggus address. Using this regex, it will verify if the inputted IP address is formatted correctly.

## Summary

This is the regex:

{{<code-window language="c++">}}^(?:[0-9]{1,3}\.){3}[0-9]{1,3}${{</code-window>}}

An IP address such as `192.168.1.34` has four groups of numbers ranging from 0 to 999. Each of them are separated with a dot `.`. We will go over groups, quantifiers, and character ranges that are used for this regex along with smaller details such as the character escape.

## Table of Contents

- [Beginning of String Check](#beginning-of-string-check)
- [Non Captured Group](#non-captured-group)
- [Character Set](#character-set)
- [Character Range](#character-range)
- [Quantifier](#quantifier)
- [Escaped Character](#escaped-character)
- [End of String Check](#end-of-string-check)

## Regex Components

### Beginning of String Check
The `^` (caret) character goes at the beginning of the expression indicating the a match should occur only at the beginning of the string. It may also indicate a match at the beginning of a line of a multi-line string, yet this only works if the `m` (multiline) flag is present.

### Non Captured Group
Anything in parenthesis `()` is a group of characters (substring) to match to. This allows you to quantify them or reference them later. However, the `?:` symbol at the start of the group indicates that the group will not be referenced when performing post operations with regex such as when replacing, and this is why it's called __non capturing__.

### Character Set
Anything in square brackets `[]` defines a list of characters that it can be matched to. For example, a set like `[wasd]` will match a character equal to `w`, `a`, `s`, or `d`. A misconception of the character set is that, for example, a set like `[wasd]` will match a substring equal to `wasd`, yet that is not true because it can only match one character at a time.

#### Character range
Useful inside character sets is the character range specifier. As it implies, you can define a range of characters to match to, so you can, for example, match any lower case letter by writing `[a-z]`. The order of those characters follows the [ASCII table](https://www.asciitable.com/).

### Quantifier
Curly braces (`{}`) sets a rule to the previous character or substring on the quantity of it to be expected. A quantifier like `{3}` enforeces a count of characters before it to 3, and specifying a range is allowed by writing it as `{<minimum>-<maximum>}`. On our example, the quantifier `{1-3}` ensures a number to have a minimum of 1 digit to a maximum of 3 digits.

### Escaped Character
When writing a regex, there are some reserved characters that define rules and patterns such as `()`, but you need to write that character literally so that it can be used to match in a string. The blackslash `\` escapes that character so that the interperter does not read it as a symbol but rather a literal char. In this case, `\.` escapes the `.` character that is normally used as a wildcard symbol, but now it is read as just a dot (`.`).

### End of String Check
The dollar sign `$` rules that the match's end should also be the string's or line's end. If there are characters or whitespace after the match (besides `new line`), it will disqualify it because it ends with it proceeding it.