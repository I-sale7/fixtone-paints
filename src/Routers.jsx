import React, {useEffect} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Business from './pages/homePages/Business';
import BusinessDark from './pages/homePages/BusinessDark';
import Services from './pages/servicePages/Services';
import Services2 from './pages/servicePages/Services2';
import Services3 from './pages/servicePages/Services3';
import ServicesDetails from './pages/servicePages/ServicesDetails';
import Project2Column from './pages/project/Project2Column';
import Project3Column from './pages/project/Project3Column';
import ProjectCarousel from './pages/project/ProjectCarousel';
import ProjectDetails from './pages/project/ProjectDetails';
import Team from './pages/teamPages/Team';
import Team2 from './pages/teamPages/Team2';
import Team3 from './pages/teamPages/Team3';
import TeamDetails from './pages/teamPages/TeamDetails';
import AboutUs from './pages/innerPages/AboutUs';
import Pricing from './pages/innerPages/Pricing';
import ContactUs from './pages/innerPages/ContactUs';
import Error404 from './pages/innerPages/Error404';
import BlogStandard from './pages/blogPages/BlogStandard';
import BlogWithSideBar from './pages/blogPages/BlogWithSideBar';
import Blog2Column from './pages/blogPages/Blog2Column';
import Blog3Column from './pages/blogPages/Blog3Column';
import BlogSingle from './pages/blogPages/BlogSingle';
import { useLocale } from './components/services/LocaleContext';

const Routers = () => {

    const {locale} = useLocale();

  useEffect(()=> {
    document.documentElement.setAttribute('lang', locale === 'ar' ? 'ar' : 'en');
    document.documentElement.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
  }, [locale])

    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route path='' element={<Business />}></Route>
                    <Route path='business-dark' element={<BusinessDark />}></Route>
                    <Route path='services' element={<Services />}></Route>
                    <Route path='services-2' element={<Services2 />}></Route>
                    <Route path='services-3' element={<Services3 />}></Route>
                    <Route path='services-details/:id' element={<ServicesDetails />}></Route>
                    <Route path='services-details' element={<Navigate to='services-details/1' />}></Route>
                    <Route path='project-2-column' element={<Project2Column />}></Route>
                    <Route path='project-3-column' element={<Project3Column />}></Route>
                    <Route path='project-carousel' element={<ProjectCarousel />}></Route>
                    <Route path='project-details/:id' element={<ProjectDetails />}></Route>
                    <Route path='project-details' element={<Navigate to='project-details/1' />}></Route>
                    <Route path='team' element={<Team />}></Route>
                    <Route path='team-2' element={<Team2 />}></Route>
                    <Route path='team-3' element={<Team3 />}></Route>
                    <Route path='team-details/:id' element={<TeamDetails />}></Route>
                    <Route path='team-details' element={<Navigate to='team-details/1' />} />
                    <Route path='about-us' element={<AboutUs />}></Route>
                    <Route path='pricing' element={<Pricing />}></Route>
                    <Route path='contact-us' element={<ContactUs />}></Route>
                    <Route path='blog-standard' element={<BlogStandard />}></Route>
                    <Route path='blog-with-sidebar' element={<BlogWithSideBar />}></Route>
                    <Route path='blog-2-column' element={<Blog2Column />}></Route>
                    <Route path='our-products' element={<Blog3Column />}></Route>
                    <Route path='blog-single/:id' element={<BlogSingle />}></Route>
                    <Route path='blog-single' element={<Navigate to='blog-single/1' />}></Route>
                    <Route path='*' element={<Error404 />}></Route>
                </Route>
            </Routes>
        </>
    );
};

export default Routers;