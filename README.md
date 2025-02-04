Contents

- Overview
- UX
- Tools Used
- Testing
- Deployment
- Credits
- Acknowledgments

# Overview
Hunter Gatherer is an innovative and dynamic platform designed specifically to empower consumers in their purchasing decisions. By placing nearly all the decision-making power directly into the hands of users, Hunter Gatherer transforms the shopping experience into one that is both engaging and informative.

With its user-friendly interface, individuals can effortlessly compare a selection of products side by side. Upon launch the site will compare products of one commodity, with the onward capability of expanding to a range of different products. This feature allows users to scrutinize every detail, from specifications and features to pricing and rating, based on customer reviews. By providing comprehensive insights and comparisons, Hunter Gatherer ensures that consumers have all the information they need at their fingertips.

In a world where choices can often be overwhelming, Hunter Gatherer stands out as a reliable ally for consumers, enabling them to take control of their shopping experience. By fostering transparency and accessibility, the platform empowers individuals to make decisions that are right for them, ensuring satisfaction with every purchase. Ultimately, Hunter Gatherer is not just a comparison tool; it is a catalyst for informed consumerism, promoting smarter shopping habits and enhancing overall consumer confidence.

# User Experience Design
## Strategy
From the beginning, I knew it was crucial to outline the strategic objectives of the project. The primary aim was to ensure that the site’s mission resonated with the needs of its intended audience. It became evident that my approach would need to encompass two essential elements, including: 
- Pinpointing the target audience (Such as budget-conscious shoppers).

- Grasping user aspirations (such as securing the best price, and reading customer reviews).

Through thorough research, I was able to craft a clear vision that steered the project, guaranteeing that each feature developed met user expectations. Below is a table showcasing user stories along with the criteria that ultimately shaped the project’s development.

### User Stories

<details>
<summary>General</summary>

| Title | Story | Acceptance Criteria |
| ----------- | ----------- | ----------- |
| Navigation Links | As a First Time user, I want to be able to easily navigate through the app, so that I can find relevant content. | AC1:Users can navigate between site pages, with use of the navbar links.<br><br>AC2:Navigation links change colour when the user hovers over them.<br><br>AC3:A link is highlighted in a different colour to indicate the active/current (pressed) link. |
| UX Design | As a site user I desire an enjoyable design so that I am motivated to revisit the website. | AC1:Design a visually appealing and user friendly interface that keeps the focus on the main content without causing distractions. |
| Informative Text | As a site user I would like the app to provide guidance so that my web experience is unambiguous. | AC1:Informative/ instructional feedback is displayed to the user, upon form submission when handling errors. |
| Responsive Components | As a user, I want to access the app on both mobile and desktop devices so that I can compare products anytime and anywhere. | AC1:Components shrink & grow accordingly, depending on the screen size. |
| Page Not Found | As an Admin, I want to present the user with a 404 page upon a non-existent URL being entered, so that they know there’s an issue. | AC1:The 404 page is clear in explaining the issue.<br><br>AC2:The 404 page contain a friendly message and a link back to the home page. |
| Commented Code | As a developer, I want to comment my code so that it is easier for other developers to understand and maintain. | AC1:Primary functions and important block of logic should have a clear comment explaining what it does. |
| Manual Testing | As a site developer, I need to perform test to ensure the sites code is robust. | AC1:Test site functionality under various use cases.<br><br>AC2:Evidence test findings within README. |
| Final Deployment | As a site developer, I need to do a final deployment to Heroku to bring the site online. | AC1:Within Hunter Gatherer setting, DEBUG is set to False in preparation the for final deployment.<br><br>AC2:Hunter Gatherer has been deployed to Heroku. |
| Create README | As a developer, I need to create a README file to guide users and fellow developers of the site. | AC1:Detail the planning process of the site.<br><br>AC2:Detail each feature, and describe their purpose.<br><br>AC3:Detail any issues had when developing the site.<br><br>AC4:Document the source of any support received with the project development. |
</details>

<details>
<summary>Accounts/Profiles</summary>
 
| Title | Story | Acceptance Criteria |
| ----------- | ----------- | ----------- |
| Account Creation | As a First Time user, I want to be able to register for an account, so that I can interact fully with the site. | AC1:Given a username and password, users can register for an account.<br><br>AC2:Given a username and password, users can then log-in to their account. |
| Password Reset | As a user I can reset my password in case I have forgotten my password. | AC1:A “Forgot Password” link is visible on the login page.<br><br>AC2:When the user clicks the "Forgot Password" link, they are directed to a password reset page where they are asked to enter their registered email address to initiate the password reset process.<br><br>AC3:If the email address is valid, the user receives a password reset email containing a link to reset the password. |
| Logged In User | As a user I can tell if I am logged in or not so that I can log in if I need to. | AC1:When logged-in, current user's username is displayed in the navbar. | 
| Access Tokens | As a user I can maintain my logged-in status until I choose to log out so that my user experience is seamless. | AC1:Access tokens are automatically refreshed before sending requests to the API. |
| Profile Image Upload | As a site user I would like to be able to upload a profile picture, so that my reviews are better distinguished. | AC1:Users can upload an image to be displayed on their profile page.<br><br>AC2:User profile images will be displayed on all of their reviews. |
| Credential Update | As a logged in user I can update my username and password so that I can change my display name and keep my profile secure. | AC1:Users can change their username, within their profile.<br><br>AC2:Users can change their password, within their profile. |
</details>

<details>
<summary>Reviews</summary>
 
| Title | Story | Acceptance Criteria |
| ----------- | ----------- | ----------- |
| Leave A Review | As a logged in user I can add a review to a product so that I can share my thoughts about the product. | AC1:A"Write a Review" button is displayed on the product detail page for logged-in users.<br><br>AC2:When the "Write a Review" button is clicked, the user is presented with a form to submit their review.<br><br>AC3:The review form includes fields for a rating (e.g., 1 to 5 stars), a text area for a written review. |
| Edit/ Delete Review | As a site user I want to be able to modify or delete my reviews to keep reviews relevant. | AC1:A "Edit" button is displayed next to the user’s own review on the product page.<br><br>AC2:Clicking the "Edit" button opens the review form pre-populated with the existing review content.<br><br>AC3:Users can then amend their review, and submit the form to save the changes. |
| Product Reviews | As a user I can view the product detail page so that I can read the reviews about the product. | AC1:Upon clicking on a product card, users are taken to a detailed view of said product.<br><br>AC2:Product reviews are displayed underneath the product details. |
| Fair Representation | As a site admin, I would like to limit users to one review per product, to avoid rating distortion. | AC1:The ‘Leave a review’ button with only be shown to signed in users, than haven’t yet submitted a review for a given product. |
</details>

<details>
<summary>Products</summary>
 
| Title | Story | Acceptance Criteria |
| ----------- | ----------- | ----------- |
| Call To Action | As a first-time user, I want my journey through the site to be clear immediately, so I can quickly begin comparing products. | AC1:The home page clearly displays categories for the use to select.<br><br>AC2: Users can click on a category link to be taken to a corresponding product list. |
| Product List | As a First Time user, I want to be able to see the list of products, so that I can start to narrow down my search. | AC1: Products of a given category are listed on screen.<br><br>AC2: Product cards display the product name, rating and price. |
| Comparison Modal | As a user, I want to view detailed specifications for each product in the comparison so that I can easily evaluate their features. | AC1: A check box is displayed on product cards in the product list.<br><br>AC2: Once the check box is selected, the product is added to the comparison list.<br><br>AC3: Products in the comparison list are displayed in a modal. |
| Comparison Modal Reset | As a user, I want to be able to quickly reset or clear my comparison selections so that I can start a new comparison easily. | AC1:A "Clear Comparison" or "Reset Selections" button is visible on the comparison modal.<br><br>AC2: Once the button is pressed, all products will be removed from the modal. |
| Product List Order | As a user, I want to be able to sort comparison results by different metrics to make browsing easier. | AC1: Users can order the product list by rating, price. |
</details>

## Scope
Having solidified the strategy, I shifted my focus to defining the project's scope. This meant outlining the precise features and functionalities that would be included in the initial launch. By prioritizing these features according to user needs and my strategic objectives, I crafted a roadmap that harmonized ambition with practicality. To ensure the delivery of a high-quality minimal viable product, I concentrated on the following key features. 

- Comparison Tables: A layout that allows users to compare various attributes of products side by side (price, features, specifications, rating etc.).

- Product Details Pages: Including high-quality images, detailed specs, and key differentiators.

- User Reviews & Ratings: Important for building trust and aiding in decision-making.

## Structure
With a well-defined scope in place, I shifted my focus to the project's structural design. This blueprint guaranteed that the site's content was systematically arranged, allowing users to swiftly locate what they needed. The framework for this product emphasized several key elements.

- Logical Grouping: Items should be organized into sensible categories (such as laptops, smartphones, and cameras).

- User-Friendly Navigation: An uncomplicated, straightforward top navigation bar.
- Comparison Feature: Users should be able to effortlessly choose multiple products for comparison and clearly discern the differences among them.

## Skeleton
The skeleton plane of the website prioritized its layout and navigation, ensuring that users could seamlessly interact with the content. I took this foundational structure and brought it to life with tangible design elements. This involved creating a clear visual hierarchy, engaging interactive features, and an appealing overall aesthetic. Throughout this process, my aim was to craft an interface that was not only visually attractive but also highly functional, promoting accessibility for every user. This careful attention during the skeleton phase was vital for boosting user engagement and satisfaction. The design of the site includes several essential components.

- Grid Layouts: Clean grids to display products in a visually digestible way.

- Comparison Table Design: A side-by-side comparison that emphasizes key differentiators between products. Use of icons, colours, and visual elements to make it easy to read.

- Responsive Design: Ensuring that the site is easy to use on both mobile devices and desktops, as many users will likely visit from different devices.
Balsamiq was the go-to tool for creating all the wireframes for this project. Below, you can delve into screenshots of the original project design, which has mostly preserved its essence in the final version, with only a few subtle adjustments made to enhance its visual appeal.


## Surface
As the final layer of the five planes of UXD, the surface plane impacts how the site looks and feels to users. The aesthetics play a major role in user perception and engagement. The elements I was sure to consider for the site include the following.

- Brand Consistency: Consistent use of colours, fonts, and logos.

- Visual Hierarchy: Using typography, colour contrast, and spacing to highlight key information, such as product differences and pricing.

- Micro interactions: Small, delightful interactions such as hover effects.

- User-Friendly Icons: Icons that guide users intuitively.

By designing each of these planes with a user centered focus, I could provide an efficient, informative, and visually appealing experience that helps users make confident purchase decisions.

### Features
#### Accounts
Accessing the site is a breeze with our login portal, designed for both security and ease of use for registered members, just input your credentials to kick off your product compressions. If you're new to Hunter Gatherer, getting started is just as simple—fill out a quick form where you’ll select a Username, and provide a strong Password to keep your account safe.
![Account login form](/documentation/hg-images/login%20form.png)
![Account register form](/documentation/hg-images/register%20form.png)


Users can enhance their experience on the site by adjusting the default settings and personalizing profiles to reflect their unique identities. A key feature is the ability to change usernames, allowing individuals to showcase their creativity and personality. This makes their presence more memorable. Additionally, users can upload profile pictures that visually represent them, fostering connections within the community. Choosing an image that reflects their identity or interests helps create a more engaging online persona. 
![User profile page](/documentation/hg-images/profile%20page.png)

#### Navigation
The navigation bar is packed with essential features that enhance the user experience. It offers direct links to crucial sections of the website, making content easily accessible. Crafted with responsiveness in mind, the navbar adjusts effortlessly to various screen sizes, showcasing all links prominently. On smaller devices, it transforms into a drop-down menu for a tidy and organized navigation experience. Moreover, the navbar emphasizes the active page, giving users clear visual indicators of their position within the site.

#### Product comparison modal
The comparison modal is the standout feature of Hunter Gatherer, allowing users to compare products side by side. Shoppers will be able to select which products they would like to display on the modal by toggling the ‘comparison’ icon found within the product cards. Once in the modal, important specs and details will be laid out for easy viewing, leaving no stone unturned. 
![Product comparison modal](/documentation/hg-images/comparison%20modal.png)

#### Comprehensive product view
Upon selecting a product category from the homepage, users will be directed to a curated list of items within that category. Each product card showcases an image of the product, its rating, and the price, along with a timestamp indicating the last update. Moreover, these cards include a 'comparison' button icon, allowing users to easily add or remove products from the comparison modal. By clicking on a product image, users will be taken to an in-depth view of that specific product. 
![Product list](/documentation/hg-images/product%20list.png)
![Product detail view](/documentation/hg-images/product%20detail.png)

#### Product review
User reviews play a crucial role in the decision-making journey, providing authentic insights into products, that enable customers to make informed choices. Because of this, product reviews are displayed directly beneath each product's detailed view. 

A product review creation form can be accessed near to the bottom of the page allowing users to submit their reviews, complete with a rating and a comment. Additionally, users can easily edit their reviews if needed or remove them entirely. An authenticated user is allowed to submit just one review for each product, ensuring each product is given a fair rating.
![Review creation form](/documentation/hg-images/review%20creation%20form.png)
![Review edit form](/documentation/hg-images/review%20edit%20form.png)

### Potential Future Features
#### Comparison Modal Reset
Users will be able to empty the modals contents with a reset button placed inside.

#### Password Reset
Users will be able to reset their account password by following a link sent to their email.

#### Product List Sorting
Users will be able to sort a list of products based on ratings and price.

#### Review Limit
Users will be allowed to submit only one review per product to maintain the integrity of ratings.

### Colour Scheme
The colour scheme utilized in this application combines light, airy, and understated tones, resulting in a fresh and balanced aesthetic. The colours are chosen to evoking a sense of calm and clarity.
![Project colour palette](/documentation/Colour%20Palette.png)

### Typography
When choosing a font for this application, it was vital to prioritize exceptional readability, ensuring that users could easily grasp the text. The selected font had to feature distinct letterforms to prevent any mix-ups between similar characters, such as 'l' and 'I' or '0' and 'O'. Additionally, it required a well-balanced weight and spacing to maintain clarity on both small screens and desktops. The font I ultimately decided on was Roboto by Google as it meets all the criteria previously discussed, making it a perfect fit for this project.
![Project typography](/documentation/Google%20Fonts.png)

# Tools Used
- Balsamiq Wireframes - for creating wireframes & flowcharts

- Git -  for version control and tracking changes

- GitHub - for storing the code

- Gitpod - for developing the project

- Heroku - for deployment of the project

- React Bootstrap 4 - for developing a responsive and mobile first website

- Google Fonts - for providing the fonts

- Coolers – for generating the colour scheme

- Favicon.io - for generating the favicon

- Font Awesome - for adding icons across the site

- Cloudinary - for storing static images

- Am I Responsive? - for generating a screenshot of the project on multiple devices

- Chrome Developer Tools - for testing and debugging the website

- Lighthouse - for accessibility and performance reporting

- Jigsaw - for validating CSS

- PEP8 Validator - for validating the python code

# Testing
 
*Kindly select the dropdown menu to view the testing procedures conducted, along with the corresponding results.*
<details>
<summary>Backend Testing</summary>

| Feature | Testing Procedure | Expected Outcome | Result |
| ----------- | ----------- | ----------- | ----------- |
| Profile List Status Code | Input ‘profiles/’ URL path extension, checking the status code returned on launch. | The object list renders results, with page returning a 200 status code(successful). | Passed |
| Profile List Filters | Click ‘Filters’ button and select filters individually(reviews_made, owner__username). Checked for corresponding effects on object list. | The object list renders results as per filter selected. e.g. selecting ‘reviews_made’ ascending; will display the profiles list in order of those with least reviews made to most. | Passed |
| Profile List Pagination | Populate the profiles list with more than 10 objects to trigger the pagination breakpoint, checking for ‘next’ key value to return a URL, and pagination buttons to appear on screen. | The ‘next’ key value returns a URL directed to the next page in the profile list, and pagination buttons get displayed at the top of the screen linking to a further 10 objects. | Passed |
| Profile Detail Status Code | Input ‘profiles/<pk>’ URL path extension, checking the status code returned on launch. | The object list renders results, with page returning a 200 status code(successful). | Passed |
| Profile Detail Form Authorization | Whilst authenticated, navigate to a different user’s profile, checking to see if the profile edit form renders. | The object renders without the edit form below, due to the profile not being owned by the current user. | Passed |
| Profile Detail Form Authorization | Whilst authenticated, navigate to a my profile, checking to see if the profile edit form renders. | The object renders with the edit form below, due to the profile being owned by the current user. | Passed |
| Profile Detail Form PUT Method | Whilst authenticated, navigate to my profile, ensuring the profile edit form renders. Amend the current object instance values (name, profile_image) and selected PUT. | The object values are updated to reflect those that were present in the form when the PUT method is executed. | Passed |
| Product List Status Code | Input ‘products/’ URL path extension, checking the status code returned on launch. | The object list renders results, with page returning a 200 status code(successful). | Passed |
| Product List Filters | Click ‘Filters’ button and select filters individually(name, price, reviews_count). Checked for corresponding effects on object list. | The object list renders results as per filter selected. e.g. selecting ‘price’ ascending; will display the products list in order of those with lowest price to highest. | Passed |
| Product List Pagination | Populate the products list with more than 10 objects to trigger the pagination breakpoint, checking for ‘next’ key value to return a URL, and pagination buttons to appear on screen. | The ‘next’ key value returns a URL directed to the next page in the profile list, and pagination buttons get displayed at the top of the screen linking to a further 10 objects. | Passed |
| Product Detail Status Code | Input ‘products/<pk>’ URL path extension, checking the status code returned on launch. | The object list renders results, with page returning a 200 status code(successful). | Passed |
| Product Detail Form Authorization | Whilst authenticated, navigate to a product, checking to see if the product edit form renders. | The object renders without an edit form below. | Passed |
| Review List Status Code | Input ‘reviews/’ URL path extension, checking the status code returned on launch. | The object list renders results, with page returning a 200 status code(successful). | Passed |
| Review List Filters | Click ‘Filters’ button and select filters individually(owner__username, rating). Checked for corresponding effects on object list. | The object list renders results as per filter selected. e.g. selecting ‘rating’ ascending; will display the reviews list in order of those with lowest rating to highest. | Passed |
| Reviews List Pagination | Populate the reviews list with more than 10 objects to trigger the pagination breakpoint, checking for ‘next’ key value to return a URL, and pagination buttons to appear on screen. | The ‘next’ key value returns a URL directed to the next page in the profile list, and pagination buttons get displayed at the top of the screen linking to a further 10 objects. | Passed |
| Review Detail Status Code | Input ‘reviews/<pk>’ URL path extension, checking the status code returned on launch. | The object list renders results, with page returning a 200 status code(successful). | Passed |
| Review Detail Form Authorization | Whilst authenticated, navigate to a different user’s review, checking to see if the review edit form renders. | The object renders without the edit form below, due to the review not being owned by the current user. | Passed |
| Review Detail Form Authorization | Whilst authenticated, navigate to a review I own, checking to see if the review edit form renders. | The object renders with the edit form below, due to the review being owned by the current user. | Passed |
| Review Detail Form PUT method | Whilst authenticated, navigate to a review I own, ensuring the review edit form renders. Amend the current object instance values (product, rating) and selected PUT. | The object values are updated to reflect those that were present in the form when the PUT method was executed. | Passed |
| Login | Input login credentials (username, password) into the relevant fields and selected login. Navigate to my profile, checking for the ‘is_owner’ value, and the edit form. | The ‘is_owner’ value returns ‘True’, and the edit form renders below the profile object list. | Passed |
| Logout | Click the drop-down button labelled <username> at the top of the screen, and select logout. Then navigate to my profile, checking for the ‘is_owner’ value, and the edit form. | The ‘is_owner’ value in the profile object returns ‘False’, without the edit form below. | Passed |
</details>

<details>
<summary>Frontend Testing</summary>
 
| Feature | Testing Procedure | Expected Outcome | Result |
| ----------- | ----------- | ----------- | ----------- |
| Account Creation | On the home screen, I navigated to the ‘register’ link found in the nav bar and clicked. Once directed to the account creation page, I input account credentials into the relevant fields and selected register. Once directed to the account creation page, I selected register without inputting data into the fields. | When the ‘register’ link is clicked, the user is directed to the account creation page. On the account creation page, the user inputs relevant credentials and clicks register, they are redirected to the login page to login with their chosen credentials. On the account creation page, if the user clicks register without inputting all required information, relevant informative alerts are displayed detailing the errors. | Passed |
| Account Login | On the login page, I clicked login without inputting any data. On the login page, I input relevant data into the username and password fields, and clicked login. | After clicking login without inputting any credentials, relevant informative alerts are displayed detailing the errors. After inputting relevant credentials and clicking login, the user is directed to the home screen. | Passed |
| Account Logout | As a logged in user, I clicked the log out link. | As a logged in user, the logout link is displayed in the navbar. Upon clicking the logout link, the user should be logged out of their profile and then directed to the home screen. | Passed |
| Navigation Bar Links | As both a logged in and logged out user, I clicked on the navigation links to test if the relevant links were displayed, and whether they led me to the correct destination | As both a logged in and logged out user, different links should appear depending on the users status. The links direct the user to the corresponding page. | Passed |
| Invalid URL | I input a URL extension I know doesn’t exist and clicked enter. | When an invalid URL is entered, the user will be directed to a 404 error page displaying a message, and a link back to the home page. | Passed |
| Product List | As a user on the product list page, I clicked product cards. As a user, I selected two products and compared them using the model before returning to the product list page. | When product cards are clicked, the user is redirected to a product detailed view page. When two products have been compared by the user, the instructional message at the top of the screen is removed. | Passed |
| Product Comparison Modal | As a user on the product list page, I clicked the ‘plus’ icon in the corner of a product card. I clicked another ‘plus’ icon on another card the ‘compare’ button appeared towards the bottom of the screen. I clicked the ‘compare’ button ensuring  | Once the ‘plus’ icon is clicked, it changed into a ‘tick’ icon. Once another ‘plus’ icon is clicked the ‘compare button’ appears towards the bottom of the screen. When the compare button is clicked, the model is displayed, presenting the relevant product details.  | Passed |
| Adding Review | As a logged in user on the product detailed view, I clicked the leave a review button. Without inputting any data, I clicked submit. Checking for alerts. I input data into the relevant fields, and clicked submit. As a logged out user on the product detailed view, I clicked the ‘login to leave a review’ button, where I was directed to the login page. | As a logged in user, once the ‘leave a review’ button is clicked, a review form should be displayed. When submitting a review with one of the fields blank, a relevant alert is displayed. When data is input into the relevant fields and submitted, the form disappears which reveals the users newly submitted review. When trying to leave a review as a logged out user, the user is presented with a ‘login to leave a review’ button. | Passed |
| Editing Reviews | I clicked the three dots found in the corner of a review I created. I selected the ‘pencil’ edit button and amended the values in the edit form, and clicked save. | When the three dots are selected, the ‘pencil’ icon is displayed. When the ‘pencil’ icon is selected, the user can edit their data. When save is selected, the form disappears, displaying the newly updated review.  | Passed |
| Deleting Reviews | I clicked the three dots found in the corner of a review I created. I selected the ‘trash can’ icon. | When the three dots are selected, the ‘trash can’ icon is displayed. When the ‘trash can’ icon is selected, the review is erased from the review list. | Passed |
| Updating Product Rating | On the detailed product view page, I submitted a valid review. | After submitting a valid review, product rating is recalculated displaying the updated rating. | Passed |
| Profile Username Change | On the profile page, I clicked ‘save username’ button without amending the data. On the profile page, I amended the data in the username field and clicked ‘save username’ button. | Once the ‘save username’ button is clicked without amending any information, an informative message is displayed below the field detailing the error. Once the data in the username field is amended and save is clicked, the user is directed back to the previous page and new username is presented in the navbar. | Passed |
| Profile Password Change | On the profile page, I clicked ‘save password’ button without inputting any information. On the profile page, I amended the data in the password fields and clicked ‘save password’ button. | Once the ‘save password’ button is clicked without inputting any information, an informative message is displayed below the fields detailing the error(s). Once the data in the password fields has been amended and save is clicked, the user is directed back back to the previous page, with the updated password saved. | Passed |
| Profile image change | On the profile page, I clicked the ‘save profile picture’ button without selecting a new image. On the profile page, I clicked the ‘choose file’ button and selected my chosen image from my files and then clicked save. | Once the ‘save profile picture’ button was clicked without selecting a new file, no action is taken. Once the ‘save profile picture’ button was clicked after selecting a new image from chosen files, the profile image is updated and the user is directed back to the home screen. The new profile picture is displayed on the user reviews. | Passed |
</details>

## Validation
[Here is a Link](/documentation/api-validation/) to a collection of screenshots that showcase the Hunter Gatherer API Python code. I am pleased to report that the code is free of errors.

## Solved Bugs
| Feature Referenced | Issue | Solution |
| ----------- | ----------- | ----------- |
| API: User Profile Image | Due to the version of Django I was using, the Cloudinary URL for displaying the profile_image within the Profile model wasn’t displaying the correct information, resulting in a 404 Page not found error when clicked. | I solved this issue by downgrading to an earlier version of Django(4.2). |
| API: Product Detail view | Because of the Rest Framework generic view I initially used (ListAPIView) for the product detail view, multiple objects were being displayed instead of the expect one referenced in the URL. | I solved this issue by changing the Rest Framework generic view to RetrieveAPIView. |
| API: Sign In Data | Due to the version of dj-rest-auth I was using,  I was able to login to the frontend app, but the correct data wasn't being sent, resulting in a 401 unauthorized error when using the GET method. | I solved this issue by downgrading to an earlier version of dj-rest-auth(2.1.9). |

## Mobile Devices Used For Testing Responsivity
- iPhone 16 Pro Max
- iPhone 16
- Samsung Galaxy 5
- Samsung Galaxy S24 Ultra
- Samsung Galaxy s24 FE
- Google Pixel 7
- Google Pixel 9 Pro
- Google Pixel 9
- Google Pixel 8a
- OnePlus 12
- OnePlus 12R
- Asus ROG Phone 8 Pro

# Deployment
## Deploy on Heroku
The site was deployed to Heroku using the following steps:
- Navigate to heroku.com and create an account

- Click the "New" button in the top right corner

- Select "Create new app"

- Enter the app name

- Select Region and click "Create app"

- Go to the Settings tab and click "Reveal config vars"

- Add any necessary config vars

- Click the Deploy tab

- Scroll down to Connect to GitHub and sign in / authorize when prompted

- Find the repository you want to deploy and click "Connect"

- Scroll down to Manual deploy and choose the main branch

- Click "Deploy Branch"

- The app should now be deployed and you can click on the "View" button to view the live site

## Fork the repository
Forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

- Navigate to the GitHub Repository you want to fork

- On the top right of the page under the header, click the "Fork" button

- This will create a duplicate of the full project in your GitHub Repository.

## Clone the repository
Navigate to the GitHub Repository you want to clone:

- Click on the "Code" drop down button

- Click on HTTPS

- Copy the repository link to the clipboard

- Open your IDE of choice (git must be installed for the next steps)

- Type git clone copied-git-url into the terminal

- The project will now have been cloned on your local machine for use.

# Credits
## Code
I would like to express my gratitude to the Code Institute walk-through project for offering a robust foundation, that has supported my development with this project. Key components integrated into my own code inspired by the walk-through, include the Navigation Bar, and Login/ Logout pages. I have also gained valuable knowledge from studying the official documentation for both Django and React.

# Acknowledgments
I would like to thank CI Tutor Support, for offering exceptional guidance when facing bugs, both complex and embarrassingly simple. The team's responsiveness and willingness to help have not only resolved technical issues but also enhanced my understanding of the subject. 

Most importantly I would like to acknowledge my partner! The completion of this project would not have been achievable without her unwavering support. Her exceptional patience, and words of encouragement are unparalleled.