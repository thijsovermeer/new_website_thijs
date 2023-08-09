import { useState } from 'react';
import experiences from '../data/experiences';
import Image from 'next/image';
import CardLayout from './CardLayout';

// Sort experiences in descending order of id
const sortedExperiences = experiences.sort((a, b) => b.id - a.id);

export default function Experience() {
    const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
    const currentExperience = sortedExperiences[currentExperienceIndex];

    return (
        <CardLayout>
            <div id="experience" className="card">
            <h1 className="section-title">Experience</h1>
                <div className="card-content">
                    <div className="card-image">
                    <Image src={currentExperience.imageUrl} alt={currentExperience.title} width={400} height={400} loading="lazy"/>

                    </div>
                    <div className="card-text">
                        <h3>{currentExperience.title}</h3>
                        <p>{currentExperience.description}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
    <button 
        className="nav-button"
        disabled={currentExperienceIndex === 0}
        onClick={() => setCurrentExperienceIndex(currentExperienceIndex - 1)}
    >
        Previous
    </button>
    <button 
        className="nav-button"
        disabled={currentExperienceIndex === sortedExperiences.length - 1}
        onClick={() => setCurrentExperienceIndex(currentExperienceIndex + 1)}
    >
        Next
    </button>
</div>
            </div>
        </CardLayout>
    );
}

