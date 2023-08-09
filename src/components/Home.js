import Image from 'next/image';
import CardLayout from './CardLayout';

export default function Home() {
  return (
    <CardLayout>
      <div id="home" className='card'>
        <div className='card-content'>
          <div className='card-image-home'>
            <Image src="/images/home_photo.webp" alt="Home Thijs Overmeer portfolio photo" width={5000} height={3000} loading="lazy"/>
          </div>
          <div className="card-text-home">
              <h1 className="section-title">Thijs{'\n'}Overmeer</h1>
              <p>
                <span className="highlight">Scientific Programmer</span> | 
                <span className="highlight">AI Researcher</span> | 
                <span className="highlight">Professional Educator</span>
              </p>
            </div>
          </div>
        </div>
    </CardLayout>
  );
}