import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AccountOrdersPage from './components/AccountOrdersPage';
import AccountOrderPage from './components/AccountOrderPage';
import AccountWishListPage from './components/AccountWishListPage';
import AccountPersonalInfoPage from './components/AccountPersonalInfoPage';
import AccountAddressPage from './components/AccountAddressPage';
import AccountPaymentPage from './components/AccountPaymentPage';
import ShopPage from './components/ShopPage';
import ProductPage from './components/ProductPage';
import NotFoundPage from './components/NotFoundPage';

import reportWebVitals from './reportWebVitals';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/shop">
					<ShopPage />
				</Route>
				<Route path="/product/:id">
					<ProductPage />
				</Route>
				<Route path="/404">
					<NotFoundPage />
				</Route>
				{/* Account pages */}
					<Route path="/account-orders">
						<AccountOrdersPage />
					</Route>
					<Route path="/account-order">
						<AccountOrderPage />
					</Route>
					<Route path="/account-wishlist">
						<AccountWishListPage />
					</Route>
					<Route path="/account-personal-info">
						<AccountPersonalInfoPage />
					</Route>
					<Route path="/account-address">
						<AccountAddressPage />
					</Route>
					<Route path="/account-payment">
						<AccountPaymentPage />
					</Route>
				{/* ------ */}
				<Route exact path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(null);