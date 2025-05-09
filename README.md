# Simple React Demo

### UI/UX Improvement Notes

- Definitely a lot of improvements here, this is just intended as a simple demo within the given timeframe.
- Aside from layouting, we can for example have a think on integrating multiple capabilities filters.
- Another interesting filter is through clicking the capability's tags -> automatically filter the agents.
- I also see that we can design a better card (for examnple, segmentize better for both the name, metrics, and capabilities tagging).
- Additional buttons to learn more about the details (and possibly redirect to a page where the users can subscribe to the agent).
- And lots more!

### Code Excellence

- From technical perspective, the codes are still dirty.
- Each props should have a specific interface definition, as demonstrated on `AIAgentsList.tsx`.
- Using `useDebounce` for the search state for a better stress management.
- Handling the extended version of the types -> ideally backend should be the one aggregating this, and the type definition could just help in identifying possible objects within the list of data.
- Applying some memoizations.
- And lots more!

### Prompting

- Please find the image [here](www.photopea.com/#iwBo7mKPf).
