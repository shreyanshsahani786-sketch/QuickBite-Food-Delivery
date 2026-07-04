# QuickBite

QuickBite is a modern food delivery frontend application built with React and Vite. It provides a responsive food-ordering experience with restaurant browsing, menus, wishlist, cart management, authentication, checkout, and order tracking.

## Features

- Responsive modern UI
- Restaurant listing
- Restaurant details and menus
- Search and filtering
- Wishlist functionality
- Add to Cart
- Increase and decrease item quantity
- Remove and clear cart
- Persistent cart using localStorage
- Login and registration
- User profile
- Checkout flow
- Multiple payment method UI
- Order placement
- Order history
- Toast notifications
- Redux state management
- Client-side routing
- Production-ready Vite build

## Tech Stack

- React.js
- JavaScript
- Vite
- Tailwind CSS
- Redux Toolkit
- React Redux
- React Router DOM
- Axios
- Framer Motion
- React Hot Toast
- React Icons

## Project Structure

src/
├── app/
│   ├── providers/
│   ├── router/
│   └── store/
├── features/
│   ├── auth/
│   ├── cart/
│   ├── checkout/
│   ├── home/
│   ├── orders/
│   ├── profile/
│   ├── restaurants/
│   ├── search/
│   └── wishlist/
└── shared/
    ├── components/
    ├── constants/
    ├── data/
    ├── hooks/
    ├── layouts/
    └── services/

## Installation

Clone the repository:

git clone YOUR_REPOSITORY_URL

Move into the project directory:

cd quickbite

Install dependencies:

npm install

Start the development server:

npm run dev

Create a production build:

npm run build

Run ESLint:

npm run lint

## Current Data Architecture

QuickBite currently uses local JavaScript data and browser localStorage for frontend demonstration purposes.

The Axios service layer is structured so that a backend REST API can be integrated in the future.

## Future Improvements

- Backend REST API
- Database integration
- JWT authentication
- Real payment gateway
- Live order tracking
- Restaurant admin dashboard

## Author

Shreyansh Sahani