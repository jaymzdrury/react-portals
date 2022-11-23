## React Portals

<img src="https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="React" width="350" />

`index.html`

```JavaScript
    <div id="root"></div>
    //add portal here
    <div id="portal"></div>
```

`Portal.tsx`

```JavaScript
    const root = document.getElementById('portal')
```