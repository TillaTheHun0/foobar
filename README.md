# foobar

## Hook Based MUI Wrapper Concept

https://github.com/wcatron/foobar2

Concepts:
- Simple key/value content store.
- Identify content by the current `path`, `contentType` and `contentId`. The path is just stripped from the URL, `contentType` is specified by the component and the `contentId` is specified by the container component that is using the authorable component. (Not thrilled with how much goes into this, especially when you start considering versioning the contentType.)
- `AuthoringContext` and `ContentStoreContext` are the only 'MUI' specific code in the demo, currently mocked with a basic store.
- `useContent` hook that takes a default if the content doesn't exist.
- A *seperate* `useContentEditor` hook which is used to determine if the user is an authoring context and store the content (based on path, contentType, and contentId).
- Nested authorable components [MultiTab](https://github.com/wcatron/foobar2/blob/master/src/components/MultiTab.tsx).
- JSON objects as content structures.
- [AuthorableArea](https://github.com/wcatron/foobar2/blob/master/src/AuthorableArea.tsx) component with the ability to specify a custom editor.
- Supports inline editing by the component using `useContentEditor` directly instead of wrapping the component in `AuthorableArea`. (`AuthorableArea` could also have an `inline` flag.)
