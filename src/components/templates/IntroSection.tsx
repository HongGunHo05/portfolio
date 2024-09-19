import Center from '@components/atoms/Center'
import Text from '@components/atoms/Text'
import {useTheme} from '@emotion/react'
import {motion, useScroll, useTransform} from 'framer-motion'
import {SectionMethodsType} from 'pages'
import {forwardRef, ForwardRefRenderFunction, useEffect, useRef} from 'react'
import {Section} from './IntroSection.style'

export const INTRO_SECTION_PAGE_HEIGHT = 1800
const MOTION_OFFSET = {
    WELCOME_CONTAINER_SCALE: [0, 900],
    WELCOME_MAIN_TITLE_OPACITY: [700, 900],
    WELCOME_SUB_TITLE_OPACITY: [500, 700],
    BIO_MAIN_TITLE_OPACITY: [1000, 2400],
    BIO_SUB_TITLE_OPACITY: [1400, 2400],
    BIO_MAIN_TITLE_TRANSLATE_Y: [1000, 1400],
    BIO_CONTAINER_HOLDUP_Y: 3400,
    READ_MORE_BUTTON_OPACITY: [2800, 3000],
    READ_MORE_BUTTON_TRANSLATE_Y: [2800, 3000],
}

const WelcomeFixedMotion = () => {
    const {scrollY} = useScroll()
    const theme = useTheme()

    /** container motion styles */
    const containerScale = useTransform(
        scrollY,
        MOTION_OFFSET.WELCOME_CONTAINER_SCALE,
        [1, 1.2]
    )

    /** main title motion styles */
    const mainTitleOpacity = useTransform(
        scrollY,
        MOTION_OFFSET.WELCOME_MAIN_TITLE_OPACITY,
        [1, 0]
    )

    /** sub title motion styles */
    const subTitleOpacity = useTransform(
        scrollY,
        MOTION_OFFSET.WELCOME_SUB_TITLE_OPACITY,
        [1, 0]
    )

    /** scrollNav motion styles */
    const scrollNavOpacity = useTransform(scrollY, (value) =>
        value > MOTION_OFFSET.BIO_CONTAINER_HOLDUP_Y ? 0 : 1
    )

    return (
        <Center type="fixed">
            <Center
                css={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                }}
            >
                <motion.div style={{scale: containerScale}}>
                    <motion.div
                        style={{opacity: mainTitleOpacity}}
                        css={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            css={{
                                color: theme.colors.black,
                                textAlign: 'center',
                                fontSize: '4rem',
                                '@media (min-width: 768px)': {
                                    fontSize: '8rem',
                                },
                            }}
                        >
                            안녕하세요!
                        </Text>
                    </motion.div>

                    <motion.div
                        style={{opacity: subTitleOpacity}}
                        css={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            css={{
                                color: theme.colors.black,
                                textAlign: 'center',
                                fontSize: '1.5rem',
                                '@media (min-width: 768px)': {
                                    fontSize: '2.5rem',
                                },
                            }}
                        >
                            FE개발자 홍건호입니다
                        </Text>
                    </motion.div>
                </motion.div>

                <motion.div
                    css={{
                        position: 'absolute',
                        bottom: 100,
                        margin: '1rem',
                    }}
                    initial={{translateY: 0}}
                    whileInView={{
                        translateY: '10px',
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 1,
                        repeatDelay: 1,
                    }}
                    style={{opacity: scrollNavOpacity}}
                >
                    <Text
                        css={{
                            color: theme.colors.black,
                        }}
                    >
                        ↓ 스크롤하여 진행해주세요!
                    </Text>
                </motion.div>
            </Center>
        </Center>
    )
}


type IntroSectionProps = {
    sectionMethods: SectionMethodsType
}
const IntroSection: ForwardRefRenderFunction<
    HTMLDivElement,
    IntroSectionProps
> = ({sectionMethods}, ref) => {
    const theme = useTheme()

    return (
        <Section
            ref={ref}
            css={{
                backgroundColor: theme.colors.white,
                height: INTRO_SECTION_PAGE_HEIGHT,
                position: 'relative',
            }}
        >
            <WelcomeFixedMotion/>
        </Section>
    )
}

export default forwardRef(IntroSection)
