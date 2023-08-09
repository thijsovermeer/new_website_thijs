// components/About.js
import Image from 'next/image';
import CardLayout from './CardLayout';

export default function About() {
    return (
        <CardLayout>
            <div id="about" className="card">
                <h1 className="section-title">About Me</h1>
                <div className="card-content">
                    <div className="card-image">
                    <Image src={'/images/pf.webp'} alt="About profile photo" width={300} height={300} />

                    </div>
                    <div className="card-text">
                        <p>
                            Hello! I&apos;m <strong>Thijs Overmeer</strong>, a scientific programmer. I&apos;m passionate about leveraging technology to improve lives and businesses. With an Industrial Engineering degree from the <strong>University of Technology in Eindhoven</strong> and a Master&apos;s in Data Science & Entrepreneurship from <strong>JADS</strong>, I have a solid academic foundation.
                            <br/><br/>
                            Presently, I&apos;m affiliated with the <strong>EAISI community</strong> at the Technical University of Eindhoven. Here, I delve into diverse AI projects ranging from sports analytics to logistics. My collaborations with industry partners focus on innovative solutions using cutting-edge AI technologies.
                            <br/><br/>
                            In addition to my projects, I contribute to EAISI&apos;s education by delivering tutorials. This role lets me share my expertise and keep updated with AI trends.
                            <br/><br/>
                            Beyond AI, I enjoy an active lifestyle, especially cycling and fitness. I&apos;m eager to connect with fellow AI enthusiasts and professionals. Let&apos;s chat!
                        </p>
                    </div>
                </div>
            </div>
        </CardLayout>
    );
}