import React, {Component} from 'react'

import Navbar from "../Navbar"
import Footer from '../Footer'

import Promo from "../Promo"

export default class ShopProductCard extends Component{

	renderBadge(){
		if(this.product.is_new === true){
			return (
				<div class="badge badge-white card-badge card-badge-left text-uppercase">
					New
				</div>
			)
		}else if(this.product.is_sale === true){
			return (
				<div class="badge badge-dark card-badge card-badge-left text-uppercase">
					Sale
				</div>
			)
		}else{
			return "";
		}
	}

	renderImages(){
		if(this.product.pictures.length === 1){
			return (
				<a class="card-img-hover" href="product.html">
					<img class="card-img-top card-img-front" src={"assets/img/products/"+this.product.pictures[0]}/>
				</a>
			)
		}else if(this.product.pictures.length === 2){
			return (
				<a class="card-img-hover" href="product.html">
					<img class="card-img-top card-img-back" src={"assets/img/products/"+this.product.pictures[1]}/>
					<img class="card-img-top card-img-front" src={"assets/img/products/"+this.product.pictures[0]}/>
				</a>
			)
		}else{
			return "";
		}
	}

	renderPrices(){
		if(this.product.price != null){
			if(this.product.old_price != null){
				return (
					<div class="font-weight-bold">
						<span class="font-size-xs text-gray-350 text-decoration-line-through">${this.product.old_price.toFixed(2)}</span>
						<span class="text-primary">${this.product.price.toFixed(2)}</span>
					</div>
				)
			}else{
				return (
					<div class="font-weight-bold text-muted">
						${this.product.price.toFixed(2)}
					</div>
				)
			}
		}
		return "";
	}

	getType(){
		const SHOES = 1;
		const DRESSES = 2;
		const TOPS = 3;
		const BAGS = 4;
		const SHIRTS = 5;
		if(this.product.type === SHOES) return "Shoes";
		else if(this.product.type === DRESSES) return "Dresses";
		else if(this.product.type === TOPS) return "Tops";
		else if(this.product.type === BAGS) return "Bags";
		else if(this.product.type === SHIRTS) return "Shirts";
		else return "";
	}

  render(){
		let product = this.props.product
		this.product = product;
    return (
			<div class="col-6 col-md-4">
				{/* <!-- Card --> */}
				<div class="card mb-7">

					{/* <!-- Badge --> */}
					{this.renderBadge()}

					{/* <!-- Image --> */}
					<div class="card-img">

						{/* <!-- Image --> */}
						{this.renderImages()}

						{/* <!-- Actions --> */}
						<div class="card-actions">
							<span class="card-action">
								<button class="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
									<i class="fe fe-eye"></i>
								</button>
							</span>
							<span class="card-action">
								<button class="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
									<i class="fe fe-shopping-cart"></i>
								</button>
							</span>
							<span class="card-action">
								<button class="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
									<i class="fe fe-heart"></i>
								</button>
							</span>
						</div>

					</div>

					{/* <!-- Body --> */}
					<div class="card-body px-0">

						{/* <!-- Category --> */}
						<div class="font-size-xs">
							<a class="text-muted" href="shop.html">{this.getType()}</a>
						</div>

						{/* <!-- Title --> */}
						<div class="font-weight-bold">
							<a class="text-body" href="product.html">
								{this.product.name}
							</a>
						</div>

						{/* <!-- Price --> */}
						{this.renderPrices()}

					</div>

				</div>

			</div>
    )
  }
}