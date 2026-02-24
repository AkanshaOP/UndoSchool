import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgeFilters from './components/AgeFilters';
import CourseCards from './components/CourseCards';
import TeacherProfiles from './components/TeacherProfiles';
import PopularCategories from './components/PopularCategories';
import FilterWithTime from './components/FilterWithTime';
import HorizontalCourseCards from './components/HorizontalCourseCards';
import Footer from './components/Footer';
import LiveNotification from './components/LiveNotification';
import WebinarSection from './components/WebinarSection';
import AppProviders from './components/AppProviders';

function AppContent() {
    const [activeAge, setActiveAge] = useState('7-8');

    const webinarCoursesData = [
        {
            id: 1, sellingFast: true, isWebinar: true,
            title: 'Summer robotics camp: fun projects with auto arduino, Tink...',
            age: '7-10 yrs', time: '45 mins', price: '₹ 299', rating: 4.9, learners: 200,
            tags: [{ name: 'English', color: 'text-blue-600 bg-blue-50 border-blue-200' }, { name: 'Starting at 4am', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }],
            teacher: 'Daniel james',
            image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 2, sellingFast: false, isWebinar: true,
            title: 'Creative Art & Craft: Masterpieces for kids',
            age: '7-10 yrs', time: '45 mins', price: '₹ 299', rating: 4.9, learners: 200,
            tags: [{ name: 'English', color: 'text-blue-600 bg-blue-50 border-blue-200' }, { name: 'Starting at 7pm', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }],
            teacher: 'Sarah Wilson',
            image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 3, sellingFast: false, isWebinar: true,
            title: 'Chess Strategies: Learn to play like a Grandmaster',
            age: '7-10 yrs', time: '45 mins', price: '₹ 299', rating: 4.9, learners: 200,
            tags: [{ name: 'English', color: 'text-blue-600 bg-blue-50 border-blue-200' }, { name: 'Starting at 10am', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }],
            teacher: 'Alex Chen',
            image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1588412079929-790b9f593d8e?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 4, sellingFast: false, isWebinar: true,
            title: 'Public Speaking: Build Confidence & Stage Presence',
            age: '7-10 yrs', time: '45 mins', price: '₹ 299', rating: 4.9, learners: 200,
            tags: [{ name: 'English', color: 'text-blue-600 bg-blue-50 border-blue-200' }, { name: 'Starting at 3pm', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }],
            teacher: 'Priya Sharma',
            image: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400'
        },
    ];

    // Specific data for "Popular Categories" section mapping exact tags from Figma image
    const popularCoursesData = [
        {
            id: 1, sellingFast: true,
            title: 'Python for Kids: Build Real Interactive Games',
            description: 'Dive into the world of programming with fun interactive games and puzzles.',
            age: '7-10 yrs', time: '45 mins', price: '₹ 299', rating: 4.9, learners: 200,
            tags: [{ name: 'Coding', color: 'text-orange-500 bg-orange-50 border-orange-200' }, { name: 'Intermediate', color: 'text-red-500 bg-red-50 border-red-200' }, { name: '4 classes', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }],
            teacher: 'Alex Chen',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 2, sellingFast: false,
            title: 'Public Speaking Masterclass for Kids',
            description: 'Build confidence and stage presence to deliver amazing speeches.',
            age: '7-10 yrs', time: '45 mins', price: '₹ 399', rating: 4.9, learners: 500,
            tags: [{ name: 'Public speaking', color: 'text-green-600 bg-green-50 border-green-200' }, { name: '4 classes', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' }],
            teacher: 'Priya Sharma',
            image: 'https://images.unsplash.com/photo-1577880216142-8549e9488dad?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 3, sellingFast: false,
            title: 'Advanced Chess Strategies & Tactics',
            description: 'Master the board with advanced gameplay strategies and opening tactics.',
            age: '10-14 yrs', time: '60 mins', price: '₹ 499', rating: 5.0, learners: 350,
            tags: [{ name: 'Chess', color: 'text-gray-600 bg-gray-50 border-gray-200' }, { name: 'Intermediate', color: 'text-red-500 bg-red-50 border-red-200' }],
            teacher: 'Daniel James',
            image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1588412079929-790b9f593d8e?auto=format&fit=crop&q=80&w=400'
        },
        {
            id: 4, sellingFast: false,
            title: 'Homework Help: Math & Science Made Easy',
            description: 'Interactive tutoring sessions to help solve the toughest homework problems.',
            age: '7-12 yrs', time: '45 mins', price: '₹ 199', rating: 4.8, learners: 850,
            tags: [{ name: 'Home works help', color: 'text-blue-500 bg-blue-50 border-blue-200' }, { name: 'Beginner', color: 'text-green-500 bg-green-50 border-green-200' }],
            teacher: 'Sarah Wilson',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400',
            imageHover: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400'
        },
    ];

    return (
        <div className="min-h-screen relative overflow-x-clip bg-[#FAFBFF]">
            <Navbar />
            <main>
                <div id="home">
                    <Hero />
                </div>
                <div className="flex flex-col space-y-16 py-16 w-full items-center">
                    <div id="age-filters" className="w-full">
                        <AgeFilters activeAge={activeAge} setActiveAge={setActiveAge} />
                    </div>

                    <div id="courses" className="w-full">
                        <CourseCards
                            sectionTitle="New Launches ⭐"
                            sectionSubtitle="Our most loved courses that kids absolutely adore!"
                        />

                        <CourseCards
                            sectionTitle="Featured Courses ⭐"
                            sectionSubtitle="Our most loved courses that kids absolutely adore!"
                        />
                    </div>

                    <div id="teachers" className="w-full">
                        <TeacherProfiles />
                    </div>

                    <div id="webinars" className="w-full">
                        <WebinarSection />
                    </div>

                    <div id="popular" className="pt-8 w-full">
                        <PopularCategories />
                        <div className="mt-4 md:mt-8">
                            <CourseCards coursesData={popularCoursesData} />
                        </div>
                    </div>

                    <div id="explore" className="pt-10 w-full">
                        <FilterWithTime />
                        <div className="-mt-8">
                            <HorizontalCourseCards />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <LiveNotification />
        </div>
    );
}

export default function App() {
    return (
        <AppProviders>
            <AppContent />
        </AppProviders>
    );
}
