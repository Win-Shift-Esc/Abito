const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWapper = document.querySelector('.content-main__list')

const cardArray = [
	{
		id: 0,
		title: 'Первый товар',
		price: '170 ₽',
		address: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
		img: './image/card-img.png'
	},
	{
		id: 1,
		title: 'Второй товар',
		price: '171 ₽',
		address: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
		img: './image/card-img.png'
	},
	{
		id: 2,
		title: 'Третий товар',
		price: '172 ₽',
		address: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
		img: './image/card-img.png'
	},
	{
		id: 3,
		title: 'Четвертый товар',
		price: '173 ₽',
		address: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
		img: './image/card-img.png'
	},
	{
		id: 4,
		title: 'Пятый товар',
		price: '174 ₽',
		address: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
		img: './image/card-img.png'
	},
	{
		id: 5,
		title: 'Шестой товар',
		price: '175 ₽',
		address: 'Казань, р-н Вахитовский',
		date: '10 июля 11:39',
		img: './image/card-img.png'
	}

]

const render = (cardList) => {
	cardWapper.innerHTML = ''
	cardList.forEach((item, idx) => {
		cardWapper.insertAdjacentHTML('beforeend', `
				<a href="/product.html" class="content-main__list-item">
								<div class="content-main__list-item--img">
									<img src="${item.img}" alt="${item.title}">
								</div>
								<h5 class="content-main__list-item--title">
									${item.title}
								</h5>
								<strong class="content-main__list-item--price">
									${item.price}
								</strong>
								<div class="content-main__list-item--box">
									<span class="content-main__list-item--desc">
										${item.address}
									</span>
									<span class="content-main__list-item--desc">
										${item.date}
									</span>
								</div>
							</a>
		`)
	});

}

const filteredArray = (array, value) => {
	console.log(array);
	console.log(value);

	return array.filter((item) => {
		return item.title.includes(value) || item.price.includes(value)
	})
}

cardWapper.style.jusifyContent = 'flex-start'
//cardWapper.style.rowGap = 'normal'
cardWapper.style.gap = '30px'

render(cardArray)

searchBtn.addEventListener('click', () => {
	render(filteredArray(cardArray, searchInput.value))

})                                                                                                                                           