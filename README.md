Tasks Completed:

Created a component that receives a single product object as a prop.
Displayed the product’s name, price (formatted to two decimal places with toFixed(2)), and description.
Styled each product item with a border, padding, white background, shadow, and a hover effect to visually differentiate them.
How It Works
State Management: The App component uses the useState hook to initialize and manage an array of products. Since no event handling is required, setProducts is not used, but the state provides a dynamic data source.
Props: The products array is passed from App to ProductList, and individual product objects are passed from ProductList to ProductItem, demonstrating hierarchical data flow.
Components: The app is modular, with responsibilities split across App (state and structure), ProductList (list rendering), and ProductItem (individual product display).
Styling: Custom CSS modules ensure scoped styles. The layout uses flexbox for responsiveness, and product items have distinct visual features like shadows and hover effects.
