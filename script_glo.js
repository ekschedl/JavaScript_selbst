const selectElement = document.getElementById('carSelect');

// Функция для получения данных об автомобилях
const getCarsData = () => {
    return new Promise((resolve, reject) => {
        fetch('cars.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при получении данных об автомобилях');
                }
                return response.json();
            })
            .then(data => {
                resolve(data.cars);
            })
            .catch(error => {
                reject(error.message);
            });
    });
};

// Функция для отображения информации об автомобиле
const displayCarInfo = (car) => {
    const infoContainer = document.getElementById('carInfo');
    infoContainer.innerHTML = `
        <h2> Тачка: ${car.brand} ${car.model}</h2>
        <p> Цена: ${car.price} $</p>
    `;
};

// Функция для обработки выбора автомобиля
const handleCarSelection = (event) => {
    const selectedCarValue = event.target.value;

    // Получение данных об автомобилях и отображение информации о выбранном автомобиле
    getCarsData()
        .then(cars => {
            const selectedCar = cars.find(car => car.brand === selectedCarValue);
            if (selectedCar) {
                displayCarInfo(selectedCar);
            } else {
                throw new Error('Автомобиль не найден');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
};

// Добавление обработчика события выбора автомобиля
selectElement.addEventListener('change', handleCarSelection)
