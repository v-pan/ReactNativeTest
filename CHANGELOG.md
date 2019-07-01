# Included description property to `Todo`s

 - `todo.ts` now includes new property `description`
 - `TodoInput` now handles `onTitleChange()` and `onDescriptionChange()`
 - `TodoItem` now renders the passed `todo`'s description
 - `todoStore` now saves and fetches the description of serialised todos
 - Small refactor inside `TodoInput` to facilitate the new value