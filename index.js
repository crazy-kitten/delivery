const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay')
    const cartButton = document.querySelector('#cart-button');

    const openModal = () => {
        modal.classList.add('open');
    }

    const closeModal = () => {
        modal.classList.remove('open')
    }
    cartButton.addEventListener('click', () => {
        openModal()
    })

    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-modal__overlay') || event.target.closest('.cart-modal__header--close')) {
            closeModal()
        }
    })
}

const restsFunc = () => {
    const container = document.querySelector('#rests-container');
    const restArray = [{
        id: 0, title: 'Пицца плюс', time: 50, rating: 4.5, price: 900, type: 'пицца', image: 'image.jpg'
    }, {
        id: 1, title: 'Тануки', time: 50, rating: 4.5, price: 900, type: 'пицца', image: 'image%20(1).jpg'
    }, {
        id: 2, title: 'FoodBand', time: 50, rating: 4.5, price: 900, type: 'пицца', image: 'image%20(2).jpg'
    }, {
        id: 3, title: 'Жадина-пицца', time: 50, rating: 4.5, price: 900, type: 'пицца', image: 'image%20(3).jpg'
    }, {
        id: 4, title: 'Точка еды', time: 50, rating: 4.5, price: 900, type: 'пицца', image: 'image%20(4).jpg'
    }, {
        id: 5, title: 'PizzaBurger', time: 50, rating: 4.5, price: 900, type: 'пицца', image: 'image%20(5).jpg'
    }]
    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка</p>'
    }
    const renderRests = (rests) => {
        container.innerHTML = ''
        rests.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
            <a href="./goods.html?id=${card.id}" class="products-card">
                        <div class="products-cars__image">
                            <img src="./images/rests/${card.image}" alt="rest-1">
                        </div>
                        <div class="products-card__descriptions">
                            <div class="products-card__descriptions-row">
                                <h4 class="products-card__descriptions--title">${card.title}</h4>
                                <div class="products-card__descriptions--badge"> ${card.time} min</div>
                            </div>
                            <div class="products-card__descriptions-row">
                                <div class="products-card__descriptions-info">
                                    <div class="products-card__descriptions-info--raiting">
                                        <img src="./images/icons/star.svg" alt="star">
                                        ${card.rating}
                                    </div>
                                    <div class="products-card__descriptions-info--price">
                                        От ${card.price} Р
                                    </div>
                                    <div class="products-card__descriptions-info--group">
                                        ${card.type}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
            `)
        })
    }
    if (container) {
        loading()
        setTimeout(() => {
            renderRests(restArray)
        }, 2000)
    }

}

modalFunc()
restsFunc()

