import React from 'react'

const page = () => {
  return (
    //Chat-gpt Content..
    <div>
    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2d3748' }}>
        Privacy Policy
    </h1>
    <p style={{ fontSize: '1.1rem', color: '#4a5568', marginBottom: '1.5rem', lineHeight: 1.7 }}>
        Your privacy is important to us. This page explains how we collect, use, and protect your personal information when you use our services.
    </p>
    <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2b6cb0', marginBottom: '0.5rem' }}>Information We Collect</h2>
        <ul style={{ paddingLeft: '1.5rem', color: '#4a5568' }}>
            <li>Personal identification information (Name, email address, etc.)</li>
            <li>Usage data and cookies</li>
            <li>Other information you provide to us</li>
        </ul>
    </section>
    <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2b6cb0', marginBottom: '0.5rem' }}>How We Use Your Information</h2>
        <ul style={{ paddingLeft: '1.5rem', color: '#4a5568' }}>
            <li>To provide and maintain our service</li>
            <li>To improve user experience</li>
            <li>To communicate updates and offers</li>
            <li>To comply with legal obligations</li>
        </ul>
    </section>
    <section style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2b6cb0', marginBottom: '0.5rem' }}>Your Rights</h2>
        <p style={{ color: '#4a5568' }}>
            You have the right to access, update, or delete your personal information at any time. Please contact us if you have any questions or concerns.
        </p>
    </section>
    <p style={{ fontSize: '1rem', color: '#718096' }}>
        Last updated: June 2024
    </p>
    </div>
  )
}

export default page
