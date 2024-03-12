export const Highlight = ({children, color}) => (
<span
className = 'text-red-500' >
{children}
</span>
);

<Highlight >Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!
[Footer](hello)
