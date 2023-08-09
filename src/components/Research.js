import { useState } from 'react';
import research from '../data/research';
import Image from 'next/image';
import CardLayout from './CardLayout';

// Sort experiences in descending order of id
const sortedResearch = research.sort((a, b) => b.id - a.id);

export default function Research() {
    const [currentResearchIndex, setCurrentResearchIndex] = useState(0);
    const currentResearch = sortedResearch[currentResearchIndex];

    return (
        <CardLayout>
            <div id="experience" className="card">
            <h1 className="section-title">Research</h1>
                <div className="card-content">
                    <div className="card-image">
                    <Image src={currentResearch.imageUrl} alt={currentResearch.title} width={400} height={400} loading="lazy"/>

                    </div>
                    <div className="card-text">
                        <h3>{currentResearch.title}</h3>
                        <p>{currentResearch.description}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
    <button 
        className="nav-button"
        disabled={currentResearchIndex === 0}
        onClick={() => setCurrentResearchIndex(currentResearchIndex - 1)}
    >
        Previous
    </button>
    <button 
        className="nav-button"
        disabled={currentResearchIndex === sortedResearch.length - 1}
        onClick={() => setCurrentResearchIndex(currentResearchIndex + 1)}
    >
        Next
    </button>
</div>
            </div>
        </CardLayout>
    );
}
