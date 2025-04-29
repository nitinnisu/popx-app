import React, { useState } from 'react';
import logo from "./components/profile.jpeg";
import './App.css';


const WelcomeScreen = ({ onNavigate }) => {
    return (
        <div className="welcome-container">
            <h1>Welcome to PopX</h1>
            <p>Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit.</p>
            <button className="welcome-button" onClick={() => onNavigate('create')}>
                Create Account
            </button>
            <button className="welcome-button secondary" onClick={() => onNavigate('login')}>
                Already Registered? Login
            </button>
        </div>
    );
};

const AccountSettingsScreen = ({ onNavigate }) => {
    return (
        <div className="account-settings-container">
            <div className="account-settings-header">
                Account Settings
            </div>
            <div className="account-info">
                <div className="profile-image">
                    <img src={logo} alt="User profile"  />
                </div>
                <div className="user-details">
                    <h2>Marry Doe</h2>
                    <p>Marry@gmail.Com</p>
                </div>
            </div>
            <div className="lorem-ipsum">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </div>
        </div>
    );
};

const CreateAccountScreen = ({ onNavigate }) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [agency, setAgency] = useState('yes');
    const [error, setError] = useState('');

    const handleCreateAccount = () => {
        if (!fullName || !phoneNumber || !email || !password) {
            setError('Please fill in all required fields.');
            return;
        }

        alert('Account created (simulated)!');
        onNavigate('welcome');
    };

    return (
        <div className="create-account-container">
            <h2>Create your<br />PopX account</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="full-name" className="required-label">Full Name <span className="required-asterisk">*</span></label>
                    <input type="text" id="full-name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number" className="required-label">Phone number <span className="required-asterisk">*</span></label>
                    <input type="text" id="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="required-label">Email address <span className="required-asterisk">*</span></label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="required-label">Password <span className="required-asterisk">*</span></label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="company-name">Company name</label>
                    <input type="text" id="company-name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div className="form-group">
                    <p>Are you an Agency?</p>
                    <div className="radio-group">
                        <input type="radio" id="yes" name="agency" value="yes" checked={agency === 'yes'} onChange={(e) => setAgency(e.target.value)} />
                        <p htmlFor="yes">Yes</p>
                        <input type="radio" id="no" name="agency" value="no" checked={agency === 'no'} onChange={(e) => setAgency(e.target.value)} />
                        <p htmlFor="no">No</p>
                    </div>
                </div>
                <button type="submit" className="create-account-button" onClick={handleCreateAccount}>Create Account</button>
            </form>
            {/* <button onClick={() => onNavigate('welcome')}>Back to Welcome</button> */}
        </div>
    );
};

const SignInScreen = ({ onNavigate }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        onNavigate('settings');
    };

    return (
        <div className="sign-in-container">
            <h2>Sign in to your<br />PopX account</h2>
            <p>Lorem ipsum dolor sit amet,<br />consectetuer adipiscing elit.</p>
            {error && <p className="error-message">{error}</p>}
            <form className="sign-in-form" onSubmit={(e) => e.preventDefault()}> 
                <div className="form-group">
                    <label htmlFor="email-signin">Email Address</label>
                    <input
                        type="email"
                        id="email-signin"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password-signin">Password</label>
                    <input
                        type="password"
                        id="password-signin"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
            </form>
            {/* <button onClick={() => onNavigate('welcome')}>Back to Welcome</button> */}
        </div>
    );
};

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('welcome');

    const handleNavigation = (screen) => {
        setCurrentScreen(screen);
    };

    return (
        <div className="mobile-container">
            {currentScreen === 'welcome' && <WelcomeScreen onNavigate={handleNavigation} />}
            {currentScreen === 'settings' && <AccountSettingsScreen onNavigate={handleNavigation} />}
            {currentScreen === 'create' && <CreateAccountScreen onNavigate={handleNavigation} />}
            {currentScreen === 'login' && <SignInScreen onNavigate={handleNavigation} />}
        </div>
    );
};

export default App;
