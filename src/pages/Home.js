
/**
* @file Home page for website
* @author Carson Fujita
* @copyright Carson Fujita, 2025
*/
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import MainNav from '../MainNav';

// Home Markdown
import WebMarkdown from '../notes/home.md'

/**
 * Creates the homepage for the website. The body of the webpage is imported
 * from markdown
 * @returns The react homepage
 */
function Home() {
    //The state hook make a markdown state for when fetching markdown information is complete
    const [markdown, setMarkdown] = useState('');

    //Sync component with fetch of markdown information
    useEffect(() => {
        fetch(WebMarkdown)
            .then((r) => r.text())
            .then((text) => setMarkdown(text))
            .catch((error) => console.error('Error fetching markdown:', error));
    }, []);
    
    return (
        <>
            <main>
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
            </main>
        </>
    );
}
export default Home