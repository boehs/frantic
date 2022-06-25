# frantic DB

Developer "documentation" for the development of new collectors. Mostly designed to avoid common pitfalls. The most effective way to learn how to develop for the frantic platform is to borrow code from other plugins.

## Terms

### Collector

The backend for a collection. Collectors handle fetching & storing data. *Plugins* may define any number of collectors.

### Plugin

Defines collector(s), *view*(s), and database schemas for storing *collections* of *items*. Typically, the scope of a plugin is of a single platform, however platform is loosely defined. Examples of platforms include

- Twitter, Discord, Instagram
- Articles, Feeds, Photos
- Website\<ApexDomain\>

### Views

In general, there is a many-to-one relationship between collectors and views. This means that there may be multiple collectors presenting content using a single view; however, this is not *always* the case, and developers are free to implement views however they wish.

A view is simply a frontend for a collector, the preview pane on the right. Views should be formatted similarly to how they would appear if you took a screenshot of the original content, but should not implement the functionality buttons on the original page might have. A good example is Twitter.

![Twitter modified to be frantic compliant](../.assets/twitterFrantified.png)

- Buttons that significantly change the flow of the page (heart buttons, etc) have stayed
  - The ... menu has been removed, because it is not useful in this context, does not modify page flow, and hence only serves as clutter
- UI Elements that may be user specific (dependent on who views the page) have also been removed
  - The reply dialog
  - The "AOC has retweeted" at the top
- In general, the page is very obviously twitter, but has been optimized for a good reading experience, holding enough information to make it look like twitter and removing information that won't help in a screenshot context.

The one exception to this rule is background and foreground coloring. We would love to handle that, to keep some part of the frantic UI feeling consistent.

### Collection

An instance of a collector. Tracking a specific user, thread, etc.

### Item

Think about things like

- Comments
- Posts
- Users

You define the items your plugin stores. Collections are simply a group of items. Really though, internally, each item will hold a reference to a collection ID, and then the view selects all the items referencing the given ID.

### Media

Storing large binary data using helper functions

## F&Q

### Q: Should I drop tables for my collector in the `down` function?

Probably **not**! Users might want their data back. In general, deleting stuff is a trash idea, that's why this project exists!

### Q: How do I associate `items` with a collection if the collection table is so rudimentary?

> Really though, internally, each item will hold a reference to a collection id, and then the view selects all the items referencing the given id.

### Q: I need to store more data about a collection then the collection schema allows

Think about why? Could you simply just make another table of items, with a column for referencing a collection?

### Q: What are tags?

A way for users to quickly find collections. Tags are key value and not platform specific. Good examples are:

| Good | Bad |
| ---- | --- |
| `name: angie` | `display-name: angie`: too complex of a key, it's likely other plugins may be using less convoluted vocabulary like `name`|
| `username: angieboo6` | `username: @angieboo6`: The `@` prefix is platform specific. |
| `location: massachusetts` | `location: MA`: Abbreviations are always bad.
| `location: boston, location: massachusetts` | `location: boston, massachusetts`: This string is very complex, and small variations could ruin similarities. You can pair multiple tags with the same key. |
