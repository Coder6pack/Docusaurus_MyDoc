## Markdown Heading

# markdown text with [Links](/hello.md)

let see how to [Create a page](./tutorial-basics/create-a-page.md)

## Logo

![Docusaurus logo](/img/docusaurus.png)
![Docusaurus logo](../static/img/docusaurus.png)

## Code block

```tsx title="./src/components/HomepageFeatures/index.tsx"
function HomepageFeatures() {
  return <h1>Hello world</h1>;
}
```

## Admonitions

:::tip[My tip]
Use this awesome feature option
:::

:::danger[take care]
This action is dangerous
:::

## MDX and React Components

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
onClick={() => {
alert(`You clicked the color ${color} with label ${children}`)
}}>
{children}
</span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
