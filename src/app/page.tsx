import React from 'react';
import NavBar from './components/NavBar';
import Image from 'next/image'; 

const newsletterContent = [
  {
    title: 'Car Review 2023',
    imageUrl: '/car.jpg', 
    description:
      'Read our latest car review for 2023! Find out about the latest models and features.',
    link: 'https://www.pakwheels.com/new-cars/toyota/corolla/reviews',
  },
  {
    title: 'Top 10 SUVs of the Year',
    imageUrl: '/SUV.jpg', 
    description:
      'Discover the top 10 SUVs of the year with outstanding performance and safety features.',
    link: 'https://www.pakwheels.com/new-cars/best-suv/', 
  },
  {
    title: 'New Electric Car',
    imageUrl: '/electric.jpg', 
    description:
      'Explore the new electric car with eco-friendly technology and futuristic design.',
    link: 'https://www.pakwheels.com/used-cars/electric/389926', 
  },
  {
    title: 'Luxury Sedan',
    imageUrl: '/luxury.jpg', 
    description:
      'Discover the epitome of luxury and elegance in our top-rated luxury sedan review.',
    link: 'https://www.pakwheels.com/used-cars/luxury/72787', 
  },
];

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: 'center' }}>Welcome to Cars Newsletter</h1>
      <h2  style={{ textAlign: 'center',color:'grey',fontSize:14 }}>Subscribe to learn about new product features, the latest in technology, and updates</h2>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <input
          type="email"
          placeholder="Enter your email"
          style={{ padding: '10px', marginRight: '10px' ,width: '200px' }}
        />
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Subscribe
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        {/* Car Review */}
        <div style={{ flex: '1', marginRight: '0px', textAlign: 'center' ,marginBottom:'20px'}}>
          <a href={newsletterContent[0].link} target="_blank" rel="noopener noreferrer">
            <Image
              src={newsletterContent[0].imageUrl}
              alt={newsletterContent[0].title}
              width={550}
              height={350}
              objectFit="cover"
            />
            <h3>{newsletterContent[0].title}</h3>
          </a>
          <p>{newsletterContent[0].description}</p>
        </div>
        
        {/* Top 10 SUVs */}
        <div style={{ flex: '1' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {newsletterContent.slice(1).map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '0px' }}>
                <div style={{ flex: '1' }}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={300}
                    height={150}
                    objectFit="cover"
                  />
                </div>
                <div style={{ flex: '1', textAlign: 'left', marginLeft: '0px' }}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <h3>{item.title}</h3>
                  </a>
                  <p style={{ marginTop: '5px' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
     
    </div>
  );
};

export default Home;
