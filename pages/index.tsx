import type {NextPage} from 'next'

import IntroSection, {
    INTRO_SECTION_PAGE_HEIGHT,
} from '@components/templates/IntroSection'
import AboutMeSection from '@components/templates/AboutMeSection'
import MySkillSection from '@components/templates/MySkillSection'
import ArchivingSection from '@components/templates/ArchivingSection'
import CareerSection from '@components/templates/CareerSection'
import {useCallback, useMemo, useRef} from 'react'
import Text from '@components/atoms/Text'
import ProjectSection from '@components/templates/ProjectSection'
import {motion, useScroll, useTransform} from 'framer-motion'

export type SectionMethodsType = {
    scrollToSection: (index: number) => void
}

const HEADER_HEIGHT = 72

const Home: NextPage = () => {
    const IntroSectionRef = useRef<HTMLDivElement>(null)
    const AboutMeSectionRef = useRef<HTMLDivElement>(null)
    const MySkillSectionRef = useRef<HTMLDivElement>(null)
    const ArchivingSectionRef = useRef<HTMLDivElement>(null)
    const CareerSectionRef = useRef<HTMLDivElement>(null)
    const ProjectSectionRef = useRef<HTMLDivElement>(null)

    const {scrollY} = useScroll()

    /** header motion styles */
    const headerBackgroundColor = useTransform(scrollY, (value) => {
        return 'white'
    })

    /** header text motion styles */
    const headerTextBackgroundColor = useTransform(scrollY, (value) => {
        return 'black'
    })

    const scrollToSection = useCallback((index: number) => {
        // TEMP
        const isMobile = window.innerWidth < 800

        switch (index) {
            case 0:
                return window.scrollTo({
                    top:
                        IntroSectionRef.current?.offsetTop! -
                        (!isMobile ? HEADER_HEIGHT : 0),
                    behavior: 'smooth',
                })
            case 1:
                return window.scrollTo({
                    top:
                        AboutMeSectionRef.current?.offsetTop! -
                        (!isMobile ? HEADER_HEIGHT : 0),
                    behavior: 'smooth',
                })
            case 2:
                return window.scrollTo({
                    top:
                        MySkillSectionRef.current?.offsetTop! -
                        (!isMobile ? HEADER_HEIGHT : 0),
                    behavior: 'smooth',
                })

            case 3:
                return window.scrollTo({
                    top:
                        ProjectSectionRef.current?.offsetTop! -
                        (!isMobile ? HEADER_HEIGHT : 0),
                    behavior: 'smooth',
                })

            case 4:
                return window.scrollTo({
                    top:
                        CareerSectionRef.current?.offsetTop! -
                        (!isMobile ? HEADER_HEIGHT : 0),
                    behavior: 'smooth',
                })

            case 5:
                return window.scrollTo({
                    top:
                        ArchivingSectionRef.current?.offsetTop! -
                        (!isMobile ? HEADER_HEIGHT : 0),
                    behavior: 'smooth',
                })
        }
    }, [])

    const sectionMethods = useMemo(() => ({scrollToSection}), [scrollToSection])

    const headers = [
        {title: 'About Me', scrollIndex: 1},
        {title: 'Skill', scrollIndex: 2},
        {title: 'Project', scrollIndex: 3},
        {title: 'Career', scrollIndex: 4},
        {title: 'Archiving', scrollIndex: 5},
    ]
    return (
        <main
            css={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div
                css={{
                    display: 'none',
                    '@media (min-width: 800px)': {
                        display: 'block',
                    },
                }}
            >
                <motion.header
                    style={{backgroundColor: headerBackgroundColor}}
                    css={{
                        zIndex: 101,
                        position: 'fixed',
                        top: 0,
                        height: HEADER_HEIGHT,
                        opacity: 0.9,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '2rem',
                        paddingRight: '2rem',
                        justifyContent: 'center',
                        boxShadow: '0 1px 0.3rem hsl(0deg 0% 80% / 80%)',
                    }}
                >
                    <div
                        css={{
                            maxWidth: '71.25rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Text
                            bold
                            css={{
                                fontSize: '2rem',
                                cursor: 'pointer',
                                transition: '0.2s ease',
                                ':hover': {
                                    color: '#007aff !important',
                                },
                            }}
                            onClick={() => scrollToSection(0)}
                            style={{
                                color: headerTextBackgroundColor,
                            }}
                        >
                            {"Geonho's Portfolio"}
                        </Text>

                        <div
                            css={{
                                display: 'flex',
                                gap: '2rem',
                                alignItems: 'center',
                            }}
                        >
                            {headers.map((header) => (
                                <Text
                                    key={header.title}
                                    css={{
                                        fontSize: '1.5rem',
                                        cursor: 'pointer',
                                        transition: '0.2s ease',
                                        ':hover': {
                                            color: '#007aff !important',
                                        },
                                    }}
                                    onClick={() => scrollToSection(header.scrollIndex)}
                                    style={{
                                        color: headerTextBackgroundColor,
                                    }}
                                >
                                    {header.title}
                                </Text>
                            ))}
                        </div>
                    </div>
                </motion.header>
            </div>
            <IntroSection ref={IntroSectionRef} sectionMethods={sectionMethods}/>
            <AboutMeSection ref={AboutMeSectionRef} sectionMethods={sectionMethods}/>
            <MySkillSection ref={MySkillSectionRef} sectionMethods={sectionMethods}/>
            <ProjectSection ref={ProjectSectionRef} sectionMethods={sectionMethods}/>
            <CareerSection ref={CareerSectionRef} sectionMethods={sectionMethods}/>
            <ArchivingSection
                ref={ArchivingSectionRef}
                sectionMethods={sectionMethods}
            />
        </main>
    )
}

export default Home
