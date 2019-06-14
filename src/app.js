import React from 'react';
import './app.css';
import Header from './header';
import './header.css'
import Introduction from './introductionsection'
import './introductionsection.css'
import DoctorAndPatientCard from './doctorandpatientcard'
import './brand.css'
import Brandsection from './brand'
import Stats from './stats'
import SectionInner from './sectioninner'
import Footer from './footer'



const App = () => <div> 
<header>
    <Header/>
</header>
<main>
    <Introduction/>
    <DoctorAndPatientCard/>
    <Brandsection/>
    <Stats/>
    <SectionInner/>
</main>
<footer>
    <Footer/>
</footer>
</div>


export default App; 