import { useState, useEffect } from 'react'
import './App.css'
import ItemCard from './ItemCard';

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetcher('https://fortnite-api.com/v2/cosmetics/br/new').then((d) => {
      setData(d);
    });
  }, []);

  return (
    <div>
      <h1>Hello Base Camp!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div className="container">
        {!data && <div>No items yet!</div>}
        {data?.data?.items?.map((item) => (
          <ItemCard
            imgSrc={item.images.icon}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
