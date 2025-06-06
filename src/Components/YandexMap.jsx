import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

// Компонент для отображения Яндекс.Карт с маркером
const YandexMap = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Заголовок на русском */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Карта с маркером</h1>
      {/* <div className="w-full max-w-4xl h-[500px] shadow-lg rounded-lg overflow-hidden"> */}
        {/* Инициализация Яндекс.Карт с API-ключом */}
        <YMaps query={{ apikey: '8bcdef74-a65b-4b78-bdb9-1e395f04188d', lang: 'ru_RU' }}>
          <Map
            defaultState={{
              center: [55.7558, 37.6173], // Координаты центра Москвы
              zoom: 10, // Уровень масштабирования
            }}
            width="100%"
            height="100%"
          >
            {/* Маркер на карте */}
            <Placemark
              geometry={[55.7558, 37.6173]}
              properties={{
                hintContent: 'Москва',
                balloonContent: 'Столица России'
              }}
            />
          </Map>
        </YMaps>
      </div>
    // </div>
  );
};

export default YandexMap;