        // Функция для добавления товара в корзину
        
        function addToCart() {
            const product = {
                name: "iPhone 16 Pro Max",
                price: 150000
            };
            
            // Получаем текущую корзину из localStorage, если она есть
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Добавляем товар в корзину
            cart.push(product);

            // Сохраняем обновленную корзину в localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            alert("Товар добавлен в корзину!");
        }

        // Функция для перехода в корзину
        function goToCart() {
            window.location.href = "cart.html";  // Перенаправление на страницу корзины
        }