MHS Links
========

A collection of links for Melbourne High School.

## Contributing

Contributing to MHS Links is easy. Here is an example page:

```
---
layout: links-page
title: An example page
sections:
    - body:
        - name: "A link"
        url: https://google.com
        size: 1-1
        colour: blue

        - text: "This is a link to google.com."
    - type: small

        body:
            - text: "I'm small and irrelevant, just like the IT Executive :("
---
```

You can easily specify your own sections in the `sections` sequence, and each item in a section can be either a button or text.

To make your own page, create a folder and add a file called `index.html` with a layout similar to the example above.

### Types

You can have a `small` section, a `narrow` section, or a `standard` section (this is the default; you don't have to specify it)
