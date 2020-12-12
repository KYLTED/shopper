import React, {Component} from 'react'

import Product from '../../app/models/Product'

interface IShopProductCard{
	product?: Product
}

export default class ShopProductCard extends Component<IShopProductCard>{
	product?: Product;

	renderBadge(){
		if(this.product != null){
			if(this.product.is_new === true){
				return (
					<div className="badge badge-white card-badge card-badge-left text-uppercase">
						New
					</div>
				)
			}else if(this.product.is_sale === true){
				return (
					<div className="badge badge-dark card-badge card-badge-left text-uppercase">
						Sale
					</div>
				)
			}
		}
		return "";
	}

	renderImages(){
		if(this.product != null){
			if(this.product.pictures.length === 1){
				return (
					<a className="card-img" href={"/product/"+this.product.id}>
						<img className="card-img-top card-img-front" src={"/assets/img/products/"+this.product.pictures[0]}/>
					</a>
				)
			}else if(this.product.pictures.length >= 2){
				return (
					<a className="card-img-hover" href={"/product/"+this.product.id}>
						<img className="card-img-top card-img-back" src={"/assets/img/products/"+this.product.pictures[0]}/>
						<img className="card-img-top card-img-front" src={"/assets/img/products/"+this.product.pictures[1]}/>
					</a>
				)
			}
		}
		return "";
	}

	renderPrices(){
		if(this.product != null){
			if(this.product.price != null){
				if(this.product.old_price != null){
					return (
						<div className="font-weight-bold">
							<span className="font-size-xs text-gray-350 text-decoration-line-through">${this.product.old_price.toFixed(2)}</span>
							<span className="text-primary">${this.product.price.toFixed(2)}</span>
						</div>
					)
				}else{
					return (
						<div className="font-weight-bold text-muted">
							${this.product.price.toFixed(2)}
						</div>
					)
				}
			}
		}
		return "";
	}

	getType(){
		if(this.product != null){
			if(this.product.type === Product.SHOES) return "Shoes";
			else if(this.product.type === Product.DRESSES) return "Dresses";
			else if(this.product.type === Product.TOPS) return "Tops";
			else if(this.product.type === Product.BAGS) return "Bags";
			else if(this.product.type === Product.SHIRTS) return "Shirts";
		}
		return "";
	}

	constructor(props: {product: Product}){
		super(props);
		this.product = props.product;
	}

  render(){
		if(this.product != null){
			return (
				<div className="card mb-7">

					{/* <!-- Badge --> */}
					{this.renderBadge()}

					{/* <!-- Image --> */}
					<div className="card-img">

						{/* <!-- Image --> */}
						{this.renderImages()}

						{/* <!-- Actions --> */}
						<div className="card-actions">
							<span className="card-action">
								<button className="btn btn-xs btn-circle btn-white-primary" data-toggle="modal" data-target="#modalProduct">
									<i className="fe fe-eye"></i>
								</button>
							</span>
							<span className="card-action">
								<button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
									<i className="fe fe-shopping-bag"></i>
								</button>
							</span>
							<span className="card-action">
								<button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button">
									<i className="fe fe-star"></i>
								</button>
							</span>
						</div>

					</div>

					{/* <!-- Body --> */}
					<div className="card-body px-0">

						{/* <!-- Category --> */}
						<div className="font-size-xs">
							<a className="text-muted" href="shop.html">{this.getType()}</a>
						</div>

						{/* <!-- Title --> */}
						<div className="font-weight-bold">
							<a className="text-body" href="product.html">
								{this.product.name}
							</a>
						</div>

						{/* <!-- Price --> */}
						{this.renderPrices()}

					</div>

				</div>
			)
		}else return "";
  }
}