import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

import '../styles/components/footer.css'

export default function FooterComponent() {
    return (
        <footer id="footer-app">
            <span>@Copyright SERVNAC - Challenge Eduardo</span>
            <div>
                <a href="https://github.com/EduardoAraD"
                    rel="noreferrer"
                    target="_blank">
                    <FiGithub color="#FFFFFF" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/eduardo-ara%C3%BAjo-2a679a176/"
                    rel="noreferrer"
                    target="_blank">
                    <FiLinkedin color="#FFFFFF" /> Linkedin
                </a>
            </div>
        </footer>
    )
}