
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import FloatingNav from './components/FloatingNav';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 transition-colors duration-300">
        <LoadingScreen />
        <ScrollProgress />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: 'rgba(15, 23, 42, 0.9)',
              color: '#fff',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
            success: {
              iconTheme: {
                primary: '#3b82f6',
                secondary: '#fff',
              },
            },
          }}
        />
        <Header />
        <Hero />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
        <FloatingNav />
      </div>
    </ThemeProvider>
  );
}

export default App;