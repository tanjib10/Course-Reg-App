1. Here are three notable features of this project:

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
(a)Course Selection: Users can browse a list of available courses, each displayed as a card with details such as the course title, description, price, and credit hours. Users can select courses by clicking the "Select" button on each card.
(b)Credit Management: The application keeps track of the total credit hours selected by the user. It also displays the remaining credit hours available to the user. If the user exceeds their available credit hours or attempts to select a course they've already selected, the application provides appropriate feedback through toast notifications.
(c)Responsive Design: The user interface is designed to be responsive, supporting various screen sizes. It uses a grid layout to display courses, ensuring that courses adapt to the available screen space, making it suitable for both desktop and mobile devices.
These features provide a basic but functional course selection system with credit management, ensuring that users can select courses within their available credit limit while receiving feedback on their selections.

2. Here is how i managed the state hooks in my project

(a) Course Data (cards) State: The cards state is used to store the data for all available courses. It is initialized as an empty array using useState and later populated with course data fetched from a JSON file using the useEffect hook.
(b) Selected Courses (select) State: The select state is used to store the selected courses. Initially, it's an empty array, and when a user selects a course by clicking the "Select" button, the selected course object is added to this array.
(c) Total Credit and Remaining Credit State: The totalCredit and remainingCredit states are used to keep track of the total credit hours selected by the user and the remaining credit hours available. These values are updated as courses are selected or deselected.
(d) Toast Notifications: The react-toastify library is used to display toast notifications to provide feedback to the user when they attempt to select a course that has already been selected or exceed their available credit hours. Toast notifications are shown using the toast function from the library.
Overall, state management in this project is used to keep track of course data, selected courses, and credit information, providing a responsive and interactive user experience.
